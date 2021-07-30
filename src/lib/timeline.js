import React from 'react'


const Timeline = (props) => {

    var timeline = props.timeline
    var type = timeline && timeline.type

    return (
        <div>
            <div className="d-flex border m-4 text-white flex-wrap" style={{  flexDirection: { type } }} >
                {
                    timeline && timeline.data && timeline.data.map((curItem, index) => {
                        var colSize = "col-" + curItem.value
                        return (
                            <div key={index} className={colSize} style={{ backgroundColor: curItem.bgColor }} >
                                <div className="justify-content-center p-1 d-flex" >
                                    {curItem.title}
                                </div>
                            </div>
                        )

                    })
                }
            </div>

        </div>
    )
}

export default Timeline