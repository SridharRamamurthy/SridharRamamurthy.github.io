
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import DownloadPdf from './downloadPDF';

const contacts = require("../json/contacts.json")

const LeftPanel = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        setData(contacts)
        //   const apiUrl = 'http://localhost:3001/Contacts'
        //   axios.get(apiUrl)
        //       .then((response) => setData(response.data))

    }, [])


    const getUI = (index, curItem) => {
        return (
            <div key={index} className="mt-3" style={{ color: "#ffffff" }} >
                <div className="p-2 fw-bold" >
                    {curItem.title}
                </div>
                {
                    curItem.details && curItem.details.map((detail, curIndex) => {
                        return (<div key={curIndex} style={{ display: "flex justify-content-center" }}>
                            <i className={detail.icon + " fa-1x p-2"}></i>
                            {detail.title}
                        </div>)
                    })
                }

            </div>
        )
    }
    return (
       
            <div class="row text-white">
                              {
                    data.contacts && data.contacts.map((curItem, index) => {
                        return (
                            <div
                                class="col p-1">
                                {
                                    getUI(index, curItem)
                                }
                            </div>)
                    })
                }
            </div>
       
    )
}

export default LeftPanel