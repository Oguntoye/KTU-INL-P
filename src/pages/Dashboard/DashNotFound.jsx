import React from "react";
import { useLocation } from "react-router-dom";
import {
  LandingContainer,
  LandingDiv,
  LandingWrapper,
} from "../../components/styles/Landing";

const DashNotFound = () => {
  let location = useLocation();

  return (
    <LandingContainer style={{padding: 0, border: "none", background: "none"}}>
      <LandingWrapper style={{borderBox: "none", boxShadow: "none", border: "none"}}>
        <LandingDiv background={"white"} flex={1} hide={false}>
          <img
            src={require("../../assets/logo-circular.png")}
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

export default DashNotFound;
