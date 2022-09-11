import React, { useEffect, useState } from "react";
import { RiSearchLine } from "react-icons/ri";
import { useAuth } from "../../context/AuthProvider";
import {
    DashboardSelectSection,
    DashSearchContainer,
    DashSearchInput,
    IconDashRight,
} from "../styles/Dashboard";
import { RowDivSpace } from "../styles/Global";
import { pages } from "../../utils/pages";
import DropList from "../Navigation/DropList";

const MenuButtons = ({ navOpen, page, setNavOpen }) => {
    const { navigate } = useAuth();
    const [pagename, setPagename] = useState("");

    useEffect(() => {
        console.log("Url: ", page);
        pages?.forEach((element) => {
        if (element?.path === page) setPagename(element?.name);
        });
    }, [page]);

    const direct = (url) => {
        setNavOpen(false);
        navigate(url);
    };

    return (
        <DashboardSelectSection isOpen={navOpen} >
        <h1 style={{ fontSize: 16, textTransform: "capitalize" }}>
            {pagename || page}
        </h1>
        <DashSearchContainer>
            <RiSearchLine color={"black"} size={20} />
            <DashSearchInput placeholder="search.." />
        </DashSearchContainer>
        <RowDivSpace
            style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
            onClick={() => direct("/dashboard")}
        >
            Dashboard
        </RowDivSpace>
        <DropList title="Workspace">
            <>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                onClick={() => direct("/dashboard/internshipdurarion")}
            >
                Internship Duration
            </RowDivSpace>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                onClick={() => direct("/dashboard/internshipcompanies")}
            >
                Internship Companies
            </RowDivSpace>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                onClick={() => direct("/dashboard/internshiprequests")}
            >
                Internship Requests
            </RowDivSpace>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                // onClick={() => direct("/dashboard/pendingregistration")}
            >
                Internship Report Grading
            </RowDivSpace>
            </>
        </DropList>
        <DropList title="Data Bank">
            <>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                // onClick={() => direct("/dashboard/membermanagement")}
            >
                Organization (Active & Inactive)
            </RowDivSpace>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                // onClick={() => direct("/dashboard/dues")}
            >
                Internship Opportunities
            </RowDivSpace>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                // onClick={() => direct("/dashboard/dues")}
            >
                Students
            </RowDivSpace>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                // onClick={() => direct("/dashboard/dues")}
            >
                University Supervisors
            </RowDivSpace>
            </>
        </DropList>
        <DropList title="Configurations">
            <>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                // onClick={() => direct("/dashboard/membermanagement")}
            >
                Evaluation Reports
            </RowDivSpace>
            <RowDivSpace
                style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
                // onClick={() => direct("/dashboard/dues")}
            >
                Assessment Checklist
            </RowDivSpace>
            </>
        </DropList>
        <RowDivSpace
            style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}
            // onClick={() => direct("/dashboard")}
        >
            Give Feedback
        </RowDivSpace>
        <RowDivSpace style={{ fontSize: 14, marginTop: 20, cursor: "pointer" }}>
            Lodge Complain
        </RowDivSpace>
     
        </DashboardSelectSection>
    );
};

export default MenuButtons;
