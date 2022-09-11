import styled from "styled-components";
import { colors } from "../../utils/colors";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const HomeSectionContainer = styled.div`
  display: flex;
  width: 50%;
  padding: 10px 0;
  justify-content: space-evenly;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 100%;
    margin: 5px 0;
  }
`;

export const HomeCardContainer = styled.div`
  border-radius: 25px;
  width: 45%;
  padding: 20px;
  height: max-content;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const HomeCardContainerLong = styled.div`
  border-radius: 25px;
  overflow: hidden;
  width: 45%;
  padding-top: 40px;
  height: max-content;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  background-color: ${colors.primary};

  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const HomeCardContainerLong2 = styled.div`
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  padding-top: 40px;
  background-color: #CFDADE;
`;

export const HomeCardContainerLong3 = styled.div`
  border-radius: 25px;
  overflow: hidden;
  width: 100%;
  padding: 20px;
  background-color: white;
`;

export const HomedoubleDivContainer = styled.div`
  width: 45%;
  height: max-content;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
  }
`
