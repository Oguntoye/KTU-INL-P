import AnimateHeight from "react-animate-height";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

export const PendingContainer = styled.ul`
  width: 100%;
`;

export const PendingList = styled.li`
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const PendingTableHeader = styled.li`
  background-color: #1B164E;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  color: white;
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PendingTableRow = styled.div`
  background-color: #ffffff;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 25px 30px;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 25px;

  :hover {
    transition: 0.5s all ease-in-out;
    background-color: rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const PendingCol1 = styled.div`
  flex-basis: 25%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const PendingCol2 = styled.div`
  flex-basis: 10%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const PendingCol3 = styled.div`
  flex-basis: 15%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const PendingCol4 = styled.div`
  flex-basis: 10%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const PendingCol5 = styled.div`
  flex-basis: 15%;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

export const PendingCol6 = styled.div`
  flex-basis: 10%;

  @media (max-width: 768px) {
    flex-basis: 100%;
    display: flex;
    padding: 10px 0;
    ::before {
      color: #6c7a89;
      padding-right: 10px;
      content: attr(data-label);
      flex-basis: 50%;
      text-align: right;
    }
  }
`;

export const PendingCol7 = styled.div`
  flex-basis: 15%;

  @media (max-width: 768px) {
    flex-basis: 100%;
    display: flex;
    padding: 10px 0;
    ::before {
      color: #6c7a89;
      padding-right: 10px;
      content: ${({ label }) => label};
      flex-basis: 50%;
      text-align: right;
    }
  }
`;

export const PendingFilterContainer = styled.form`
  display: flex;
  margin: 20px 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PendingFullContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ height }) => (height ? 0 : "5px 10px 15px 10px")};
  font-size: 14px;
  flex-direction: row;

  @media (max-width: 768px) {
    font-size: 12px;
    flex-direction: column;
  }
`;

export const PendingFullDiv = styled.div`
  display: flex;
  flex: ${({ width }) => width};
  flex-direction: ${({ direction }) => direction};

  @media (max-width: 768px) {
    flex: 1;
    flex-direction: row;
  }
`;

export const IconUserPending = styled(FaUserCircle)`
  width: 92px;
  height: 92px;
  color: gray;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const PendingSearch = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    margin-bottom: 10px;
  }
`;
