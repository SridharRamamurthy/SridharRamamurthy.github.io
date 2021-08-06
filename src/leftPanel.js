
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


    const getUI = () => {
        return (<div>
            <div className="d-flex justify-content-center m-2" >
                <img src={photo} className="d-flex col-md-3 col-sm-4 rounded-circle img-fluid border border-white rounded-1 mx-4" />
            </div>
            {
                data &&
                <div className="d-flex"
                    style={{ flexDirection: "column", color: "#ffffff" }} >
                    <div className="d-flex fw-bold justify-content-center" >
                        {data.name && data.name}
                    </div>
                </div>
            }
            <div class="d-flex">
                <div class="row" >
                    <div className=" p-0 justify-content-center">
                        <div className="ps-3" style={{ color: "#ffffff" }} >
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
                </div>
            </div>

        </div>)

    }
    return (

        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <img src={photo} className="d-flex center rounded-circle img-fluid border border-white rounded-1 mx-4" />
                    {
                        data &&
                        <div className="d-flex"
                            style={{ flexDirection: "column", color: "#ffffff" }} >
                            <div className="d-flex fw-bold justify-content-center" >
                                {data.name && data.name}
                            </div>
                        </div>
                    }
                </div>

                <div class="col">
                    {
                        data.contacts && data.contacts.map((curItem, index) => {
                            return (
                                index % 2 === 0 &&
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
                        })
                    }
                </div>
                <div class="col p-0">
                    {
                        data.contacts && data.contacts.map((curItem, index) => {

                            return (
                                index % 2 !== 0 &&
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
                        })
                    }
                </div>

            </div>

        </div>


    )
}


export default LeftPanel