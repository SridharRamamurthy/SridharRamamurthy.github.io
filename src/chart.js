import React, { Component } from 'react';
import { Doughnut, Bar, Pie, Line, PolarArea } from 'react-chartjs-2';


const Chart = (props) => {
    const { type, chart } = props;

    const ChartTypeComponent = {
        Doughnut: Doughnut,
        Bar: Bar,
        Pie: Pie,
        Line: Line,
        PolarArea: PolarArea
    }[type];



    return (
        <div>
            <ChartTypeComponent
                data={chart && chart}
                options={chart && chart.options && chart.options}
            />
        </div>
    )
}


export default Chart