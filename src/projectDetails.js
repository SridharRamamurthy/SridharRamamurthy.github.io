import React from 'react';
import Table from './table'


const ProjectDetails = (props) => {
    const { data } = props;
    return (
        <div className="d-flex row m-4" > {
            data && data.map((curItem, curIndex) => {
                return (
                    <div key={curIndex} className="p-4 mt-4" style={{ backgroundColor: "#ffffff" }}>
                        <div  className="m-3 mt-3" >
                            <div className="p-1" style={{
                                backgroundColor: curItem.bgColor && curItem.bgColor
                            }}>
                            </div>
                            <div className="p-2 fw-bold border" style={{ backgroundColor: "#f5f5f5" }}>
                                {curItem.title && curItem.title}

                            </div>
                            <div class="border">
                                <div>
                                    {
                                        <Table data={curItem} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                )

            })
        }
        </div>
    )
}

export default ProjectDetails
