import React, { useEffect, useState } from "react";
import Navigation from "../components/Dashboard/Navigation";
import { RowDivSpace, RowSpan } from "../components/styles/Global";
import dateFormat from "dateformat";
import {
    DashboardContainer,
    DashboardWorkSection,
    DashDate,
    IconDashNotification,
    IconDashProfile,
} from "../components/styles/Dashboard";
import { useAuth } from "../context/AuthProvider";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Dashboard/Home";
import SupervisorHome from "./Dashboard/SupervisorHome";
import DashNotFound from "./Dashboard/DashNotFound";
import MenuButtons from "../components/Dashboard/MenuButtons";
import PendingRegistration from "./Dashboard/PendingRegistration";
import Communication from "./Dashboard/Communication";
import Dues from "./Dashboard/Dues";
import MemberManagement from "./Dashboard/MemberManagement";
import MemberDirectories from "./Dashboard/MemberDirectories";
import Receipts from "./Dashboard/Receipts";
import PaindPendingRegistrations from "./Dashboard/PaindPendingRegistrations";

import InternshipDuration from "./Dashboard/InternshipDuration";
import InternshipCompanies from "./Dashboard/InternshipCompanies";
import InternshipRequests from "./Dashboard/InternshipRequests";
import InternshipVideoSchedule from "./Dashboard/InternshipVideoSchedule";
import OrganizationsAI from "./Dashboard/OrganizationsAI";
import InternshipOpportunities from "./Dashboard/InternshipOpportunities";
import Students from "./Dashboard/Students";
import Supervisors from "./Dashboard/Supervisors";

const Dashboard = () => {
    const [navOpen, setNavOpen] = useState(false);
    const { logout, user, navigate } = useAuth();
    const [page, setPage] = useState("");
    const location = useLocation();

    useEffect(() => {
        try {
            const pages = location.pathname?.split("/");
            setPage(pages.length === 3 ? pages[2] : pages[1]);
        } catch (e) {
            console.error(e);
        }
    }, [location]);

    return (
        <DashboardContainer>
            <Navigation setNavOpen={setNavOpen} page={page}/>
            <MenuButtons navOpen={navOpen} page={page} setNavOpen={setNavOpen}/>
            <DashboardWorkSection>
                <RowDivSpace
                    style={{
                        fontSize: 14,
                        alignItems: "center",
                        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                        paddingBottom: 10
                    }}
                >
                    <div><DashDate>{dateFormat(Date.now(), "dddd, dS mmmm")}</DashDate></div>
                    <RowSpan>
                        <IconDashNotification />
                        <IconDashProfile onClick={() => navigate("dashboard/profile")} />
                    </RowSpan>
                </RowDivSpace>
                
                <Routes>
                    {/* <Route path="/" element={<Home />} /> */}

                    <Route path="/" element={localStorage.getItem("supervisor") == "YES" ? <SupervisorHome /> : <Home />} />
                    <Route path="/internshipdurarion" element={<InternshipDuration />} />
                    <Route path="/internshipcompanies" element={<InternshipCompanies />} />
                    <Route path="/internshiprequests" element={<InternshipRequests />} />
                    <Route path="/internshipvideo" element={<InternshipVideoSchedule />} />
                    <Route path="/organizationai" element={<OrganizationsAI />} />
                    <Route path="/internshipopportunities" element={<InternshipOpportunities />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/supervisors" element={<Supervisors />} />
                    <Route path="*" element={<DashNotFound />} />
                    
                    {/* <Route path="/pendingregistration" element={<PendingRegistration />} />
                    <Route path="/paidregistration" element={<PaindPendingRegistrations />} />
                    <Route path="/communication" element={<Communication />} />
                    <Route path="/dues" element={<Dues />} />
                    <Route path="/receipts" element={<Receipts />} />
                    <Route path="/memberdirectories" element={<MemberDirectories />} />
                    <Route path="/membermanagement" element={<MemberManagement />} /> */}
                    
                </Routes>
            </DashboardWorkSection>
        </DashboardContainer>
    );
};

export default Dashboard;
