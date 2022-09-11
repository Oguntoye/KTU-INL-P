import React, { useEffect, useState } from "react";
import {
  DashboardNav,
  DashIcon,
  DashIconMenu,
  DashIconSep,
  DashIconTitle,
  IconDashHome,
  IconDashLogoutNav,
  IconDashPayment,
  IconDashProfileH,
  IconDashResources,
  IconDashSettings,
  IconDashShop,
} from "../styles/Dashboard";
import { useAuth } from "../../context/AuthProvider";
import { colors } from "../../utils/colors";
import { useExternalAPI } from "../../hooks/useExternalAPI";

const Navigation = ({ navOpen, setNavOpen, page }) => {
  const [isMobile, setIsMobile] = useState(false);
  const { logout, user, navigate } = useAuth();
  const [active, setActive] = useState(null);
  const {loginOutUser} = useExternalAPI()

  useEffect(() => {
    setActive(1);
  }, []);

  //choose the screen size
  const onNavigate = (page) => {
    setActive(page);
    if (page === 1) {
      navigate("/dashboard");
    }
  };

  return (
    <DashboardNav>
      <DashIcon
        src={require("../../assets/logo-circular.png")}
        alt="icon"
        onClick={() => onNavigate(1)}
      />
      <DashIconMenu onClick={() => setNavOpen((open) => !open)} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: colors.primary,
          borderRadius: 15,
          padding: 10,
        }}
      >
        <DashIconSep
          title="Home"
          active={page === "dashboard" ? true : false}
          onClick={() => onNavigate(1)}
        >
          <IconDashHome
            onClick={() => navigate("/dashboard")}
            color={page === "dashboard" ? colors.primary : "white"}
          />
          <DashIconTitle active={active === 1}>Home</DashIconTitle>
        </DashIconSep>
        <DashIconSep
          title="communication"
          active={page === "communication" ? true : false}
          onClick={() => onNavigate(2)}
        >
          <IconDashProfileH
            onClick={() => navigate("/dashboard/communication")}
            color={page === "communication" ? colors.primary : "white"}
          />
          <DashIconTitle active={active === 2}>Profile</DashIconTitle>
        </DashIconSep>
        <DashIconSep
          title="Resources"
          active={page === "resources" ? true : false}
          onClick={() => onNavigate(3)}
        >
          <IconDashResources color={page === "resources" ? colors.primary : "white"} />
          <DashIconTitle active={active === 3}>History</DashIconTitle>
        </DashIconSep>
        <DashIconSep
          title="Settings"
          active={page === "settings" ? true : false}
          onClick={() => onNavigate(4)}
        >
          <IconDashSettings color={page === "settings" ? colors.primary : "white"} />
          <DashIconTitle active={active === 4}>Settings</DashIconTitle>
        </DashIconSep>
      </div>
      <IconDashLogoutNav title="Logout" onClick={() =>  navigate("/")} />
    </DashboardNav>
  );
};

export default Navigation;
