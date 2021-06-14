import React, { Component } from 'react';

import Chart from "./chart.js"
import ChartLegends from "./chartLegends.js"
import Timeline from "./timeline"
import TopBorderPanel from "./topBorderPanel"
import AdditionalInfo from "./leftBorderPanel"

class Experience extends React.Component {

    render() {
        this.chart = this.props.chart
        this.type = this.props.type
        this.timeline = this.props.timeline
        this.description = this.props.description


        var place = this.description &&
            this.description.filter(item => item.place !== undefined)

        var additionalInfo = this.description &&
            this.description.filter(item => item.additionalInfo !== undefined)


        return (
            <div className="flex-container">
                <div className="d-flex" style={{ flexDirection: "column" }} >

                    {
                        this.timeline &&
                        <div style={{ backgroundColor: "#dbe8ec" }}>
                            < Timeline
                                timeline={this.timeline} />
                        </div>
                    }

                    <div style={{ display: "d-flex", width: "100%", flexDirection: "row" }} >
                        {
                            place && place.length &&
                            <div className="m-4 col-4" style={{ backgroundColor: "#ffffff", }}>
                                <div className="p-4" >
                                    <TopBorderPanel
                                        description={this.description} />
                                </div>
                            </div>
                        }


                        {
                            this.chart &&
                            <div className="col-3 d-flex" style={{ backgroundColor: "#dbe8ec", flexDirection: "column" }}>
                                <div className="m-4 p-4" style={{ backgroundColor: "#ffffff", }}>
                                    <Chart
                                        chart={this.chart}
                                        type={this.type} />
                                </div>

                                < div className="m-4 p-4" style={{ backgroundColor: "#ffffff" }}>
                                    <ChartLegends
                                        chart={this.chart} />

                                </div>
                            </div>
                        }


                        {
                            additionalInfo && additionalInfo.length &&
                            <div className="m-4 col-4" style={{ backgroundColor: "#ffffff", }}>
                                <div className="p-4" style={{ minHeight: "395px" }}>
                                    <AdditionalInfo
                                        additionalInfo={additionalInfo} />
                                </div>
                            </div>
                        }



                    </div>
                </div>
            </div>
        )

    }
}

export default Experience