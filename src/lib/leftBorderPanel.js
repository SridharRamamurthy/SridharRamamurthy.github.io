import React, { Component } from 'react';

class AdditionalInfo extends React.Component {

    render() {

        this.additionalInfo = this.props.additionalInfo && this.props.additionalInfo

        return (

            <div style={{ display: "flex", flexDirection: "column" }}>
                {
                    this.additionalInfo && this.additionalInfo.map((curItem, index) => {
                        return (
                            curItem &&

                            <div key={index} className="mt-3" style={{ display: "flex", flexDirection: "row" }}>
                                <div className="p-1" style={{
                                    backgroundColor: curItem.bgColor
                                }}>
                                </div>


                                <div class="border" style={{ display: "flex", flexDirection: "column" }}>
                                    <div className="p-2" style={{ backgroundColor: "#f5f5f5" }}>
                                        {
                                            curItem.additionalInfo.title && curItem.additionalInfo.title
                                        }
                                    </div>

                                    {

                                        curItem.additionalInfo.description && curItem.additionalInfo.description.map((item, curIndex) => {
                                            return (<div key={curIndex} className="p-3" >
                                                {item} </div>)
                                        }
                                        )
                                    }
                                </div>

                            </div>

                        )
                    })
                }

            </div>

        )

    }

}

export default AdditionalInfo