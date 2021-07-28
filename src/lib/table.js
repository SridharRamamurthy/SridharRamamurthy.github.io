import React, { useState, useEffect } from 'react';

import Points from "../points.js"

const Table = (props) => {
    const { data } = props;
    const [selectedIndex, setselectedIndex] = useState(-1)

    return (
        <div>
            <div className="d-flex column border p-3 fw-bold" style={{ backgroundColor: "#e1e1e1" }} >
                <div className="col-1"></div>
                <div className="col-3"> Project Name </div>
                <div className="col-4 ">Primary Technologies </div>
                <div className="col-2">Domain </div>
                <div className="col-2">Role </div>
            </div>
            {
                data.details && data.details.map((detail, curIndex) => {
                    return (
                        <div className="d-flex">
                            <div key={curIndex} className="p-3 col-12 border" style={{
                                backgroundColor: selectedIndex === curIndex ? "#f9f9f9" : "#ffffff"
                            }} >
                                <div className="d-flex column">

                                    <i className={selectedIndex === curIndex ?
                                        "col-1 justify-content-center fa fa-angle-down fa-2x" : "col-1 fa fa-angle-right fa-2x"}
                                        style={{ color: "#1a88e2" }}
                                        onClick={e => {
                                            setselectedIndex(curIndex === selectedIndex ? -1 : curIndex)
                                        }}
                                    />

                                    <div className="col-3" >{detail.title} </div>
                                    <div className="col-4" >{detail.primary} </div>
                                    <div className="col-2">{detail.domain} </div>
                                    <div className="col-2">{detail.role} </div>

                                </div>


                                {
                                    selectedIndex === curIndex &&
                                    <div className="m-3 p-3 border" style={{ backgroundColor: "#ffffff" }}>
                                        <div className="fw-bold">
                                            My responsibilities in this project include:
                                        </div>
                                        <Points
                                            points={detail.responsibilities && detail.responsibilities} />
                                    </div>
                                }

                            </div>

                        </div>)
                })
            }
        </div>)
}

export default Table
