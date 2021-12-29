import React from 'react';

class TopBorderPanel extends React.Component {

    render() {

        this.description = this.props.description && this.props.description

        return (

           
                <div>
                    {
                        this.description && this.description.map((curItem, index) => {
                            return (
                                <div key={index} className="mt-3" >
                                    <div className="p-1" style={{
                                        backgroundColor: curItem.bgColor && curItem.bgColor
                                    }}>
                                    </div>
                                    <div className="p-2 fw-bold" style={{ backgroundColor: "#f5f5f5" }}>
                                        {curItem.place && curItem.place}
                                        {" - "}
                                        {curItem.title && curItem.title}

                                    </div>
                                    <div class="border">
                                        <label className="p-3">
                                            {
                                                curItem.details && curItem.details
                                            }
                                        </label>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
           

        )

    }

}

export default TopBorderPanel