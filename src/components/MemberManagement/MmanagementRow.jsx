import React from 'react'
import "../styles/PendingRegistrations.scss";
import "../styles/DuesTable.scss";

const MmanagementRow = () => {
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
              primacyorg@gmail.com
            </div>
            <div class="col col-d-2" data-label="Amount">
              Pending
            </div>
            <div class="col col-d-3" data-label="Created">
              22nd August, 2022
            </div>
            <div class="col col-d-4" data-label="Due date">
            23rd August, 2022
            </div>
          </li>
        </>
      );
    };

export default MmanagementRow