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

const Eachrow = (rowdata) =>(
    <div
        style={{
            display: "flex",
            borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
            marginBottom: 5,
        }}
    >
        <div style={{ flex: 0.3, color: "gray" }}>{rowdata?.title}</div>
        <div style={{ flex: 0.7, paddingLeft: 3 }}>{rowdata?.content}</div>
    </div>
)

const MainRow = ({ data, fetch }) => {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState(false);
 
    const deleteDues = async () => {
        if (loading) return;
        setLoading(true);
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
                {data?.title}
            </div>

            <div
                class="col col-d-2"
                data-label="Type"
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {data?.startat}
            </div>

            <div
                class="col col-d-3"
                data-label="Group"
                style={{
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {data?.endat}
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
            {data?.status}
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
                    <Eachrow
                        title = {"Internship Code"}
                        content = {data?.title}
                    />
                    <Eachrow
                        title = {"Start At"}
                        content = {data?.startat}
                    />
                    <Eachrow
                        title = {"End At"}
                        content = {data?.endat}
                    />
                    <Eachrow
                        title = {"Status"}
                        content = {data?.status}
                    />
                    <Eachrow
                        title = {"Created By"}
                        content = {data?.createdby}
                    />
                </span>
                </PendingFullDiv>
                <PendingFullDiv width={0.3} style={{justifyContent: "flex-end" }}>
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

export default MainRow;
