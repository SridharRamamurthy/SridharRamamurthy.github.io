import React, { useEffect, useState } from 'react';

import axios from 'axios';

import ContextMenu from "./lib/dashboard/contextMenu/index"

import Summary from './summary.js';
import Experience from './exp.js';
import Education from './education';
import Projects from './Projects'


const summary = require("./json/summary.json")
const education = require("./json/edu.json")
const experience = require("./json/exp.json")
const projects = require("./json/proj.json")

const Tabs = () => {

    const [data, setData] = useState({});
    const [type, setType] = useState("Doughnut")
    const [tab, setTab] = useState("Summary")


    useEffect(() => {

        const TabJSON = {
            Summary: summary,
            Education: education,
            Experience: experience,
            Projects: projects,
        }[tab];

        setData(TabJSON)

        //  const apiUrl = 'http://localhost:3001/' + tab;
        //  axios.get(apiUrl)
        //      .then((response) => setData(response.data))

    }, [tab])

    return (
        <div className="flex-container">
            <div className="d-flex" style={{ flexDirection: "column" }} >

                <div className="d-flex" >
                    <div className="d-flex p-3" style={{
                        backgroundColor: tab === "Summary" ? "#dbe8ec" : "#ffffff"
                    }}
                        onClick={e => {
                            setType("Doughnut")
                            setTab("Summary")
                        }}
                    >
                        <div className="icon px-2">
                            <i className="fa fa-laptop fa-2x" style={{ color: "#999999" }}></i>
                        </div>
                        <div>
                            <label> Summary </label>
                        </div>
                    </div>


                    <div className="p-3 pl-4 pr-4 d-flex justify-content-center" style={{
                        backgroundColor: tab === "Education" ? "#dbe8ec" : "#ffffff"
                    }}
                        onClick={() => {
                            setTab("Education")
                        }}>
                        <div>
                            <i className="fa fa-book fa-2x" style={{ color: "#999999" }}></i>
                        </div>

                        <div className="icon px-2">
                            <label> Education </label>
                        </div>
                    </div>

                    <div className=" p-3 pl-4 pr-4 d-flex justify-content-center" style={{
                        backgroundColor: tab === "Experience" ? "#dbe8ec" : "#ffffff"
                    }}
                        onClick={() => {
                            setType("Pie")
                            setTab("Experience")
                        }}>
                        <div className="icon px-2">
                            <i className="fa fa-laptop fa-2x" style={{ color: "#999999" }}></i>
                        </div>
                        <div>
                            <label> Experience </label>
                        </div>
                    </div>


                    <div className="p-3 pl-4 pr-4 d-flex" style={{
                        backgroundColor: tab === "Projects" ? "#dbe8ec" : "#ffffff"
                    }}
                        onClick={() => {
                            setTab("Projects")
                        }}>
                        <div className="icon px-2">
                            <i className="fa fa-tasks fa-2x" style={{ color: "#999999" }}></i>
                        </div>

                        <div>
                            <label> Projects </label>
                        </div>

                    </div>
                    <div className="flex-container justify-content-end" style={{ flex: "auto" }}>
                        <div className="d-flex p-3" >
                            <ContextMenu
                                open={false}
                                clickableZone={<div style={{ color: "#182a5c" }}>
                                    <i className="fa fa-user-circle fa-2x" style={{ color: "#594D85" }} />
                                </div>}
                                menuItems={[{
                                    content: "(+91) 991 617 5522",
                                    //onClick: () => { this.callBack("First") }
                                },
                                    null,
                                {
                                    content: "sridhar3011@gmail.com"
                                    //onClick: () => { this.callBack("Second") }
                                },

                                ]}
                                header={<div>Sridhar Ramamurthy </div>}
                            />
                        </div>
                    </div>
                </div>


                <div className="flex-container" >
                    <div className="d-flex " style={{ backgroundColor: "#dbe8ec" }}>
                        {
                            tab === "Summary" &&
                            <Summary
                                data={data}
                                type={type}
                            />
                        }
                        {
                            tab === "Experience" &&
                            <Experience
                                timeline={data.timeline}
                                chart={data.chart}
                                type={type}
                                description={data.description && data.description}
                            />

                        }

                        {
                            tab === "Education" &&
                            <Education
                                description={data.description && data.description}
                                technologies={data.technologies && data.technologies}
                            />

                        }

                        {
                            tab === "Projects" &&
                            <Projects
                                projects={data.projects && data.projects}
                            />

                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tabs