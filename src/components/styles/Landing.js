import styled from "styled-components";
import { colors } from "../../utils/colors";
import landingbackground from "../../assets/landingbackground.jpg"

export const LandingContainer = styled.div`
  padding: 7.5% 20%;
  min-height: 100vh;
  background: url(${landingbackground}) no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  flex-direction: column;
  background-color: ${colors.ivory_dark};

  @media (max-width: 768px) {
    padding: 5%;
  }
`;

export const LandingWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 20px 40px rgb(10 33 65 / 5%), 0px 0px 2px rgb(0 0 0 / 13%);
`;

export const LandingDiv = styled.div`
  padding: 5%;
  flex: ${({ flex }) => flex};
  display: flex;
  justify-content: center;
  background-color: ${({ background }) => background};
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-in-out;
  overflow: hidden;

  @media (max-width: 768px) {
    flex: 1;
    display: ${(props) => (props.hide ? "none" : "flex")};
  }
`;

export const LandingSelector = styled.div`
  transition: 0.5s all ease-in-out;
  overflow: hidden;
  opacity: ${({ transition }) => (!transition ? 1 : 0)};
  width: ${({ transition }) => (!transition ? "100%" : 0)};
`;

export const LandingSelectorPhone = styled.div`
  transition: 0.5s all ease-in-out;
  overflow: ${({ transition }) => (!transition ? "visible" : "hidden")};
  opacity: ${({ transition }) => (!transition ? 1 : 0)};
  width: ${({ transition }) => (!transition ? "100%" : 0)};
`;

export const AppName = styled.h3`
  font-size: 20px;
  margin-top: 10%;
  font-weight: normal;
  color: white;
  font-size: 18px;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 17px;
  }
`;

export const AppDesc = styled.p`
  font-size: 13px;
  color: ${colors.ivory};
  text-align: center;
  font-weight: lighter;
`;

export const IntroIcon = styled.img`
  width: 80px;
  height: 80px;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
