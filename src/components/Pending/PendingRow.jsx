import React, { useEffect, useState } from "react";
import "../styles/PendingRegistrations.scss";
import dateFormat from "dateformat";
import AnimateHeight from "react-animate-height";
import {
  IconUserPending,
  PendingFullContainer,
  PendingFullDiv,
  PendingFullList,
} from "../styles/PendingRegistrations";
import { IconDashProfile, IconDashRight } from "../styles/Dashboard";
import { GlobalButton } from "../styles/Global";
import { colors } from "../../utils/colors";
import { useExternalAPI } from "../../hooks/useExternalAPI";
import { DataListInput } from "../styles/Access";

const PendingRow = ({ checkDisplay, data, removeUser, unpaid }) => {
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  const [reason, setReason] = useState(null);
  const [select, setSelect] = useState(false);
  const {
    id,
    title,
    gender,
    firstname,
    lastname,
    othername,
    emailaddress,
    isemailverified,
    phonenumber,
    isphonenumberverified,
    datecreated,
    dateofbirth,
    region,
    fullregionname,
    fullschoolname,
    typeofuser,
    university,
    yearofcall,
    fullchamber,
    fullchapter,
    fullareaofp,
  } = data;
  const { approveReject } = useExternalAPI();

  useEffect(() => {
    console.log("Data: ", data);
  }, []);

  const action = async (action) => {
    if (loading) return;
    setLoading(true);

    if (action === "REJECT" && reason === null) {
      alert("Choose reason!");
      return;
    }

    const request = await approveReject({
      id,
      statusresponse: action,
      rejectionreason: action === "REJECT" ? reason : "",
    });
    if (request?.success === true) {
      removeUser(id);
    }

    setLoading(false);
  };

  return (
    <div>
      <li class="table-row" onClick={() => setSelect(!select)}>
        <div
          class="col col-1"
          data-label="Full name"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "underline",
          }}
        >
          {checkDisplay ? (
            <label class="container">
              <input
                type={"checkbox"}
                style={{ marginRight: 5 }}
                onChange={(e) => setCheck(e.target.checked)}
              />
              <span class="checkmark" />
            </label>
          ) : null}
          {title + " " + lastname + " " + othername + " " + firstname}
        </div>
        <div class="col col-2" data-label="Customer Name">
          {gender}
        </div>
        <div class="col col-3" data-label="Amount">
          {emailaddress}
        </div>
        <div class="col col-4" data-label="Verified">
          {isemailverified}
        </div>
        <div class="col col-5" data-label="Verified">
          {phonenumber}
        </div>
        <div class="col col-6" data-label="Verified">
          {typeofuser}
        </div>
        <div class="col col-7" data-label="Verified">
          {dateFormat(datecreated, "dS mmmm, yyyy")}
        </div>
      </li>
      <AnimateHeight height={select ? "auto" : 0}>
        <PendingFullContainer>
          <PendingFullDiv width={0.6} direction="row">
            <IconUserPending />
            <span style={{ flex: 1, paddingLeft: 10 }}>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Region</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {region === "" ? "Not available" : fullregionname}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Year of call</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {yearofcall === "" ? "Not available" : yearofcall}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Chamber</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {fullchamber === "" ? "Not available" : fullchamber.name}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Chapter</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {fullchapter === null
                    ? "Not available"
                    : fullchapter.map((data, index) => data.fullname + ", ")}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Practice</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {fullareaofp === null
                    ? "Not available"
                    : fullareaofp.map((data, index) => data.fullname + ", ")}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>University</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {university === "" ? "Not available" : fullschoolname}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Verified Phone</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {isphonenumberverified}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                  marginBottom: 5,
                }}
              >
                <div style={{ flex: 0.3, color: "gray" }}>Date of birth</div>
                <div style={{ flex: 0.7, paddingLeft: 3 }}>
                  {dateofbirth === null ? "Not available" : dateofbirth}
                </div>
              </div>
            </span>
          </PendingFullDiv>
          {unpaid ? null : loading ? (
            "..implementing action"
          ) : (
            <PendingFullDiv
              width={0.4}
              direction="column"
              style={{
                alignContent: "flex-end",
                alignItems: "flex-end",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-start",
                }}
              >
                <DataListInput
                  style={{ margin: 0, width: "max-content" }}
                  onChange={(e) => setReason(e.target.value)}
                >
                  <option value="" disabled selected>
                    choose reason
                  </option>
                  <option>Unknown email</option>
                  <option>Account blacklisted</option>
                </DataListInput>
                <GlobalButton
                  background={colors.primary}
                  color={"white"}
                  style={{
                    margin: 0,
                    borderRadius: 5,
                    padding: "10px 20px",
                    width: 100,
                    marginLeft: 10,
                    height: "max-content",
                  }}
                  type="submit"
                  onClick={() => action("REJECT")}
                >
                  Reject
                </GlobalButton>
              </div>
              <GlobalButton
                background={"green"}
                color={"white"}
                style={{
                  margin: 0,
                  borderRadius: 5,
                  padding: "10px 20px",
                  width: 100,
                }}
                type="submit"
                onClick={() => action("APPROVE")}
              >
                Approve
              </GlobalButton>
            </PendingFullDiv>
          )}
        </PendingFullContainer>
      </AnimateHeight>
    </div>
  );
};

export default PendingRow;
