import styled from "styled-components";
import { colors } from "../../utils/colors";

export const RowDivSpace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s all ease-in-out;
  color: ${({ active }) => (active ? colors.primary : "black")};

  :hover {
    color: ${colors.primary};
  }
`;

export const RowSpan = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  flex: 1;
`;

export const ColumnSpan = styled.span`
  display: flex;
  flex-direction: column;
`;

export const GlobalButton = styled.button`
  border: none;
  border: 30px;
  border-radius: 20px;
  border: 1px solid ${({ border }) => border};
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  text-align: center;
  padding: 10px 30px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;

  :hover {
    background-color: ${colors.ivory_dark};
    color: ${colors.primary};
    border: 1px solid ${colors.ivory_dark};
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 18px;
    padding: 11px 25px;
  }
`;

export const GlobalDashButton = styled.button`
  border: none;
  border: 30px;
  border-radius: 10px;
  border: 2px solid ${({ border }) => border};
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  text-align: center;
  padding: 7px 25px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  align-self: flex-end;
  height: max-content;

  :hover {
    border-color: black;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px 18px;
    padding: 8px 20px;
    align-self: flex-start;
  }
`;

export const LandingFooter = styled.p`
  position: absolute;
  bottom: 1%;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 12px;

  @media (max-width: 851px) {
    font-size: 8px;
  }
`;
