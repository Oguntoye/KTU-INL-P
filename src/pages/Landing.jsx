import React, { useEffect, useState } from "react";
import { GlobalButton, LandingFooter } from "../components/styles/Global";
import {
  AppDesc,
  AppName,
  IntroIcon,
  LandingContainer,
  LandingDiv,
  LandingSelector,
  LandingWrapper,
} from "../components/styles/Landing";
import { colors } from "../utils/colors";
import { MdEmail, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  AccessButtonType,
  AccessForm,
  FormInput,
} from "../components/styles/Access";
import { useRef } from "react";
import { useAuth } from "../context/AuthProvider";
import { PropagateLoader } from "react-spinners";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useExternalAPI } from "../hooks/useExternalAPI";
import axios from "axios";

const Landing = () => {
    const [help, setHelp] = useState(false);
    const [loading, setLoading] = useState(false);
    const form = useRef();
    const [userEmail, setUserEmail] = useState("");
    const [error, setError] = useState("");
    const { login, navigate } = useAuth();
    const { loginUser } = useExternalAPI();
    const [meta, setMeta] = useState("");

    useEffect(() => {
        getIP();
    }, []);

    const getIP = async () => {
        const res = await axios.get("https://geolocation-db.com/json/");
        const meta = navigator.userAgent;
        setMeta({
            ipaddress: res.data.IPv4,
            useragent: meta,
        });
    };

  const access = async (e) => {
    e.preventDefault();
    if (loading) return;
        setError("");
        setLoading(true);

        const loginData = {
            emailaddress: e.target[0].value,
            password: e.target[1].value,
            meta,
        };

        // const request = await loginUser(loginData);
        // if (request?.success === true) {
        //   login(request?.data);
        // } else {
        //   setError(request?.message || "An error occured!");
        // }

        login({
            "firstname": "Jane",
            "lastname": "Doe",
            "emailaddress": "janedoe@yahoo.com",
            "profilepicture": null,
            "userrole": 1,
            "forcechangepassword": true
        })
        setLoading(false);
  };

  return (
    <LandingContainer>
      <LandingWrapper>
        <LandingDiv
            background={colors.primary}
            flex={0.55}
            hide={true}
            style={{
                justifyContent: "center",
                backgroundColor: "rgba(29, 20, 58, 0.8)",
            }}
        >
        <IntroIcon src={require("../assets/logo-circular.png")} alt="icon" />
        </LandingDiv>
        <LandingDiv background={"white"} flex={0.45} hide={false}>
          <AppDesc style={{ color: "black", marginTop: 20, marginBottom: 50 }}>
            Sign in to Admin Account
          </AppDesc>
          <div style={{ display: "flex", width: "100%" }}>
            <LandingSelector transition={help}>
              <form
                onSubmit={(e) => (!loading ? access(e) : null)}
                style={{ fontSize: 12 }}
                ref={form}
              >
                Your email *
                <FormInput
                  type="email"
                  required
                  placeholder="example@gmail.com"
                  onChange={(e) => setUserEmail(e.target.value)}
                  style={{ marginBottom: 25 }}
                />
                Password *
                <FormInput
                  type="password"
                  required
                  hidden={false}
                  placeholder="**********"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 5,
                    marginBottom: 30,
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  <p style={{ fontSize: 12, color: "red", marginTop: 5 }}>
                    {error}
                  </p>
                  <button
                    onClick={() => navigate("/resetpassword")}
                    style={{
                      fontSize: 11,
                        color: colors.primary,
                        textDecoration: "underline",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                    }}
                    type="button"
                  >
                    Forgot Password?
                  </button>
                </div>
                <GlobalButton
                  background={colors.primary}
                  color="white"
                  border={colors.primary}
                  style={{ marginTop: 25, width: "100%" }}
                  //   onClick={() => setOn((on) => (on++ === 3 ? 1 : on++))}
                  type="submit"
                >
                  {loading ? (
                    <span
                      style={{ padding: 10, marginTop: -10, marginBottom: 7 }}
                    >
                      <PropagateLoader
                        color={"white"}
                        loading={loading}
                        size={15}
                      />
                    </span>
                  ) : (
                    <>
                      Sign in{" "}
                      <HiArrowNarrowRight
                        size={15}
                        color="white"
                        style={{ marginLeft: 10 }}
                      />
                    </>
                  )}
                </GlobalButton>
              </form>
            </LandingSelector>
            <LandingSelector transition={!help}>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "mailto:info@lawsocietyofghana.com";
                  e.preventDefault();
                }}
                style={{ textDecoration: "none" }}
              >
                <GlobalButton
                  style={{ width: "100%" }}
                  background="white"
                  color={colors.primary}
                  border={colors.accent}
                >
                  <MdEmail
                    color={colors.primary}
                    style={{ marginRight: 5 }}
                    size={20}
                  />{" "}
                  {/* lawsocietyghana@gmail.com */}
                  info@lawsocietyofghana.com
                </GlobalButton>
              </Link>
              <Link
                to="#"
                onClick={(e) => {
                  window.location.href = "tel:+233342296928";
                  e.preventDefault();
                }}
                style={{ textDecoration: "none" }}
              >
                <GlobalButton
                  style={{ width: "100%", marginTop: 10 }}
                  background="white"
                  color={colors.primary}
                  border={colors.accent}
                >
                  <MdPhone
                    color={colors.primary}
                    style={{ marginRight: 5 }}
                    size={20}
                  />{" "}
                  +233342296928
                </GlobalButton>
              </Link>
            </LandingSelector>
          </div>
          <div style={{ flex: 1 }} />
          <GlobalButton
            style={{ width: "100%", fontSize: 12 }}
            background={"white"}
            color={colors.primary}
            border={"white"}
            onClick={() => setHelp((help) => !help)}
          >
            {help ? "Access account?" : "Need help? Contact us!"}
          </GlobalButton>
          <p style={{ textAlign: "center", fontSize: 10, color: "gray" }}>
            OSSIA - Industrial Liaison Office Portal © {new Date().getFullYear()} All rights
            reserved.
          </p>
          <p style={{ textAlign: "center", fontSize: 10, color: "gray" }}>
            v.1.1.1
          </p>
        </LandingDiv>
      </LandingWrapper>
    </LandingContainer>
  );
};

export default Landing;
