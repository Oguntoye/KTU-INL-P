import styled from "styled-components";
import { colors } from "../../utils/colors";
import ViewSlider from "react-view-slider";

export const AccessContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  position: relative;
  padding-top: 10%;
  align-items: center;

  @media (max-width: 768px) {
    padding-top: 15%;
  }
`;
export const AccessNav = styled.div`
  display: flex;
  padding: 1.5% 10%;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 20px 40px rgb(10 33 65 / 5%), 0px 0px 2px rgb(0 0 0 / 13%);
  z-index: 5;
  background-color: white;
  @media (max-width: 768px) {
    padding: 1.5% 5%;
  }
`;

export const AccessIntroIcon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const AccessAppName = styled.h3`
  color: ${colors.primary};
  margin-left: 15px;
  font-weight: lighter;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-left: 5px;
  }
`;

export const AccessProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const AccessProgressNumber = styled.div`
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 5px;
  border-radius: 50%;
  background-color: ${({ on }) => (on ? colors.primary : "#949ba9")};
  box-shadow: 8px 8px 12px rgb(148 155 169 / 16%);
  color: white;
  margin-right: 10px;
  transition: 0.5s all ease-in-out;

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
  }
`;

export const AccessProgressLevel = styled.div`
  display: flex;
  align-items: center;
`;

export const AccessInfo = styled.h3`
  margin-top: 5%;
  margin-bottom: 2%;
  font-size: 24px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 5%;
    font-size: 16px;
  }
`;

export const ViewSliderContainer = styled(ViewSlider)`
    width: 100%;
`;

export const AccessFormContainer = styled.div`
  width: 40%;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const AccessForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2%;
  box-shadow: 0px 20px 40px rgb(10 33 65 / 5%), 0px 0px 2px rgb(0 0 0 / 13%);
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 40px;
  color: grey;
  font-size: 15px;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 12px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.5s ease-in-out;

  :hover {
    border: 0.5px solid ${colors.primary};
  }

  :focus {
    border: 0.5px solid ${colors.primary};
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 12px;
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 15px 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.5s ease-in-out;
  resize: vertical;

  :hover {
    border: 0.5px solid ${colors.primary};
  }

  :focus {
    border: 0.5px solid ${colors.primary};
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 12px;
  }
`;

export const DataListInput = styled.select`
  width: 100%;
  padding: 15px 20px;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 10px;
  font-size: 16px;
  outline: none;
  transition: all 0.5s ease-in-out;

  :hover {
    border: 0.5px solid ${colors.primary};
  }

  :focus {
    border: 0.5px solid ${colors.primary};
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 12px;
  }
`;

export const AccessButtonType = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ color }) => color};
  text-align: center;
  padding: 10px 30px;
  width: 50%;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  font-size: 16px;
  align-content: center;
  justify-content: center;
  border-bottom: 3px solid
    ${({ active }) => (active ? colors.primary : "#F4F4F4")};

  :hover {
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 4px 18px;
    padding: 13px 25px;
  }
`;
