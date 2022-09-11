import React, { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { RiSearchLine } from "react-icons/ri";
import DuesRow from "../../components/Dues/DuesRow";
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
import Select from "react-select";
import { colourStyles } from "../../components/styles/Select2";
import { colors } from "../../utils/colors";
import "../../components/styles/DuesTable.scss";
import "../../components/styles/join.css";
import { MultiSelect } from "react-multi-select-component";
import { useExternalAPI } from "../../hooks/useExternalAPI";
import { ClipLoader } from "react-spinners";
import { MdError } from "react-icons/md";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { useRef } from "react";

const Dues = () => {
  const [addDues, setAddDues] = useState(false);
  const [type, setType] = useState(null);
  const [group, setGroup] = useState(null);
  const [duesCategory, setDuesCategory] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [studentChapter, setStudentChapter] = useState(null);
  const { getChapter, getFees, setFee } = useExternalAPI();
  const [chapter, setChapter] = useState(null);
  const [isMinAmount, setIsMinAmount] = useState(false);
  const [paycategory, setPaycategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dueData, setDueData] = useState(null);
  const [duesError, setDuesError] = useState(null);
  const [duesLoad, setDuesLoad] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (group === "STUDENT") setSelectedChapter(studentChapter);
  }, [group]);

  useEffect(() => {
    console.log(isMinAmount);
  }, [isMinAmount]);

  const search = (e) => {
    e.preventDefault();
  };

  const fetch = async () => {
    loadData({
      paysetuptype: "AD",
      forwhich1: "LAWYER",
      forwhich: "CHAPTER",
    });
    if (chapter === null) {
      await getChapter().then((e) => {
        if (e.success) {
          const data = [{ label: "Student Chapter", value: 11 }];
          e.data.forEach((e) => {
            data.push({ label: e.fullname, value: e.id });
            if (e.fullname === "Students Chapter") {
              setStudentChapter([{ label: e.fullname, value: e.id }]);
            }
          });
          setChapter(data);
        }
      });
    }
  };

  const loadData = async (data) => {
    if (loading) return;
    setError("");
    setLoading(true);

    const request = await getFees(data);
    if (request?.success === true) {
      // console.log("Fetch: ", request?.data?.data)
      setDueData(request?.data?.data);
      console.log("List: ", setDueData);
    } else {
      setError("An error occured, try again later.");
    }

    setLoading(false);
  };

  const request = async (e) => {
    e.preventDefault();
    console.log(e.target[0].name, e.target[0].value);
    console.log("Form: ", e);

    // const type = e.target[0].value === "Annual dues" ? "AD" : "SL";
    // const group = e.target[1].value.toUpperCase();
    // const title = e.target[2].value;
    // const category = e.target[3].value.toUpperCase();
    // const amount = e.target[4].value.toUpperCase();

    const chapter = [];
    if (selectedChapter !== null)
      selectedChapter.forEach((e) => {
        chapter.push(e.value.toString());
      });

    // const feeData = {
    //   paysetuptype: type,
    //   desctext: title,
    //   forwhich1: group,
    //   forwhich2: category,
    //   forwhich3: "",
    //   amount,
    //   yearofdue: `${new Date().getFullYear() + 1}`,
    //   paycategory: "",
    //   minamount: 0,
    // };

    let tempPlayer = {};
    Object.entries(e.target.elements).forEach(([name, input]) => {
      if (input.type != "submit") {
        tempPlayer[input.name] = input.value;
      }
    });

    let dueData = {
      ...tempPlayer,
      forwhich4: chapter === [] ? "" : JSON.stringify(chapter),
      yearofdue: `${new Date().getFullYear()}`,
      paycategory,
    };

    if (dueData.paysetuptype === "AD" && dueData.forwhich1 === "LAWYER") {
      const data = [
        {
          id: "SENIOR",
          value: dueData.senior,
        },
        {
          id: "COUNSEL",
          value: dueData.counsel,
        },
        {
          id: "JUNIOR",
          value: dueData.senior,
        },
      ];

      dueData = {
        ...dueData,
        forwhich3: JSON.stringify(data),
      };
    }

    if (dueData.paysetuptype === "SL" && dueData?.paycategory?.length < 1) {
      setError();
    }

    if (dueData.amount === undefined) {
      dueData = {
        ...dueData,
        amount: "0",
      };
    }

    setDuesLoad(true);
    const request = await setFee(dueData);

    if (request?.success === true) {
      formRef.current.reset();
      setAddDues(false);
      fetch();
    } else {
      setDuesError(request?.message || "An error occured!");
    }

    setDuesLoad(false);
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
        <AccessInfo style={{ margin: "0 20px 0 0" }}>Dues Payments</AccessInfo>
        {addDues ? null : (
          <GlobalButton
            style={{ height: "max-content" }}
            color="white"
            background={colors.primary}
            onClick={() => setAddDues(true)}
          >
            Add dues
          </GlobalButton>
        )}
      </h4>
      <AnimateHeight height={addDues ? "auto" : 0}>
        <form
          style={{ fontSize: 14, color: "grey" }}
          onSubmit={(e) => request(e)}
          ref={formRef}
          // label="paysetuptype"
        >
          Dues type *
          <DataListInput
            style={{ marginBottom: 20 }}
            required
            onChange={(e) => setType(e.target.value)}
            name="paysetuptype"
          >
            <option value="" disabled selected>
              select type
            </option>
            <option value={"AD"}>Annual dues</option>
            <option value={"SL"}>Special levy</option>
          </DataListInput>
          Group *
          <DataListInput
            style={{ marginBottom: 20 }}
            required
            onChange={(e) => setGroup(e.target.value)}
            name="forwhich1"
          >
            <option value="" disabled selected>
              select group
            </option>
            <option value={"LAWYER"}>Lawyer</option>
            <option value={"STUDENT"}>Student</option>
          </DataListInput>
          Title *
          <FormInput
            type="text"
            required
            placeholder="enter title"
            name="desctext"
            hidden={false}
            style={{ marginBottom: 30 }}
          />
          {type === "SL" ? (
            <>
              Payment option
              <fieldset
                id="group1"
                style={{
                  display: "flex",
                  border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: 5,
                  padding: "1%",
                  marginBottom: 30,
                  marginTop: 5,
                  color: "black",
                }}
                name="paycategory"
              >
                <input
                  type="radio"
                  value="MANDATORY"
                  name="paycategory"
                  id="man"
                  onChange={(e) => setPaycategory(e.target.value)}
                />
                <label
                  name="group1"
                  for="man"
                  style={{ marginRight: 20, marginLeft: 5 }}
                >
                  Mandatory
                </label>
                <input
                  type="radio"
                  id="opt"
                  value="OPTIONAL"
                  name="paycategory"
                  onChange={(e) => setPaycategory(e.target.value)}
                />
                <label name="group1" for="opt" style={{ marginLeft: 5 }}>
                  Optional
                </label>
              </fieldset>
              Dues category *
              <DataListInput
                style={{ marginBottom: 20 }}
                required
                onChange={(e) => setDuesCategory(e.target.value)}
                name="forwhich2"
              >
                <option value="" disabled selected>
                  select category
                </option>
                <option value={"NATIONAL"}>National</option>
                <option value={"CHAPTER"}>Chapter</option>
              </DataListInput>
              {duesCategory === "CHAPTER" ? (
                <>
                  Chapter
                  <Select
                    closeMenuOnSelect={false}
                    // components={animatedComponents}
                    isMulti
                    styles={colourStyles}
                    options={chapter}
                    onChange={(e) => setSelectedChapter(e)}
                  />
                </>
              ) : null}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "0.5px solid rgba(0, 0, 0, 0.1)",
                  borderRadius: 5,
                  padding: "1%",
                  marginBottom: 30,
                  color: "black",
                }}
              >
                <input
                  type={"checkbox"}
                  id="min"
                  onChange={(e) => setIsMinAmount(e.target.checked)}
                />
                <label for="min" style={{ marginLeft: 5 }}>
                  Minumum amount required
                </label>
              </div>
              {isMinAmount ? (
                <>
                  Minimum amount GH₵ *
                  <FormInput
                    type="number"
                    required
                    placeholder="enter amount"
                    hidden={false}
                    style={{ marginBottom: 30 }}
                    name="minamount"
                  />
                </>
              ) : null}
              Amount GH₵ *
              <FormInput
                type="number"
                required
                placeholder="enter amount"
                hidden={false}
                style={{ marginBottom: 30 }}
                name="amount"
              />
              Due date *
              <FormInput
                type="date"
                name="dateofdue"
                required
                hidden={false}
                style={{ marginBottom: 30 }}
              />
            </>
          ) : type === "AD" ? (
            <>
              Dues category *
              <DataListInput
                style={{ marginBottom: 20 }}
                required
                onChange={(e) => setDuesCategory(e.target.value)}
                name="forwhich2"
              >
                <option value="" disabled selected>
                  select category
                </option>
                <option value={"NATIONAL"}>National</option>
                <option value={"CHAPTER"}>Chapter</option>
              </DataListInput>
              {duesCategory === "CHAPTER" ? (
                <>
                  Chapter
                  {/* <MultiSelect
                    options={chapters}
                    value={selectedChapter}
                    onChange={setSelectedChapter}
                    className="rmsc"
                    labelledBy="Select"
                  /> */}
                  {group === "STUDENT" ? (
                    <Select
                      closeMenuOnSelect={false}
                      // components={animatedComponents}
                      isMulti
                      styles={colourStyles}
                      options={chapter}
                      value={studentChapter[0]}
                      onChange={(e) => setSelectedChapter(studentChapter[0])}
                      isDisabled={true}
                    />
                  ) : (
                    <Select
                      closeMenuOnSelect={false}
                      // components={animatedComponents}
                      isMulti
                      styles={colourStyles}
                      options={chapter}
                      onChange={(e) => setSelectedChapter(e)}
                    />
                  )}
                </>
              ) : null}
              {group === "LAWYER" ? (
                <>
                  Junior Counsel Charge (GH₵) *
                  <FormInput
                    type="number"
                    required
                    placeholder="enter amount"
                    hidden={false}
                    name="junior"
                    style={{ marginBottom: 30 }}
                  />
                  Counsel Charge (GH₵) *
                  <FormInput
                    type="number"
                    required
                    placeholder="enter amount"
                    hidden={false}
                    name="counsel"
                    style={{ marginBottom: 30 }}
                  />
                  Senior Counsel Charge (GH₵) *
                  <FormInput
                    type="number"
                    required
                    placeholder="enter amount"
                    hidden={false}
                    name="senior"
                    style={{ marginBottom: 30 }}
                  />
                </>
              ) : group === "STUDENT" ? (
                <>
                  Amount Charge (GH₵) *
                  <FormInput
                    type="number"
                    required
                    placeholder="enter amount"
                    name="amount"
                    hidden={false}
                    style={{ marginBottom: 30 }}
                  />
                </>
              ) : null}
              Due date *
              <FormInput
                type="date"
                name="dateofdue"
                required
                hidden={false}
                style={{ marginBottom: 30 }}
              />
            </>
          ) : null}
          <p style={{ fontSize: 12, color: "red", marginTop: 5 }}>
            {duesError}
          </p>
          {duesLoad ? (
            <DashSearchContainer
              style={{
                margin: "10px 0",
                padding: 10,
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid rgba(0, 0, 0, 0.09)",
              }}
            >
              Please wait, adding dues..
              <ClipLoader color={colors.primary} loading={loading} size={15} />
            </DashSearchContainer>
          ) : (
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
                onClick={() => {
                  formRef.current.reset();
                  setAddDues(false);
                }}
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
          )}
        </form>
      </AnimateHeight>
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
          <ClipLoader color={colors.primary} loading={true} size={15} />
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
      ) : dueData === [] || dueData === null || dueData.length === 0 ? (
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
                placeholder="search dues by title"
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
                Title
              </div>
              <div class="col col-d-2">Type</div>
              <div class="col col-d-3">Group</div>
              <div class="col col-d-4">Due date</div>
            </li>
            {/* <DuesRow /> */}
            {dueData.map((data, index) => (
              <DuesRow data={data} key={index} fetch={fetch} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Dues;
