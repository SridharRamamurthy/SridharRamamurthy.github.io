import React, { Component } from 'react'
import "./style.css"

class Dashbaord extends React.Component {

    render() {
        return (
            <div className="dashboard">
                <div className="dashboard-box">
                    <div className="dashboard-header-box">
                        {this.props.dashboardHeaderContent}
                    </div>
                    <div className="dashboard-content-box">
                        <div className="dashboard-content-header">
                            {this.props.dashboardContentHeader}
                        </div>
                        <div className="dashboard-content">
                            {this.props.dashboardContent}
                        </div>
                    </div>
                    <div className="dashboard-divider" />
                    <div className="dashboard-footer-box">
                        {this.props.dashboardFooterContent}
                    </div>
                </div>
            </div>
        )
    }

}

export default Dashbaord