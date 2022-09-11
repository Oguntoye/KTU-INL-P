import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AccessAppName,
  AccessContainer,
  AccessFormContainer,
  AccessInfo,
  AccessIntroIcon,
  AccessNav,
  ViewSliderContainer,
} from "../components/styles/Access";
import { GlobalButton, LandingFooter } from "../components/styles/Global";
import { colors } from "../utils/colors";

import { useAuth } from "../context/AuthProvider";
import { LandingSelector } from "../components/styles/Landing";
import Step4 from "../components/Reset/Step4";
import Step1 from "../components/Reset/Step1";
import Step2 from "../components/Reset/Step2";

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState(null);
  const [email, setEmail] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const { navigate } = useAuth();

  const completeform = (data) => {
    const form = {
      ...data,
      typeofuser: type,
      emailaddress: email,
    };
    setUserInfo(form);

    console.log("Complete form: ", form);
  };

  const renderView = ({ index, active, transitionState }) => {
    return index === 1 ? (
      <Step1 setStep={setStep} setEmail={setEmail} />
    ) : index === 2 ? (
      <Step2 setStep={setStep} email={email} completeform={completeform} />
    ) : (
      <Step4 />
    );
  };

  return (
    <AccessContainer>
      <AccessNav>
        <AccessIntroIcon
          src={require("../assets/logo-circular.png")}
          alt="icon"
          title="Home"
          onClick={() => navigate("/")}
        />
        <AccessAppName>OSSIA Admin</AccessAppName>
        <div style={{ flex: 1 }} />
        <Link to="/" style={{ textDecoration: "none" }}>
          <GlobalButton
            style={{ width: "100%" }}
            background={colors.primary}
            color="white"
            border={colors.primary}
          >
            Login
          </GlobalButton>
        </Link>
      </AccessNav>
      <div style={{ display: "flex", width: "100%" }}>
        <LandingSelector transition={step === 4} style={{ margin: 0 }}>
          <AccessInfo>Password Reset</AccessInfo>
        </LandingSelector>
        <LandingSelector transition={step !== 4} style={{ margin: 0 }}>
          <AccessInfo>Password changed successfully.</AccessInfo>
        </LandingSelector>
      </div>
      <AccessFormContainer>
        <ViewSliderContainer
          renderView={renderView}
          numViews={3}
          activeView={step}
          animateHeight
        />
      </AccessFormContainer>
      <p style={{ textAlign: "center", fontSize: 10, color: "gray" }}>
            OSSIA - Industrial Liaison Office Portal © {new Date().getFullYear()} All rights
            reserved.
          </p>
          <p style={{ textAlign: "center", fontSize: 10, color: "gray" }}>
            v.1.1.1
          </p>
    </AccessContainer>
  );
};

export default ResetPassword;
