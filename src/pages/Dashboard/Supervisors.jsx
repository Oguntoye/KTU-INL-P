import React, { useEffect, useState } from "react";
import AnimateHeight from "react-animate-height";
import { RiSearchLine } from "react-icons/ri";
import StudentsSup from "../../components/Workspace/StudentsSup";
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

const Supervisors = () => {
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
        setError("");
        setDueData([
            {
                id:"1",
                firstname:"Andrew",
                lastname:"James",
                phonenumber:"0537764995",
                emailaddress:"jamesandrew@gmail.com",
                department:"Finance",
                data1:"AA-45995-494",
            },
            {
                id:"2",
                firstname:"Bright",
                lastname:"Adjei",
                phonenumber:"0537764995",
                emailaddress:"amaadjoa@gmail.com",
                data1:"AA-95995-494",
            },
        ])
    };


    const request = async (e) => {
        e.preventDefault();
        console.log(e.target[0].name, e.target[0].value);
        console.log("Form: ", e);
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
        <AccessInfo style={{ margin: "0 20px 0 0" }}>Supervisors</AccessInfo>
        {/* {addDues ? null : (
            <GlobalButton
                style={{ height: "max-content" }}
                color="white"
                background={colors.primary}
                onClick={() => setAddDues(true)}
            >
                Add new
            </GlobalButton>
        )} */}
        </h4>
        
        <AnimateHeight height={addDues ? "auto" : 0}>
            <form
                style={{ fontSize: 14, color: "grey" }}
                onSubmit={(e) => request(e)}
                ref={formRef}
            >

            Company Name *
            <FormInput
                type="text"
                required
                placeholder="enter company name"
                hidden={false}
                style={{ marginBottom: 30 }}
                name="companyname"
            />

            Select Category *
            <DataListInput
                style={{ marginBottom: 20 }}
                required
                onChange={(e) => setType(e.target.value)}
                name="paysetuptype"
            >
                <option value="" disabled selected>select type</option>
                <option value={"AD"}>Automobiles</option>
                <option value={"SL"}>ICT</option>
                <option value={"SL"}>Engineering</option>
                <option value={"SL"}>Accounting</option>
                <option value={"SL"}>Banking</option>
                <option value={"SL"}>Auditing</option>
            </DataListInput>
           

           Region *
           <DataListInput
                style={{ marginBottom: 20 }}
                required
                onChange={(e) => setType(e.target.value)}
                name="paysetuptype"
            >
                <option value="" disabled selected>select type</option>
                <option value={"AD"}>Greater Accra</option>
                <option value={"SL"}>Central Region</option>
                <option value={"SL"}>Volta Region</option>
                <option value={"SL"}>Brong Ahafo</option>
                <option value={"SL"}>Western</option>
                <option value={"SL"}>Eastern</option>
            </DataListInput>

            Contact Person *
            <FormInput
                type="text"
                required
                placeholder="enter contact person"
                hidden={false}
                style={{ marginBottom: 30 }}
                name="companyname"
            />

            Contact Person Email Address *
            <FormInput
                type="text"
                required
                placeholder="enter contact person email address"
                hidden={false}
                style={{ marginBottom: 30 }}
                name="companyname"
            />

            Contact Person Phone Number *
            <FormInput
                type="text"
                required
                placeholder="enter contact person phone number"
                hidden={false}
                style={{ marginBottom: 30 }}
                name="companyname"
            />



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
            Currently don't have any Internship set ups
            <IoNotificationsCircleSharp color={colors.primary} size={30} />
            </DashSearchContainer>
        ) : (
            <>
            <PendingFilterContainer onSubmit={(e) => search(e)}>
                <PendingSearch>
                    <DashSearchInput
                        placeholder="Enter search text here.."
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
                            <option value="" disabled selected>sort by</option>
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
                            <option value="" disabled selected>filter by</option>
                            <option>All</option>
                        </DataListInput>
                    </DashSearchContainer>
                </div>
            </PendingFilterContainer>

            <ul class="responsive-table">
                <li class="table-header">
                    <div
                        class="col col-d-1"
                        style={{ display: "flex", alignItems: "center" }}
                    >Employee Code</div>
                    <div class="col col-d-2">First Name</div>
                    <div class="col col-d-3">Last Name</div>
                    <div class="col col-d-4">Email Address</div>
                </li>
                    
                {dueData.map((data, index) => (
                    <StudentsSup data={data} key={index} fetch={fetch} />
                ))}
            </ul>
            </>
        )}
    </div>
  );
};

export default Supervisors;
