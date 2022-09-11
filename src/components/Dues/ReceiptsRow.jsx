import React from "react";
import "../styles/PendingRegistrations.scss";
import "../styles/DuesTable.scss";
import { GlobalButton } from "../styles/Global";

const ReceiptsRow = () => {
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
          <p>
            <span
              style={{
                fontWeight: "bold",
                color: "#219ebc",
                marginBottom: 10,
              }}
            >
              Mr. Bekoe Kojo Isaac
            </span>
            <p>Lawyer</p>
          </p>
        </div>
        <div class="col col-d-2" data-label="Amount">
          <p>Annual Dues</p>
          <p style={{ color: "grey", fontSize: 12 }}>Mobile money</p>
        </div>
        <div class="col col-d-3" data-label="Created">
          GH₵ 2,343.00
        </div>
        <div class="col col-d-4" data-label="Due date">
          1st January, 2023
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
            //   onClick={() => setSelect(!select)}
            >
              Print receipt
            </GlobalButton>
        </div>
      </li>
    </>
  );
};

export default ReceiptsRow;
