import React, { useRef, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { colors } from "../../utils/colors";
import { AccessForm, FormInput } from "../styles/Access";
import { GlobalButton } from "../styles/Global";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useExternalAPI } from "../../hooks/useExternalAPI";
import { useEffect } from "react";
import validator from "validator";

const Step2 = ({ email, setStep }) => {
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(120);
  const [resend, setResend] = useState(false);
  const [error, setError] = useState("");
  const [strong, setStrong] = useState(false);
  const form = useRef();
  const { getResetOTP, passwordReset } = useExternalAPI();

  useEffect(() => {
    setTimeout(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else setResend(true);
    }, 1000);
  }, [timer]);

  const request = async (e) => {
    e.preventDefault();
    if (loading) return;
    setError("");
    setLoading(true);

    if (e.target[0].value !== e.target[1].value) {
      setError("Password mismatch!");
      setLoading(false);
      return;
    }

    const request = await passwordReset({
      emailaddress: email,
      otp: e.target[1].value,
      password: e.target[3].value,
    });

    if (request?.newUser === false) {
      setError("Account already exist, login.");
    }
    if (request?.success === true) {
      setStep(3);
    } else {
      setError(request?.message);
    }
    setLoading(false);
  };

  const resendOTP = async () => {
    setError("");
    const request = await getResetOTP(email);
    console.log("Request response: ", request);
    if (request?.success === true) {
      setResend(false);
      setTimer(120);
    } else if (request?.success === false) setError(request?.message);
    else setError("An error occured, try again later");
  };

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setStrong(true);
      setError("Strong password");
    } else {
      setStrong(false);
      setError("Weak password");
    }
  };

  return (
    <AccessForm
      key={1}
      onSubmit={(e) => (!false ? request(e) : null)}
      ref={form}
    >
      <button
        onClick={() => setStep(0)}
        style={{
          fontSize: 12,
          color: colors.primary,
          background: "none",
          border: "none",
          cursor: "pointer",
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
        }}
        type="button"
      >
        <MdOutlineKeyboardBackspace
          size={15}
          color={colors.primary}
          style={{ marginRight: 5 }}
        />{" "}
        change email
      </button>
      <FormInput type="text" maxLength={6} placeholder="OTP" required />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 5,
          marginBottom: 30,
          flexWrap: "wrap",
        }}
      >
        <label style={{ color: "grey", fontSize: 12 }}>
          verify the OTP sent to {email}.
        </label>
        {resend ? (
          <button
            onClick={() => (resend ? resendOTP() : null)}
            style={{
              fontSize: 12,
              color: colors.primary,
              textDecoration: "underline",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            type="button"
          >
            Resend OTP
          </button>
        ) : (
          <span style={{ color: colors.primary }}>
            resend OTP in {timer} seconds
          </span>
        )}
      </div>
      Password *
      <FormInput
        type="password"
        required
        hidden={false}
        onChange={(e) => validate(e.target.value)}
        style={{ marginBottom: 10 }}
        placeholder="**********"
      />
      Confirm password *
      <FormInput
        type="password"
        required
        hidden={false}
        placeholder="**********"
      />
      <p
        style={{
          fontSize: 12,
          color: strong ? "#308D46" : "red",
          marginTop: 5,
        }}
      >
        {error}
      </p>
      <GlobalButton
        background={colors.primary}
        color="white"
        border={colors.primary}
        //   onClick={() => setOn((on) => (on++ === 3 ? 1 : on++))}
        type="submit"
      >
        {loading ? (
          <span style={{ padding: 10, marginTop: -10, marginBottom: 7 }}>
            <PropagateLoader color={"white"} loading={loading} size={15} />
          </span>
        ) : (
          <>
            Verify{" "}
            <RiSecurePaymentLine
              size={15}
              color="white"
              style={{ marginLeft: 10 }}
            />
          </>
        )}
      </GlobalButton>
    </AccessForm>
  );
};

export default Step2;
