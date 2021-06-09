import React, { Component } from 'react';

import ProjectDetails from "./projectDetails"

class Projects extends React.Component {

    render() {

        this.projects = this.props.projects && this.props.projects

        return (

            <div class="flex-container">
                <div style={{ display: "flex" }} >

                    {
                        this.projects && this.projects.length &&
                        <div> 
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