
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import photo from './photo.jpg'

const contacts = require("./json/contacts.json")

const LeftPanel = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        setData(contacts)
     //   const apiUrl = 'http://localhost:3001/Contacts'
     //   axios.get(apiUrl)
     //       .then((response) => setData(response.data))

    }, [])

    return (
        <div className="flex-container">
            <div className="d-flex justify-content-center flex-wrap m-2">

                <div style={{ display: "flex", flexDirection: "column" }} >
                    <img src={photo} className="rounded-circle img-thumbnail border border-white rounded-1 mx-4" />
                </div>
                {
                    data &&
                    <div className="d-flex"
                        style={{ flexDirection: "column", color: "#ffffff" }} >
                        <div className="d-flex fw-bold justify-content-center m-2" >
                            {data.name && data.name}
                        </div>
                        <div>
                            {

                                data.contacts && data.contacts.map((curItem, index) => {
                                    return (
                                        <div key={index} className="mt-3 justify-content-center" style={{ color: "#ffffff" }} >
                                            <div className="p-2 fw-bold" >
                                                {curItem.title}
                                            </div>
                                            {
                                                curItem.details && curItem.details.map((detail, curIndex) => {
                                                    return (<div key={curIndex} className="pe-2" style={{ display: "flex justify-content-center" }}>
                                                        <i className={detail.icon + " fa-1x p-2"}></i>
                                                        {detail.title}
                                                    </div>)
                                                })
                                            }

                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}


export default LeftPanel