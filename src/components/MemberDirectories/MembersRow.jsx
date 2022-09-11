import React, { useEffect, useState } from "react";
import "../styles/PendingRegistrations.scss";
import "../styles/DuesTable.scss";
import { MemberDataRow } from "../styles/Member";
import { IconUserPending, PendingFullContainer, PendingFullDiv } from "../styles/PendingRegistrations";
import dateFormat from "dateformat";
import { GlobalButton } from "../styles/Global";
import AnimateHeight from "react-animate-height";

const MembersRow = ({ data, dark }) => {
    const [select, setSelect] = useState(false);
  const {
    id,
    title,
    gender,
    firstname,
    lastname,
    othername,
    membershipid,
    emailaddress,
    isemailverified,
    phonenumber,
    isphonenumberverified,
    lastloggedin,
    profilepicture,
    datecreated,
    yearcreated,
    dateofbirth,
    region,
    typeofuser,
    university,
    fullschoolname,
    fullregionname,
  } = data;

  return (
    <>
      <li
        class="table-row"
        style={{ backgroudnColor: dark ? "rgba(0,0,0 0.05)" : "white" }}
      >
        <div
          class="col col-d-1"
          data-label="Title"
          style={{
            display: "flex",
            alignItems: "center",
            paddingRight: 10,
          }}
        >
          <MemberDataRow style={{ flexDirection: "row", alignItems: "center" }}>
            <IconUserPending style={{ marginRight: 10 }} />
            <p>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#219ebc",
                  marginBottom: 10,
                }}
              >
                {title + " " + lastname + " " + othername + " " + firstname}
              </span>
              <p>{typeofuser}</p>
            </p>
          </MemberDataRow>
        </div>
        <div
          class="col col-d-2"
          data-label="Personal"
          style={{ display: "flex", alignItems: "center", paddingRight: 10 }}
        >
          <MemberDataRow>
            <span>{emailaddress}</span>
            <span>{phonenumber}</span>
            <span>{fullregionname}</span>
            <span>{gender}</span>
          </MemberDataRow>
        </div>
        <div
          class="col col-d-3"
          data-label="Career"
          style={{ display: "flex", alignItems: "center", paddingRight: 10 }}
        >
          <MemberDataRow>
            <span>{membershipid}</span>
            <span>{fullschoolname}</span>
          </MemberDataRow>
        </div>
        <div
          class="col col-d-4"
          data-label="Joined"
          style={{ alignItems: "center" }}
        >
          {dateFormat(datecreated, "dS mmmm, yyyy")}
          <GlobalButton
              background={"green"}
              color={"white"}
              style={{
                margin: 0,
                borderRadius: 5,
                padding: "10px 20px",
                width: "max-content",
                marginTop: 10
              }}
              type="submit"
              onClick={() => setSelect(!select)}
            >
              {
                select ? "hide " : "show "
              } details
            </GlobalButton>
        </div>
      </li>
      <AnimateHeight height={select ? "auto" : 0}>
        <PendingFullContainer>
          <PendingFullDiv width={1} direction="row">
            <span style={{ flex: 1, paddingLeft: 10 }}>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Verified email</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {isemailverified === "" ? "Not available" : isemailverified}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Last login</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {lastloggedin === "" ? "Not available" : dateFormat(lastloggedin?.split("|")[0], "dS mmmm, yyyy")}
                </div>
              </div>
            </span>
          </PendingFullDiv>
        </PendingFullContainer>
      </AnimateHeight>
    </>
  );
};

export default MembersRow;
