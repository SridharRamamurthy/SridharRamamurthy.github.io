
import React, { useState } from 'react';

import LeftPanel from './leftPanel';
import photo from './photo.jpg'
import ContextMenu from './dashboard/contextMenu'
const Header = () => {
    const [displayMenu, setDisplayMenu] = useState(false);

    return (

        <div class="me-2">

            <div class="row text-white">
                <div class="col-1">
                    <div
                        style={{
                            cursor: "pointer",

                        }}
                        onClick={(e) => {
                            e.stopPropagation();
                            setDisplayMenu(!displayMenu)
                        }}>

                        <i className="fa fa-bars fa-2x p-2"></i>
                    </div>

                </div>
                <div className="d-flex flex-grow-1 col-1 p-2 justify-content-end" >
                    <span>Sridhar Ramamurthy</span>
                    <ContextMenu
                        open={false}
                        clickableZone={<div style={{ color: "#182a5c" }}>
                            <img src={photo} className="center rounded-circle img-fluid border border-white rounded-1 mx-4" />
                        </div>}
                        menuItems={[{
                            content: "(+91) 991 617 5522",

                        },
                            null,
                        {
                            content: "sridhar3011@gmail.com"
                        },

                        ]}
                    />

                </div>

            </div>
            <div class="row m-2">
                {
                    displayMenu &&
                    <div class="col-md-12 col-sm-6 mb-4" >
                        <LeftPanel />
                    </div>
                }
            </div>
        </div>


    )
}


export default Header