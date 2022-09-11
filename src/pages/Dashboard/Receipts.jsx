import React, { useEffect, useState } from "react";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { MdError } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { DashSearchContainer, DashSearchInput } from "../../components/styles/Dashboard";
import { useExternalAPI } from "../../hooks/useExternalAPI";
import { colors } from "../../utils/colors";
import "../../components/styles/PendingRegistrations.scss";
import "../../components/styles/join.css";
import { DataListInput } from "../../components/styles/Access";
import MembersRow from "../../components/MemberDirectories/MembersRow";
import ReceiptsRow from "../../components/Dues/ReceiptsRow";
import { PendingSearch } from "../../components/styles/PendingRegistrations";
import { GlobalButton } from "../../components/styles/Global";
import { RiSearchLine } from "react-icons/ri";

const Receipts = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [memberList, setMemberList] = useState([]);
  const { getMembers } = useExternalAPI();

  useEffect(() => {
    fetchMembers("APRUSER");
  }, []);

  const fetchMembers = async (searchmode) => {
    if (loading) return;
    setError("");
    setLoading(true);

    const data = {
      searchmode,
    };

    const request = await getMembers(data);
    if (request?.success === true) {
    //   console.log("Fetch: ", request?.data?.data);
      setMemberList(request?.data?.data);
    } else {
      setError("An error occured, try again later.");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* <AccessInfo>Pending Account List</AccessInfo> */}
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
          Loading..
          <ClipLoader color={colors.primary} loading={loading} size={15} />
        </DashSearchContainer>
      ) : error !== "" ? (
        <DashSearchContainer
          style={{
            margin: "10px 0",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#E6505C",
            border: "none",
            color: "white",
          }}
        >
          {error}
          <MdError color={"white"} size={20} />
        </DashSearchContainer>
      ) : memberList === [] || memberList === null ? (
        <DashSearchContainer
          style={{
            margin: "10px 0",
            padding: 10,
            justifyContent: "space-between",
            alignItems: "center",
            border: "1px solid rgba(0, 0, 0, 0.09)",
            backgroundColor: "#f8f8fa",
            fontSize: 14,
          }}
        >
          No receipts available
          <IoNotificationsCircleSharp color={colors.primary} size={30} />
        </DashSearchContainer>
      ) : (
        <>
          <div
            style={{
              margin: "10px 0",
              display: "flex",
              height: "max-content",
            }}
          >
            <PendingSearch>
              <DashSearchInput
                placeholder="search account by account name.."
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
                  Group (all)
                </option>
                <option>All</option>
                <option>Lawyer</option>
                <option>Student</option>
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
                <option>Date ascending</option>
                <option>Date descending</option>
              </DataListInput>
            </DashSearchContainer>
          </div>

          <ul class="responsive-table">
            <li class="table-header">
              <div
                class="col col-d-1"
                style={{ display: "flex", alignItems: "center" }}
              >
                Account
              </div>
              <div class="col col-d-2">Payment</div>
              <div class="col col-d-3">Amount</div>
              <div class="col col-d-4">Date</div>
            </li>
            <ReceiptsRow />
            <ReceiptsRow />
          </ul>
        </>
      )}
    </div>
  );
};

export default Receipts;
