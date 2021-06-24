import React, { Component } from 'react';

class RightBorderPanel extends React.Component {

    render() {

        this.technologies = this.props.technologies && this.props.technologies

        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                {
                    this.technologies && this.technologies.map((curItem, index) => {
                        return (
                            <div key={index} className="mt-3" style={{ display: "flex", flexDirection: "row" }}>
                                <div className="border col-4 p-2" style={{ backgroundColor: "#f5f5f5" }}>
                                    {curItem.title && curItem.title}

                                </div>
                                <div className="p-1" style={{
                                    backgroundColor: curItem.bgColor && curItem.bgColor
                                }}>
                                </div>
                                <div className="border col-7 px-0">
                                    <div style={{ display: "flex", flexDirection: "column" }}>
                                        <div className="p-1">
                                            {curItem.primary &&
                                                <label className="p-3 fw-bold">
                                                    Primary Skills: {curItem.primary}
                                                </label>
                                            }
                                        </div>

                                        <div style={{ display: "flex", flexDirection: "column" }}>
                                            {
                                                curItem.details && Array.isArray(curItem.details)?
                                                    curItem.details.map((detail, curindex) => {
                                                        return (
                                                            <label className="px-3 mb-0" >
                                                                { detail}
                                                            </label>
                                                        )
                                                    }) : <div> <label className="px-3 mb-0" >
                                                        {curItem.details}
                                                    </label> </div>

                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

        )

    }




}

export default RightBorderPanel