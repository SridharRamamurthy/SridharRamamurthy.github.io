import React, { Component } from 'react';
import { Doughnut, Bar, Pie, Line, PolarArea } from 'react-chartjs-2';

class Chart extends React.Component {

    render = () => {

        let ChartTypeComponent = {
            Doughnut: Doughnut,
            Bar: Bar,
            Pie: Pie,
            Line: Line,
            PolarArea: PolarArea
        }[this.props.type]

        return (
            <div>
                <ChartTypeComponent
                    data={this.props.chart && this.props.chart}
                    options={this.props.chart && this.props.chart.options && this.props.chart.options}
                />
            </div>
        )
    }
}


export default Chart