import React, { useEffect, useState } from "react";
import {
  HomeCardContainer,
  HomeCardContainerLong,
  HomeCardContainerLong2,
  HomeCardContainerLong3,
  HomeContainer,
  HomeSectionContainer,
  HomedoubleDivContainer,
} from "../../components/styles/Home";
import { TbUsers } from "react-icons/tb";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { colors } from "../../utils/colors";
import { MdError, MdOutlineVerifiedUser } from "react-icons/md";
import { VscAccount, VscGraphLeft } from "react-icons/vsc";
import { FaUserGraduate } from "react-icons/fa";
import GaugeChart from "react-gauge-chart";
import { Chart } from "react-google-charts";
import ChatrtsGraph from "../../components/Dashboard/ChatrtsGraph";
import dateFormat from "dateformat";
import { useExternalAPI } from "../../hooks/useExternalAPI";
import { DashSearchContainer } from "../../components/styles/Dashboard";
import { ClipLoader } from "react-spinners";
import { useAuth } from "../../context/AuthProvider";

const Home = () => {
    const [rate, setRate] = useState(0);
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [sumTrans, setTrans] = useState({})
    const { getDashboardData, fetchTransactions } = useExternalAPI();
    const { navigate } = useAuth();

    const genRand = (min, max, decimalPlaces) => {
        var rand =
        Math.random() < 0.5
            ? (1 - Math.random()) * (max - min) + min
            : Math.random() * (max - min) + min; // could be min or max or anything in between
        var power = Math.pow(10, decimalPlaces);
        return Math.floor(rand * power) / power;
    };

    const round = (num) => {
        return Math.round(num * 100) / 100;
    };

    useEffect(() => {
        const randomNum = genRand(0, 1, 2);
        setRate(randomNum);
    }, []);

    return loading ? (
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
    ) : (
        <>
        <HomeContainer>
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
            ) : null}
            {error !== "" ? (
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
            ) : null}

            <HomeSectionContainer>
                <HomeCardContainer>
                    <span
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: 20,
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    color: "grey",
                                    fontSize: 12,
                                    marginRight: 10,
                                    marginBottom: 10,
                                }}
                            >
                                Active Interns (Clocked In)
                            </p>
                            <TbUsers size={30} />
                        </div>
                        <div style={{ width: 50, height: 50 }}>
                            <CircularProgressbar
                                value={"3/4"}
                                si
                                text={`60%`}
                                styles={{
                                    path: {
                                        stroke: colors.primary,
                                    },
                                    text: {
                                        fill: "black",
                                        fontSize: "16px",
                                    },
                                }}
                            />
                        </div>
                    </span>


                    <h2>{"120/200"}</h2>
                    <p
                        style={{
                            color: "grey",
                            fontSize: 10,
                        }}
                    >Current Active Interns</p>
                </HomeCardContainer>
                

                <HomeCardContainerLong>
                    <HomeCardContainerLong2>
                    <HomeCardContainerLong3
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/dashboard/pendingregistration")}
                    >
                        <span
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: 20,
                        }}
                        >
                        <div>
                            <p
                            style={{
                                color: "grey",
                                fontSize: 12,
                                marginRight: 10,
                                marginBottom: 10,
                            }}
                            >
                            Internship Requests
                            </p>
                            <MdOutlineVerifiedUser size={30} />
                        </div>
                        <div style={{ width: 50, height: 50 }}>
                            <CircularProgressbar
                            value={"200"}
                            si
                            text={`100%`}
                            styles={{
                                path: {
                                // Path color
                                stroke: colors.primary,
                                },
                                text: {
                                // Text color
                                fill: "black",
                                // Text size
                                fontSize: "16px",
                                },
                            }}
                            />
                        </div>
                        </span>
                        <h2>200</h2>
                        <p
                            style={{
                                color: "grey",
                                fontSize: 10,
                            }}
                        >
                        Total Internship Requests
                        </p>
                    </HomeCardContainerLong3>
                    </HomeCardContainerLong2>
                </HomeCardContainerLong>
            </HomeSectionContainer>


            <HomeSectionContainer>
                <HomeCardContainer>
                    <span
                    style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 20,
                    }}
                    >
                    <div>
                        <p
                        style={{
                            color: "grey",
                            fontSize: 12,
                            marginRight: 10,
                            marginBottom: 10,
                        }}
                        >
                        Self Source Placement
                        </p>
                        <VscAccount size={30} />
                    </div>
                    <div style={{ width: 50, height: 50 }}>
                        <CircularProgressbar
                        value={0}
                        si
                        text={`20%`}
                        styles={{
                            path: {
                                stroke: colors.primary,
                            },
                            text: {
                                fill: "black",
                                fontSize: "16px",
                            },
                        }}
                        />
                    </div>
                    </span>
                    <h2>{"40/200"}</h2>
                    <p
                        style={{
                            color: "grey",
                            fontSize: 10,
                        }}
                    >
                    Total self-sourced placements
                    </p>
                </HomeCardContainer>
            
                <HomeCardContainer>
                    <span
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: 20,
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    color: "grey",
                                    fontSize: 12,
                                    marginRight: 10,
                                    marginBottom: 10,
                                }}
                            >
                                Student Supervisors
                            </p>
                            <FaUserGraduate size={30} />
                        </div>

                        <div style={{ width: 50, height: 50 }}>
                            <CircularProgressbar
                                value={30}
                                si
                                text={`35%`}
                                styles={{
                                    path: {
                                        stroke: colors.primary,
                                    },
                                    text: {
                                        fill: "black",
                                        fontSize: "16px",
                                    },
                                }}
                            />
                        </div>
                    </span>

                    <h2>80</h2>
                    <p
                        style={{
                            color: "grey",
                            fontSize: 10,
                        }}
                    >
                        Total assigned supervisors
                    </p>
                </HomeCardContainer>
            </HomeSectionContainer>
            
            
            <HomeSectionContainer>
                <HomeCardContainer
                    style={{
                    background: colors.primary,
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    }}
                >
                    <Chart
                        chartType="PieChart"
                        data={[
                            ["Payments", "Per amount"],
                            ["Liaison Office Placement", 20],
                            ["Department Placement", 80],
                        ]}
                        options={{
                            title: "",
                            backgroundColor: "transparent",
                            legend: "none",
                            width: "100%",
                            height: "100px",
                            chartArea: { width: "100%", height: "100%" },
                        }}
                        style={{ background: "transparent" }}
                    />

                    <VscGraphLeft size={40} style={{ marginTop: 25 }} />
                    <p
                        style={{
                            fontSize: 12,
                            marginRight: 10,
                            marginBottom: 25,
                        }}
                    >---</p>
                    <h2>100</h2>
                    <p
                        style={{
                            fontSize: 10,
                        }}
                    >
                    Total Placements</p>
                </HomeCardContainer>

                <HomedoubleDivContainer>
                    <HomeCardContainer
                        style={{ width: "100%", marginBottom: 10, height: "100%" }}
                    >
                    <span
                        style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        marginBottom: 20,
                        overflow: "hidden",
                        }}
                    >
                        <div>
                            <p
                                style={{
                                color: "grey",
                                fontSize: 12,
                                marginRight: 10,
                                marginBottom: 10,
                                }}
                            >
                                Liaison Office Placement
                            </p>
                            <h1 style={{fontSize: 20}}>20</h1>
                        </div>

                        <div
                            style={{
                                padding: "10px 15px",
                                borderRadius: 10,
                                backgroundColor: "#4065C5",
                                color: "white",
                            }}
                        >
                            {"100"}%
                        </div>
                    </span>
                    </HomeCardContainer>

                    <HomeCardContainer style={{ width: "100%" }}>
                        <span
                            style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            marginBottom: 20,
                            overflow: "hidden",
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                    color: "grey",
                                    fontSize: 12,
                                    marginRight: 10,
                                    marginBottom: 10,
                                    }}
                                >
                                    Department Placement
                                </p>
                                <h1 style={{fontSize: 20}}>80</h1>
                            </div>

                            <div
                                style={{
                                    padding: "10px 15px",
                                    borderRadius: 10,
                                    backgroundColor: "#4065C5",
                                    color: "white",
                                }}
                                >
                                {"100"}%
                            </div>
                        </span>
                    </HomeCardContainer>
                </HomedoubleDivContainer>
            </HomeSectionContainer>

            <HomeSectionContainer>
                <HomeCardContainer
                    style={{
                    width: "100%",
                    height: "max-content",
                    position: "relative",
                    }}
                >
                    <ChatrtsGraph />
                </HomeCardContainer>
            </HomeSectionContainer>
        </HomeContainer>
        

        <div style={{ flex: 1, width: "100%" }} />
        <HomeCardContainer
            style={{
                width: "100%",
                height: "max-content",
                position: "relative",
                marginTop: 20,
                borderRadius: 10,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <p
                style={{
                    color: "grey",
                    fontSize: 12,
                    marginRight: 10,
                }}
            >
                System Status
            </p>

            <p
                style={{
                    color: "grey",
                    fontSize: 12,
                    marginRight: 10,
                }}
            >
                {dateFormat(Date.now(), "h:MM TT")}
            </p>

            <p
                style={{
                    color: "grey",
                    fontSize: 12,
                    marginRight: 10,
                }}
            >
                Online
            </p>
        </HomeCardContainer>
        </>
    );
};

export default Home;
