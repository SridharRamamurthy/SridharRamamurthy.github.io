import React from 'react';

import ProjectDetails from "./projectDetails"

class Projects extends React.Component {

    render() {

        this.projects = this.props.projects && this.props.projects

        return (

            <div className="flex-container">
                <div className="d-flex" style={{ flexDirection: "row" }} >

                    {
                        this.projects && this.projects.length &&
                        <div className="me-4 col-md-11">
                            <ProjectDetails
                                data={this.projects} />
                        </div>

                    }

                </div>
            </div>
        )

    }
}

export default Projects