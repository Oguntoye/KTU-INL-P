import React from "react";
import { useLocation } from "react-router-dom";
import { LandingContainer, LandingDiv, LandingWrapper } from "../components/styles/Landing";

const NotFound = () => {
  let location = useLocation();

  return (
    <LandingContainer>
      <LandingWrapper>
      <LandingDiv background={"white"} flex={1} hide={false}>
        <img
          src={require("../assets/logo-circular.png")}
          alt="welcome"
          style={{ height: 100, width: 100 }}
        />
        <h5 style={{ textAlign: "center", marginBottom: 20, fontSize: 30 }}>
          Sorry!!
        </h5>
        <p
          style={{
            textAlign: "center",
            width: "100%",
          }}
        >
          Page with url({location.pathname}) not found.
        </p>
        </LandingDiv>
      </LandingWrapper>
    </LandingContainer>
  );
};

export default NotFound;
