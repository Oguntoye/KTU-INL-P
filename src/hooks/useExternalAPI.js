import React, { useState } from "react";
import { useEnv } from "../context/env.context";
import Cookies from "js-cookie";
import { useAuth } from "../context/AuthProvider";

export const useExternalAPI = () => {
  const { apiServerUrl, axios } = useEnv();
  const { logout } = useAuth();

  axios.interceptors.response.use(
    function (response) {
      if (
        response?.data?.message === "Un-authenticated!" ||
        response?.data?.message === "Invalid access"
      ) {
        logout();
        return;
      }
      return response;
    },
    function (error) {
      if (
        error.response.status === 400 &&
        (error.response.data.message === "Un-authenticated!" ||
          error.response.data.message === "Invalid access")
      ) {
        logout();
        return;
      }

      // console.log("Intercept: ", error?.response?.data.message);

      return {
        success: false,
        message:
          error?.message === "Network Error"
            ? error?.message
            : error?.response?.data.message,
      };
    }
  );
  // axios.defaults.withCredentials = true;

  const makeRequest = async (options) => {
    try {
      const response = await axios({ ...options.config, timeout: 15000 });
      console.log("Response: ", response);
      return response?.data || response;
    } catch (error) {
      console.log("Error: ", error);
      return error;
    }
  };

  const getOTP = async (email) => {
    const config = {
      url: `${apiServerUrl}/api/auth/precheck`,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        emailaddress: email,
      },
    };

    const data = await makeRequest({
      config,
    });

    return data;
  };

  const verifyEmail = async (email, otp) => {
    const config = {
      url: `${apiServerUrl}/api/auth/emailotpverify`,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        emailaddress: email,
        otpcode: otp,
      },
    };

    const data = await makeRequest({
      config,
    });

    return data;
  };

  const addPendingAccount = async (userData) => {
    const config = {
      url: `${apiServerUrl}/api/auth/adduserpending`,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: { ...userData, typeofuser: userData.typeofuser.toUpperCase() },
    };

    const data = await makeRequest({
      config,
    });

    return data;
  };

  const getSchools = async (userData) => {
    const config = {
      url: `${apiServerUrl}/api/general/fetchuniversities`,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        id: "1",
        statusresponse: "APPROVE",
      },
    };

    const data = await makeRequest({
      config,
    });

    return data;
  };

  const loginUser = async (loginData) => {
    Cookies.remove("sid");

    const config = {
      url: `${apiServerUrl}/api/adminauth/userlogin`,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: loginData,
    };

    const data = await makeRequest({ config });

    return data;
  };

  const loginOutUser = async (loginData) => {
    const config = {
      url: `${apiServerUrl}/api/auth/logout`,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {},
    };

    const data = await makeRequest({ config });

    // console.log("Log having: ", data)
    if (data.success) 
    logout();

    return null;
  };  

  const getResetOTP = async (email) => {
    const config = {
      url: `${apiServerUrl}/api/auth/initpasswordreset`,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        emailaddress: email,
      },
    };

    const data = await makeRequest({
      config,
    });

    return data;
  };

  const passwordReset = async (userData) => {
    const config = {
      url: `${apiServerUrl}/api/auth/passwordreset`,
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: userData,
    };

    const data = await makeRequest({
      config,
    });

    return data;
  };

  const getPendingAccounts = async (userData) => {
    const config = {
      url: `${apiServerUrl}/api/adminaction1/fetchpendingusers`,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: userData,
    };

    const data = await makeRequest({ config });

    return data;
  };

  const approveReject = async (userData) => {
    const config = {
      url: `${apiServerUrl}/api/adminaction1/approvereject`,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: userData,
    };

    const data = await makeRequest({ config });

    return data;
  };

  const getDashboardData = async () => {
    const config = {
      url: `${apiServerUrl}/api/adminaction1/dashboardsummary`,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        id: "1",
        statusresponse: "APPROVE",
      },
    };

    const data = await makeRequest({ config });

    return data;
  };

  const getMembers = async ({ searchmode }) => {
    const config = {
      url: `${apiServerUrl}/api/adminaction1/dashboardsummarydetails`,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        searchmode,
      },
    };

    const data = await makeRequest({ config });

    return data;
  };

  const setFee = async (feeData) => {
    const config = {
      url: `${apiServerUrl}/api/payment/addnewfeesetup`,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: feeData,
    };

    const data = await makeRequest({ config });

    return data;
  };

  const getChapter = async (userData) => {
    const config = {
      url: `${apiServerUrl}/api/general/fetchchapters`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {
        id: "1",
        statusresponse: "APPROVE",
      },
    };

    const data = await makeRequest({
      config,
    });

    return data;
  };

  const getFees = async (userData) => {
    const config = {
      url: `${apiServerUrl}/api/payment/fetchfeesetup`,
      method: "GET",
      withCredentials: true,
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: userData,
    };

    const data = await makeRequest({
      config,
    });

    return data;
  };

  const deleteFee = async (feeData) => {
    const config = {
      url: `${apiServerUrl}/api/payment/deletefeesetup`,
      method: "POST",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: feeData,
    };

    const data = await makeRequest({ config });

    return data;
  };
  
  const fetchTransactions = async (feeData) => {
    const config = {
      url: `${apiServerUrl}/api/payment/gettranssummary`,
      method: "GET",
      withCredentials: true,
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      data: {}
    };

    const data = await makeRequest({ config });

    return data;
  };

  return {
    getOTP,
    verifyEmail,
    getSchools,
    addPendingAccount,
    loginUser,
    getResetOTP,
    passwordReset,
    getPendingAccounts,
    approveReject,
    getDashboardData,
    getMembers,
    setFee,
    getChapter,
    getFees,
    deleteFee,
    fetchTransactions,
    loginOutUser
  };
};
