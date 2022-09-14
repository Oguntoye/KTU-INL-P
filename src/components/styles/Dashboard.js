import styled from "styled-components";
import { colors } from "../../utils/colors";
import { RiSecurePaymentLine, RiHistoryFill } from "react-icons/ri";
import { GoDashboard } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import {AiOutlineMessage} from "react-icons/ai"
import { HiChevronRight, HiOutlineLogout } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { BiChevronDown, BiPowerOff } from "react-icons/bi";
import { MdHelp } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { AiOutlineSetting } from "react-icons/ai";
import Menu, { Item as MenuItem } from "rc-menu";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`;

export const DashboardNav = styled.div`
  background-color: white;
  border-right: 0.5px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;

  @media (max-width: 768px) {
    flex: 0.1;
  }
`;

export const DashIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const DashIconMenu = styled(HiOutlineMenuAlt2)`
  width: 35px;
  height: 35px;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const DashIconSep = styled.span`
  display: flex;
  width: 100%;
  color: white;
  margin: 15px 0;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  border-radius: 30px;

  background-color: ${({ active }) =>
    active ? "white" : colors.primary};
  padding: 4px;
`;

export const DashIconTitle = styled.span`
  margin-left: 10px;
  color: ${({ active }) =>
    !active ? "white" : colors.primary};
  /* display: block; */
  display: none;
  transition: 0.5s all ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IconDashHome = styled(GoDashboard)`
  width: 25px;
  height: 25px;
  transition: 0.5s all ease-in-out;
  color: black;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
  }
`;

export const IconDashProfileH = styled(AiOutlineMessage)`
  width: 25px;
  height: 25px;
  transition: 0.5s all ease-in-out;
  color: black;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
  }
`;

export const IconDashResources = styled(RiHistoryFill)`
  width: 25px;
  height: 25px;
  transition: 0.5s all ease-in-out;
  color: black;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
  }
`;

export const IconDashPayment = styled(RiSecurePaymentLine)`
  width: 25px;
  height: 25px;
  transition: 0.5s all ease-in-out;
  color: black;
  cursor: pointer;
  margin-top: 20px;

  :hover {
    color: ${colors.primary};
  }
`;

export const IconDashSettings = styled(AiOutlineSetting)`
  width: 25px;
  height: 25px;
  transition: 0.5s all ease-in-out;
  color: black;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
  }
`;

export const IconDashLogoutNav = styled(BiPowerOff)`
  width: 30px;
  height: 30px;
  transition: 0.5s all ease-in-out;
  color: black;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
  }
`;

export const DashboardSelectSection = styled.div`
  flex: 0.15;
  background-color: #f8f8fa;
  padding: 15px;
  overflow: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;

  @media (max-width: 768px) {
    position: fixed;
    z-index: 999;
    width: 85%;
    height: 100%;
    top: 0;
    right: 0;
    transition: all 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    overflow-y: scroll;
    padding-bottom: 20px;
    &::-webkit-scrollbar {
      --webkit-appearance: none;
    }
  }
`;

export const DashboardWorkSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  padding: 15px;

  @media (max-width: 768px) {
    flex: 0.9;
  }
`;

export const DashSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
  margin-top: 40px;
`;

export const DashSearchInput = styled.input`
  flex: 0.8;
  align-self: flex-end;
  font-size: 14px;
  margin-left: 5px;
  background: none;
  border: none;
  outline: none;
`;

export const IconDashRight = styled(HiChevronRight)`
  width: 20px;
  height: 20px;
  color: black;
`;

export const IconDashNotification = styled(IoNotificationsOutline)`
  width: 25px;
  height: 25px;
  color: black;
  transition: 0.5s all ease-in-out;
  cursor: pointer;
  margin-right: 15px;

  :hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const IconDashProfile = styled(FaUserCircle)`
  width: 35px;
  height: 35px;
  color: black;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const IconDashDropDown = styled(BiChevronDown)`
  width: 20px;
  height: 20px;
  color: black;
  border-radius: 50%;
  padding: 2px;
  margin-left: 15px;
  background-color: #f8f8f8;
  transition: 0.5s all ease-in-out;
  cursor: pointer;

  :hover {
    color: ${colors.primary};
    background-color: ${colors.ivory_dark};
  }
`;

export const DashProfileName = styled.span`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const DashDropMenu = styled(Menu)`
  padding: 10px 15px !important;
  border-radius: 5px !important;
  overflow: hidden;
`;

export const DashDropMenuItem = styled(MenuItem)`
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  display: flex !important;
  align-items: center !important;
  font-weight: lighter !important;

  :hover {
    color: ${colors.primary};
  }
`;

export const IconDashLogout = styled(HiOutlineLogout)`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const DashDate = styled.p`
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const DashboardDivContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: max-content;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DashboardDiv = styled.div`
  height: 200px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
  position: relative;
  margin-top: 40px;
  background-color: #f8f8f8;
  flex: ${({ width }) => width};
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    height: 115px;
    padding: 15px;
    width: 100%;
  }
`;

export const DashBoardDivRight = styled.div`
  border-radius: 15px;
  position: relative;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  position: relative;
  margin-top: 40px;
  height: max-content;
  flex: ${({ width }) => width};
  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
  }
`;

export const DashWelcomeBg = styled.img`
  width: auto;
  height: 220px;
  right: 0;
  bottom: 0;
  object-fit: cover;
  position: absolute;
  z-index: 0;

  @media (max-width: 768px) {
    font-size: 12px;
    height: 120px;
  }
`;

export const DashWelcomeh3 = styled.h3`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const DashWelcomeh1 = styled.h3`
  font-size: 44px;
  margin-top: 20px;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-top: 10px;
  }
`;

export const DashboardTitle = styled.div`
  display: flex;
  justify-content: center;
  padding: 5%;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 2.5%;
    font-size: 12px;
  }
`;

export const IconDashTour = styled(MdHelp)`
  width: 20px;
  height: 20px;
  color: ${colors.primary};
  margin-right: 5px;

  @media (max-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

export const HelpDashButton = styled.button`
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14;
  margin-top: 10;
  cursor: pointer;
  padding: 2%;
  width: 100%;
  background: none;
  transition: 0.5s all ease-in-out;

  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
