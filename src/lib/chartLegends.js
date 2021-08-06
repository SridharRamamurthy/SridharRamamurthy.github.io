import React, { Component } from 'react';

class ChartLegends extends React.Component {

    render() {

        this.chart = this.props.chart && this.props.chart
        if (this.chart && this.chart.datasets && this.chart.datasets.length) {
            this.labels = this.chart && this.chart.labels && this.chart.labels
            this.bgColor = this.chart.datasets[0].backgroundColor
            this.chartValue = this.chart.datasets[0].data
        }
        return (
            <div>
                {
                    this.labels && this.labels.map((curItem, index) => {
                        return (
                            <div key={index} className="mt-2" style={{ display: "flex" }}>
                                <div className="p-1" style={{
                                    backgroundColor: this.bgColor && this.bgColor[index]
                                }}>
                                </div>
                                <div className="px-3" style={{ backgroundColor: "#f5f5f5" }}>
                                    {curItem}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        )

    }

}

export default ChartLegends