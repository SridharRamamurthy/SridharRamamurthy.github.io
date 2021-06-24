import React, { Component } from 'react';

import Technologies from "./rightBorderPanel"
import TopBorderPanel from "./topBorderPanel"

class Education extends React.Component {

    render() {

        this.description = this.props.description && this.props.description
        this.technologies = this.props.technologies && this.props.technologies

        return (

            <div class="flex-container">
                <div className="d-flex" style={{ flexDirection: "row" }} >

                    {
                        <div className="m-4 col-4" style={{ backgroundColor: "#ffffff", }}>
                            <div className="p-4" >
                                <TopBorderPanel
                                    description={this.description} />
                            </div>
                        </div>
                    }


                    {
                        this.technologies && this.technologies.length &&
                        <div className="m-4 " style={{ backgroundColor: "#ffffff", }}>
                            <div className="p-4" >
                                <Technologies
                                    technologies={this.technologies} />
                            </div>
                        </div>
                    }


                </div>
            </div>
        )

    }
}

export default Education