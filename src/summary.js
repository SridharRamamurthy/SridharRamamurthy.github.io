import React, { Component } from 'react';

import Chart from "./lib/chart"
import ChartLegends from "./lib/chartLegends"
import Points from "./points.js"

class Summary extends React.Component {

    render() {
        this.chart = this.props.data.chart
        this.type = this.props.type

       return (
            <div className="flex-container">
                <div className="d-flex" >
                    {
                        this.chart &&
                        <div className="d-flex align-content-between flex-wrap m-4"
                            style={{ flexDirection: "column", backgroundColor: "#dbe8ec" }}>

                            <div className="p-2" style={{ backgroundColor: "#ffffff", }}>
                                <Chart
                                    chart={this.chart}
                                    type={this.type} />
                            </div>
                            < div className="mt-2 p-4 " style={{ backgroundColor: "#ffffff" }}>
                                <ChartLegends
                                    chart={this.chart} />
                            </div>
                            {
                                this.props.data.summaryList &&
                                < div className="mt-2 p-4 " style={{ backgroundColor: "#ffffff" }}>
                                    <Points
                                        points={this.props.data.summaryList} />
                                </div>
                            }

                        </div>
                    }

                    {
                        this.props.data.points &&
                        <div className="my-4" style={{ minWidth: "320px", backgroundColor: "#ffffff", }}>
                            <div className="p-4">
                                <Points
                                    points={this.props.data.points} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        )

    }
}

export default Summary