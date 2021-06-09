import React, { Component } from 'react';

import Chart from "./chart.js"
import ChartLegends from "./chartLegends.js"
import Points from "./points.js"

class Summary extends React.Component {

    render() {
        this.chart = this.props.chart
        this.type = this.props.type
        this.points = this.props.points
        return (
            <div className="flex-container">
                <div className="d-flex align-content-between flex-wrap" >
                    {
                        this.chart &&
                        <div className="d-flex align-content-between flex-wrap col-sm m-4"
                            style={{flexDirection:"column",minWidth:"320px", backgroundColor: "#dbe8ec" }}>

                            <div className="p-2" style={{ backgroundColor: "#ffffff", }}>
                                <Chart
                                    chart={this.chart}
                                    type={this.type} />
                            </div>
                            < div className="mt-2 p-4 " style={{ backgroundColor: "#ffffff" }}>
                                <ChartLegends
                                    chart={this.chart} />
                            </div>

                        </div>
                    }

                    {
                        this.points &&
                        <div className="m-4 col-8" style={{minWidth:"320px", backgroundColor: "#ffffff", }}>
                            <div className="p-4">
                                <Points
                                    points={this.points} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        )

    }
}

export default Summary