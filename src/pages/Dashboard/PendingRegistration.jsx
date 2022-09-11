import React, { useEffect, useState } from "react";
import { AccessInfo, DataListInput } from "../../components/styles/Access";
import { useExternalAPI } from "../../hooks/useExternalAPI";
import "../../components/styles/PendingRegistrations.scss";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { MdError } from "react-icons/md";
import PendingRow from "../../components/Pending/PendingRow";
import {
  DashSearchContainer,
  DashSearchInput,
} from "../../components/styles/Dashboard";
import { RiSearchLine } from "react-icons/ri";
import {
  PendingFilterContainer,
  PendingSearch,
} from "../../components/styles/PendingRegistrations";
import { GlobalButton } from "../../components/styles/Global";
import { colors } from "../../utils/colors";
import { ClipLoader } from "react-spinners";
import { IoNotificationsCircleSharp } from "react-icons/io5";

const PendingRegistration = () => {
  const [pendingUsers, setPendingUsers] = useState([]);
  const { getPendingAccounts } = useExternalAPI();
  const [checkDisplay, setCheckDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pendingList, setPendingList] = useState([]);
  const [filteredList, setFilteredList] = useState(null);

  useEffect(() => {
    fetchPending("", "1");
  }, []);

  const filter = (sort, type) => {
    if (sort === "" || sort === "Date ascending") {
      filteredList !== null
        ? setFilteredList((e) =>
            e.sort((a, b) => new Date(a.datecreated) - new Date(b.datecreated))
          )
        : setPendingList((e) =>
            e.sort((a, b) => new Date(a.datecreated) - new Date(b.datecreated))
          );
    } else if (sort === "Account name") {
      filteredList !== null
        ? setFilteredList((e) => e.sort((a, b) => a.lastname - b.lastname))
        : setPendingList((e) => e.sort((a, b) => a.lastname - b.lastname));
    } else if (sort === "Account email") {
      filteredList !== null
        ? setFilteredList((e) =>
            e.sort((a, b) => a.emailaddress - b.emailaddress)
          )
        : setPendingList((e) =>
            e.sort((a, b) => a.emailaddress - b.emailaddress)
          );
    } else {
      filteredList !== null
        ? setFilteredList((e) =>
            e.sort((a, b) => new Date(b.datecreated) - new Date(a.datecreated))
          )
        : setPendingList((e) =>
            e.sort((a, b) => new Date(b.datecreated) - new Date(a.datecreated))
          );
    }
  };

  const search = (e) => {
    e.preventDefault();

    const search = e.target[0].value;
    const sort = e.target[1].value;
    setFilteredList(null);

    console.log(search, sort);
    if (pendingList.length > 0) {
      setFilteredList(pendingList);
      console.log("List yeah");
      if (search?.length > 0) {
        console.log("Search yeah");
        setFilteredList(
          pendingList.filter((value) =>
            value.emailaddress.toLowerCase().match(new RegExp(search, "g"))
          )
        );
      }
    }
  };

  const fetchPending = async (searchtext, page) => {
    if (loading) return;
    setError("");
    setLoading(true);

    const data = {
      searchtext,
      page,
      pendingtypes: "INCOMPLETE_PAYMENT"
    };

    const request = await getPendingAccounts(data);
    if (request?.success === true) {
      // console.log("Fetch: ", request?.data?.data)
      setPendingList(request?.data?.data);
      console.log("List: ", pendingList);
    } else {
      setError("An error occured, try again later.");
    }

    setLoading(false);
  };

  const removeUser = (id) => {
    if (pendingList !== [])
      setPendingList((e) => e?.filter((user) => user.id !== id));
    if (filteredList !== null)
      setFilteredList((e) => e?.filter((user) => user.id !== id));
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
      ) : pendingList === [] ||
        pendingList === null ||
        pendingList.length === 0 ? (
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
          Currently don't have any pending approvals
          <IoNotificationsCircleSharp color={colors.primary} size={30} />
        </DashSearchContainer>
      ) : (
        <>
          <PendingFilterContainer onSubmit={(e) => search(e)}>
            <PendingSearch>
              <DashSearchInput
                placeholder="search account by email.."
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
                  <option>Account name</option>
                  <option>Account email</option>
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
                class="col col-1"
                style={{ display: "flex", alignItems: "center" }}
              >
                <label class="container">
                  <input
                    type={"checkbox"}
                    style={{ marginRight: 5 }}
                    onChange={(e) => setCheckDisplay(e.target.checked)}
                  />
                  <span class="checkmark" />
                </label>
                Full name
              </div>
              <div class="col col-2">Gender</div>
              <div class="col col-3">Email</div>
              <div class="col col-4">Verified</div>
              <div class="col col-5">Phone</div>
              <div class="col col-6">Account</div>
              <div class="col col-7">Joined</div>
            </li>
            {filteredList !== null
              ? filteredList.map((data, index) => (
                  <PendingRow
                    key={data.id}
                    checkDisplay={checkDisplay}
                    data={data}
                    removeUser={removeUser}
                    unpaid={true}
                  />
                ))
              : pendingList.map((data, index) => (
                  <PendingRow
                    key={data.id}
                    checkDisplay={checkDisplay}
                    data={data}
                    removeUser={removeUser}
                    unpaid={true}
                  />
                ))}
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GlobalButton
              background={colors.primary}
              color={"white"}
              style={{
                margin: 0,
                borderRadius: 5,
                padding: "5px 10px",
                marginRight: 5,
              }}
              type="submit"
            >
              <FiChevronLeft color="white" />
            </GlobalButton>
            <span
              style={{
                padding: 5,
                borderRadius: 2,
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                width: 30,
                textAlign: "center",
              }}
            >
              1
            </span>
            <GlobalButton
              background={colors.primary}
              color={"white"}
              style={{
                margin: 0,
                borderRadius: 5,
                padding: "5px 10px",
                marginLeft: 5,
              }}
              type="submit"
            >
              <FiChevronRight color="white" />
            </GlobalButton>
          </div>
        </>
      )}
    </div>
  );
};

export default PendingRegistration;
