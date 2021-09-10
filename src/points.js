import React from 'react';

class Points extends React.Component {
    render() {

        this.points = this.props.points && this.props.points

        return (
            <div>
                {
                    this.points && this.points.map((curItem, index) => {
                        return (
                            <div key={index} className="mt-3" style={{ display: "flex" }}>
                                <i className="fa fa-check fa-1x p-1" style={{ color: "#999999" }}></i>
                                <div className="px-2" style={{ backgroundColor: "#f5f5f5" }}>
                                    {curItem}
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}

export default Points