import React from 'react';

class PieChartLegends extends React.Component {

    render() {

        this.pieChart = this.props.pieChart
        if (this.pieChart && this.pieChart.labels && this.pieChart.labels.length) {
            this.labels = this.pieChart && this.pieChart.labels && this.pieChart.labels
        }
        return (
            <div>
                {
                    this.labels && this.labels.map((curItem, index) => {
                        return (
                            <div key={index} className="row m-2 mt-4 border" >
                                <div className="p-1" style={{
                                    backgroundColor: curItem.bgColor
                                }}>
                                </div>
                                <div className="p-2 fw-bold" style={{ backgroundColor: "#f5f5f5" }}>
                                    {curItem.label}
                                </div>
                            
                                <div className="row p-2">
                                    {
                                        curItem.innerLabels && curItem.innerLabels.map((innerLabel, labelIndex) => {
                                            return (
                                                <div key={labelIndex} className="mt-2" style={{ display: "flex" }}>
                                                    <div className="p-1" style={{
                                                        backgroundColor: curItem.bgColor
                                                    }}>
                                                    </div>
                                                    <div className="px-2" style={{ backgroundColor: "#ffffff" }}>
                                                        {innerLabel}
                                                    </div>
                                                </div>
                                            )
                                        })
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

export default PieChartLegends