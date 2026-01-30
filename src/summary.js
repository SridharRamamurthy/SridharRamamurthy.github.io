import React, { Component } from 'react';

import Chart from "./lib/chart"
import ChartLegends from "./lib/chartLegends"
import PieChartLegends from "./lib/pieChartLegends"
import ReChart from './lib/pieChart';
import Points from "./points.js"
import PageLayout from './pageLayout';


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
            labels: this.pieChart && [...this.pieChart.labels.slice(0, 1)]
        }
        this.pieChart2 = {
            ...this.pieChart,
            labels: this.pieChart && [...this.pieChart.labels.slice(1, 2)]
        }
        this.pieChart3 = {
            ...this.pieChart,
            labels: this.pieChart && [...this.pieChart.labels.slice(2, 3)]
        }
        this.pieChart4 = {
            ...this.pieChart,
            labels: this.pieChart && [...this.pieChart.labels.slice(3, 4)]
        }
        return (

            <PageLayout>
                <div class="col-sm-12">
                    {
                        this.pieChart &&
                        <div className="mt-2"
                            style={{ backgroundColor: "#dbe8ec" }}>
                            <div className="p-2" style={{ backgroundColor: "#ffffff", }}>
                                <div class="row">
                                    <div class="col-lg-7">
                                        <Points
                                            points={this.props.data.points} />
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="row">
                                            <div class="col-lg-7">
                                                <PieChartLegends
                                                    pieChart={this.pieChart1} />
                                            </div>
                                            <div class="col-lg-5">
                                                <PieChartLegends
                                                    pieChart={this.pieChart4} />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <ReChart data={this.pieChart.data} innerData={this.pieChart.innerData} />
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-7">
                                                <PieChartLegends
                                                    pieChart={this.pieChart3} />
                                            </div>
                                            <div class="col-lg-5">
                                                <PieChartLegends
                                                    pieChart={this.pieChart2} />
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>

                        </div>
                    }
                </div>


            </PageLayout>

        )

    }
}

export default Summary