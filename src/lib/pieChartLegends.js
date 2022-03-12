import React from 'react';

class PieChartLegends extends React.Component {

    render() {

        this.pieChart = this.props.pieChart
        if (this.pieChart && this.pieChart.labels && this.pieChart.labels.length) {
            this.labels = this.pieChart && this.pieChart.labels && this.pieChart.labels
        }
        return (
            <div className='container'>
                <div className='row'>
                    {
                        this.labels && this.labels.map((curItem, index) => {
                            return (
                                <div key={index} className='col-lg-12 col-md-6 col-sm-6 col-6'>
                                    <div className="row m-2 mt-4 border" >
                                        <div className="p-1" style={{
                                            backgroundColor: curItem.bgColor
                                        }}>
                                        </div>
                                        <div className="p-2 fw-bold" style={{ backgroundColor: "#f5f5f5" }}>
                                            {curItem.label}
                                        </div>

                                        <div className="row p-2">
                                            <div>
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
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
            </div>



        )

    }

}

export default PieChartLegends