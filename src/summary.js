import React, { Component } from 'react';

import Chart from "./lib/chart"
import ChartLegends from "./lib/chartLegends"
import PieChartLegends from "./lib/pieChartLegends"
import ReChart from './lib/pieChart';
import Points from "./points.js"


class Summary extends React.Component {
    constructor(props) {
        super(props)
        this.chart = {}
    }

    render() {
        this.chart = this.props.data.chart
        this.pieChart = this.props.data.pieChart
        this.type = this.props.type
        this.pieChart1 = {
            ...this.pieChart,
            labels: this.pieChart && [...this.pieChart.labels.slice(0, 2)]
        }
        this.pieChart2 = {
            ...this.pieChart,
            labels: this.pieChart && [...this.pieChart.labels.slice(2, 5)]
        }
        return (
           
                <div class="flex-container">
                    <div class="row m-4">
                        <div class="col-sm-12">
                            {
                                this.pieChart &&
                                <div className="mt-2"
                                    style={{ backgroundColor: "#dbe8ec" }}>
                                    <div className="p-2" style={{ backgroundColor: "#ffffff", }}>
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <PieChartLegends
                                                    pieChart={this.pieChart2} />
                                            </div>
                                            <div class="col-lg-6">
                                                <ReChart data={this.pieChart.data} innerData={this.pieChart.innerData} />
                                            </div>
                                            <div class="col-lg-3">
                                                <PieChartLegends
                                                    pieChart={this.pieChart1} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            }
                        </div>

                        <div class="col-sm-12">
                            <div class="col-sm-12">  {
                                this.props.data.points &&
                                <div className="my-4" style={{ minWidth: "320px", backgroundColor: "#ffffff", }}>
                                    <div className="p-4">
                                        <Points
                                            points={this.props.data.points} />
                                    </div>
                                </div>
                            }</div>

                        </div>
                    </div>
                </div>
           
        )

    }
}

export default Summary