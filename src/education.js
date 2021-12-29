import React from 'react';

import Technologies from "./lib/rightBorderPanel"
import TopBorderPanel from "./lib/topBorderPanel"

class Education extends React.Component {

    render() {

        this.description = this.props.description && this.props.description
        this.technologies = this.props.technologies && this.props.technologies

        return (

            <div class="flex-container">
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                      
                            <div className="my-4" style={{ backgroundColor: "#ffffff", }}>
                                <div className="p-4" >
                                    <TopBorderPanel
                                        description={this.description} />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm">
                            {
                                this.technologies && this.technologies.length &&
                                <div className="my-4 col-md-11" style={{ backgroundColor: "#ffffff", }}>
                                    <div className="p-4" >
                                        <Technologies
                                            technologies={this.technologies} />
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>

            </div>
        )

    }
}

export default Education