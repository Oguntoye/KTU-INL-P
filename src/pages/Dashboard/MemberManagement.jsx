import React, { useState } from "react";
import AnimateHeight from "react-animate-height";
import { RiSearchLine } from "react-icons/ri";
import MmanagementRow from "../../components/MemberManagement/MmanagementRow";
import {
  AccessInfo,
  DataListInput,
  FormInput,
} from "../../components/styles/Access";
import {
  DashSearchContainer,
  DashSearchInput,
} from "../../components/styles/Dashboard";
import { GlobalButton } from "../../components/styles/Global";
import {
  PendingFilterContainer,
  PendingSearch,
} from "../../components/styles/PendingRegistrations";
import { colors } from "../../utils/colors";

const MemberManagement = () => {
  const [addDues, setAddDues] = useState(false);

  const search = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h4
        style={{
          margin: "15px 0",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <AccessInfo style={{ margin: "0 20px 0 0" }}>
          Member Management
        </AccessInfo>
        {addDues ? null : (
          <GlobalButton
            style={{ height: "max-content" }}
            color="white"
            background={colors.primary}
            onClick={() => setAddDues(true)}
          >
            Add member
          </GlobalButton>
        )}
      </h4>
      <AnimateHeight height={addDues ? "auto" : 0}>
        <form style={{ fontSize: 14, color: "grey" }}>
          Type *
          <DataListInput style={{ marginBottom: 20 }} required>
            <option value="" disabled selected>
              select account type
            </option>
            <option>Student</option>
            <option>Lawyer</option>
          </DataListInput>
          User email *
          <FormInput
            type="email"
            required
            placeholder="enter email"
            hidden={false}
            style={{ marginBottom: 30 }}
          />
          <span style={{ marginTop: 20, display: "flex" }}>
            <GlobalButton
              background={colors.primary}
              color={"white"}
              style={{
                margin: 0,
                marginRight: 20,
                borderRadius: 5,
                padding: "10px 20px",
                width: 100,
              }}
              type="button"
              onClick={() => setAddDues(false)}
            >
              Cancel
            </GlobalButton>
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
              //   onClick={()=> action("APPROVE")}
            >
              Add
            </GlobalButton>
          </span>
        </form>
      </AnimateHeight>
      <PendingFilterContainer onSubmit={(e) => search(e)}>
        <PendingSearch>
          <DashSearchInput
            placeholder="search dues by email"
            style={{ flex: 1, alignSelf: "center" }}
          />
          <GlobalButton
            background={colors.primary}
            color={"white"}
            style={{ margin: 0, borderRadius: 5, padding: "5px 10px" }}
            type="submit"
          >
            <RiSearchLine color={"white"} size={20} />
          </GlobalButton>
        </PendingSearch>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "max-content",
          }}
        >
          <DashSearchContainer
            style={{
              alignItems: "center",
              margin: 0,
              width: "max-content",
              marginRight: 5,
            }}
          >
            <DataListInput
              style={{
                height: "max-content",
                width: "max-content",
                padding: 10,
                fontSize: 12,
                border: "none",
                margin: 0,
                marginRight: 10,
              }}
            >
              <option value="" disabled selected>
                sort by
              </option>
              <option>Title</option>
              <option>Date ascending</option>
              <option>Date descending</option>
            </DataListInput>
          </DashSearchContainer>
          <DashSearchContainer
            style={{
              alignItems: "center",
              margin: 0,
              width: "max-content",
            }}
          >
            <DataListInput
              style={{
                height: "max-content",
                width: "max-content",
                padding: 10,
                fontSize: 12,
                border: "none",
                margin: 0,
                marginRight: 10,
              }}
            >
              <option value="" disabled selected>
                filter by
              </option>
              <option>All</option>
              <option>Lawyer</option>
              <option>Student</option>
            </DataListInput>
          </DashSearchContainer>
        </div>
      </PendingFilterContainer>
      <ul class="responsive-table">
        <li class="table-header">
          <div
            class="col col-d-1"
            style={{ display: "flex", alignItems: "center" }}
          >
            Email
          </div>
          <div class="col col-d-2">Status</div>
          <div class="col col-d-3">Sent date</div>
          <div class="col col-d-4">Expiration date</div>
        </li>
        <MmanagementRow />
      </ul>
    </div>
  );
};

export default MemberManagement;
