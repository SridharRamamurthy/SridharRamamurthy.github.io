import React from 'react';
import { Doughnut, Bar, Pie, Line, PolarArea } from 'react-chartjs-2';

const ChartOptions = (props) => {
    return (
        < div >
            <div className="mx-2 ">
                <button className="m-2 btn btn-light border solid" onClick={e => {
                    props.setUserSelectedChartType("Doughnut")

                }} > <div className="icon px-2">
                        <i className="fa fa-circle fa-1x" style={{ color: "#F5F%F5" }}></i>
                    </div>
                </button>

                <button name="bar" className="m-1 btn btn-light border solid" onClick={e => {
                    props.setUserSelectedChartType("Bar")

                }} > <div className="icon px-2">
                        <i className="fa fa-bar-chart fa-1x" style={{ color: "#F5F%F5" }}></i>
                    </div>
                </button>

                <button name="pie" className="m-1 btn btn-light border solid" onClick={e => {
                    props.setUserSelectedChartType("Pie")

                }} > <div className="icon px-2">
                        <i className="fa fa-pie-chart fa-1x" style={{ color: "#F5F%F5" }}></i>
                    </div>
                </button>

                <button name="line" className="m-1 btn btn-light border solid" onClick={e => {
                    props.setUserSelectedChartType("Line")

                }} > <div className="icon px-2">
                        <i className="fa fa-line-chart fa-1x" style={{ color: "#F5F%F5" }}></i>
                    </div>
                </button>

            </div>
            <div className="border solid m-1 2px" />
        </div>
    )

}

export default ChartOptions
