import React from 'react';

import Technologies from "./lib/rightBorderPanel"
import TopBorderPanel from "./lib/topBorderPanel"
import PageLayout from './pageLayout';

class Education extends React.Component {

    render() {

        this.description = this.props.description && this.props.description
        this.technologies = this.props.technologies && this.props.technologies

        return (

            <PageLayout>

                <div class="col-sm-12" style={{ backgroundColor: "#ffffff", }}>
                    <div className="my-4">
                        <div className="p-4" >
                            <TopBorderPanel
                                description={this.description} />
                        </div>
                    </div>
                </div>

                <div class="col-sm-12" style={{ backgroundColor: "#ffffff", }}>
                    {
                        this.technologies && this.technologies.length &&
                        <div className="my-4 col-md-12" >
                            <div className="p-4" >
                                <Technologies
                                    technologies={this.technologies} />
                            </div>
                        </div>
                    }
                </div>

            </PageLayout>
        )

    }
}

export default Education