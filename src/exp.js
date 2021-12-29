import React from 'react';

import Chart from "./lib/chart"
import ChartLegends from "./lib/chartLegends"
import Timeline from "./lib/timeline"
import TopBorderPanel from "./lib/topBorderPanel"
import AdditionalInfo from "./lib/leftBorderPanel"

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
            <div class="flex-container">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            {
                                this.timeline &&
                                <div className="m-4" >
                                    <div className="p-2" style={{ backgroundColor: "#ffffff", }}>
                                        < Timeline
                                            timeline={this.timeline} />
                                    </div>
                                </div>
                            }
                        </div>
                        <div class="col-sm-12">
                            <div className="mx-4" >
                                <div class="row ">
                                    <div class="col-sm-4 my-4 pl-0">
                                        {
                                            this.chart &&
                                            <div className="p-2 pb-4" style={{ backgroundColor: "#ffffff", }}>
                                                <Chart
                                                    chart={this.chart}
                                                    type={this.type} />


                                            </div>
                                        }
                                        <div className="mt-4 p-4"
                                            style={{ backgroundColor: "#ffffff", }}>
                                            <ChartLegends
                                                chart={this.chart} />
                                        </div>
                                    </div>
                                    <div class="col-sm-8 my-4 pr-0">
                                        {
                                            place && place.length &&
                                            <div className="" >
                                                <div className="p-4" style={{ backgroundColor: "#ffffff", }}>
                                                    <TopBorderPanel
                                                        description={this.description} />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            {
                                additionalInfo && additionalInfo.length &&
                                <div className="m-4 " style={{ backgroundColor: "#ffffff", }}>
                                    <div className="p-4" style={{ minHeight: "395px" }}>
                                        <AdditionalInfo
                                            additionalInfo={additionalInfo} />
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>




            </div >

        )

    }
}

export default Experience