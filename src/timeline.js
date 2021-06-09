import React from 'react'


const Timeline = (props) => {

    var timeline = props.timeline
    var type = timeline && timeline.type

    return (
        <div class="flex-container">
            <div className="border m-4 text-white " style={{ display: "flex", flexDirection: { type } }} >
                {
                    timeline && timeline.data && timeline.data.map((curItem, index) => {
                        var colSize = "col-" + curItem.value
                        return (
                            <div key={index} className={colSize} style={{ backgroundColor: curItem.bgColor }} >
                                <div className="justify-content-center" style={{ display: "flex" }}>
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