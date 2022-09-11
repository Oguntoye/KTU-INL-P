import React, { useState } from "react";
import "../styles/PendingRegistrations.scss";
import "../styles/DuesTable.scss";
import AnimateHeight from "react-animate-height";
import { GlobalButton } from "../styles/Global";
import {
  PendingFullContainer,
  PendingFullDiv,
} from "../styles/PendingRegistrations";
import { useEffect } from "react";
import { colors } from "../../utils/colors";
import { useExternalAPI } from "../../hooks/useExternalAPI";
import { DashSearchContainer } from "../styles/Dashboard";
import { ClipLoader } from "react-spinners";

const DuesRow = ({ data, fetch }) => {
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState(false);
  const [counsel, setCounsel] = useState(null);
  const { deleteFee } = useExternalAPI();

  const {
    id,
    paysetuptype,
    desctext,
    forwhich1,
    forwhich2,
    forwhich3,
    forwhich4,
    amount,
    paycategory,
    minamount,
    yearofdue,
    dateofdue,
    startdate,
    enddate,
  } = data;

  useEffect(() => {
    try {
      const counsels = JSON.parse(forwhich3);
      console.log("Counsels: ", counsels);
      setCounsel(counsels);
    } catch (e) {}
  }, []);

  const deleteDues = async () => {
    if (loading) return;
    setLoading(true);

    const request = await deleteFee({ paymentsetupid: id });
    if (request?.success === true) {
      fetch();
    }

    setLoading(false);
  };

  return (
    <>
      <li class="table-row">
        <div
          class="col col-d-1"
          data-label="Title"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {data?.desctext}
        </div>
        <div
          class="col col-d-2"
          data-label="Type"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {data?.paysetuptype === "AD" ? "Anual dues" : "Special dues"}
        </div>
        <div
          class="col col-d-3"
          data-label="Group"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {data?.forwhich1}
        </div>
        <div
          class="col col-d-4"
          data-label="Due date"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {data?.yearofdue}
          <GlobalButton
            background={"green"}
            color={"white"}
            style={{
              margin: 0,
              borderRadius: 5,
              padding: "10px 20px",
              width: "max-content",
              marginTop: 10,
            }}
            type="submit"
            onClick={() => setDetails(!details)}
          >
            {details ? "View less" : "View more"}
          </GlobalButton>
        </div>
      </li>
      <AnimateHeight height={details ? "auto" : 0}>
        {loading ? (
          <DashSearchContainer
            style={{
              margin: "10px 0",
              padding: 10,
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid rgba(0, 0, 0, 0.09)",
            }}
          >
            Please wait, deleting fee..
            <ClipLoader color={colors.primary} loading={true} size={15} />
          </DashSearchContainer>
        ) : (
          <PendingFullContainer>
            <PendingFullDiv width={0.7} direction="row">
              <span style={{ flex: 1, paddingLeft: 10 }}>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Dues Category</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    {forwhich2 === "" ? "Not available" : forwhich2}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Pay Category</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    {paycategory === "" ? "Not available" : paycategory}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Junior Counsel</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    {" "}
                    ₵
                    {counsel === null
                      ? "Not available"
                      : " " + counsel[2].value}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Counsel</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    {" "}
                    ₵
                    {counsel === null
                      ? "Not available"
                      : " " + counsel[1].value}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Senior Counsel</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    {" "}
                    ₵
                    {counsel === null
                      ? "Not available"
                      : " " + counsel[1].value}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Amount</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    ₵{amount === "" ? "Not available" : " " + amount}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Minimum amount</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    ₵{minamount === "" ? "Not available" : " " + minamount}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Year of due</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    {yearofdue === "" ? "Not available" : yearofdue}
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
                    marginBottom: 5,
                  }}
                >
                  <div style={{ flex: 0.3, color: "gray" }}>Date of due</div>
                  <div style={{ flex: 0.7, paddingLeft: 3 }}>
                    {dateofdue === "" ? "Not available" : dateofdue}
                  </div>
                </div>
              </span>
            </PendingFullDiv>
            <PendingFullDiv width={0.3} style={{ justifyContent: "flex-end" }}>
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
                onClick={() => deleteDues()}
              >
                Delete
              </GlobalButton>
            </PendingFullDiv>
          </PendingFullContainer>
        )}
      </AnimateHeight>
    </>
  );
};

export default DuesRow;
