import React from 'react';
import { Doughnut, Bar, Pie, Line, PolarArea } from 'react-chartjs-2';
import ChartOptions from './chartOptions';



class Chart extends React.Component {

    state = {
        userSelectedType: "Doughnut"
    }

    setUserSelectedChartType = (type) => {
        this.setState({ userSelectedType: type })
    }
    render = () => {
        let ChartTypeComponent = {
            Doughnut: Doughnut,
            Bar: Bar,
            Pie: Pie,
            Line: Line,
            PolarArea: PolarArea
        }[this.props.type !== this.state.userSelectedType ? this.state.userSelectedType : this.props.type]

        let options = {
            ...this.props.chart.options,
            "plugins": {
                ...this.props.chart.options.plugins

            },
        }


        if (this.state.userSelectedType === "Bar" || this.state.userSelectedType === "Line") {
            options = {
                ...this.props.chart.options,
                "scales": {
                    "x": {
                        "display": false,
                        "grid": {
                            "display": false
                        }
                    },
                    "y": {
                        "display": true,
                        "grid": {
                            "display": false
                        }
                    }
                },
                "plugins": {
                    ...this.props.chart.options.plugins
                }
            }
        }

        if (this.state.userSelectedType === "Pie" || this.props.type === "Pie") {
            options = {
                ...this.props.chart.options,
                "cutout": 0,
                "plugins": {
                    ...this.props.chart.options.plugins
                   
                }
            }
        }

        return (

            < div >
                <ChartOptions setUserSelectedChartType={this.setUserSelectedChartType} />
                <ChartTypeComponent
                    data={this.props.chart && this.props.chart}
                    options={options}
                />
            </div >
        )
    }
}


export default Chart