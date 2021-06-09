import React from 'react';



const Table = (props) => {
    const { data } = props;
    return (
        <div>
            <div className="d-flex column border p-3 fw-bold" style={{ backgroundColor: "#e1e1e1" }} >
                <div className="col-1"></div>
                <div className="col-3"> Project Name </div>
                <div className="col-6 ">Primary Technologies </div>
                <div className="col-2">Domain </div>
            </div>
            {
                data.details && data.details.map((detail, curIndex) => {
                    return (
                        <div key={curIndex} className="d-flex column border-bottom p-3" >
                            <i className="col-1 fa fa-angle-right fa-2x " style={{ color: "#1a88e2" }} />
                            <div className="col-3" >{detail.title} </div>
                            <div className="col-6" >{detail.primary} </div>
                            <div className="col-2">Domain </div>
                        </div>
                    )
                })
            }
        </div>)
}

export default Table
