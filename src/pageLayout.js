import React, { Component } from 'react';



class PageLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div class="flex-container">
                <div class="m-4">
                    <div className='row'>
                        {this.props.children}
                    </div>
                </div>
            </div>

        )
    }
}

export default PageLayout