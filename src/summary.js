import React, { Component } from 'react';

import Chart from "./lib/chart"
import ChartLegends from "./lib/chartLegends"
import Points from "./points.js"

class Summary extends React.Component {

    render() {
        this.chart = this.props.chart
        this.type = this.props.type
        this.points = this.props.points
        return (
            <div className="flex-container">
                <div className="d-flex" >
                    {
                        this.chart &&
                        <div className="d-flex align-content-between flex-wrap m-4"
                            style={{flexDirection:"column",  backgroundColor: "#dbe8ec" }}>

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
                        <div className="m-4" style={{minWidth:"320px", backgroundColor: "#ffffff", }}>
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