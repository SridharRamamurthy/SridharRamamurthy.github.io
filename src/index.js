import React from 'react';
import ReactDOM from 'react-dom';

import LeftPanel from './leftPanel'
import Tabs from './tabs'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './style.css'
import 'font-awesome/css/font-awesome.min.css';

class Home extends React.Component {


    render = () => {


        return (
            <div class="flex-container">
                <div style={{ display: "flex", flexDirection: "row" }} >
                    <div className="" style={{
                        "backgroundImage": "linear-gradient(134deg, #b32e86 5%, #152e7a 91%)"
                    }} >
                        {
                            <LeftPanel />
                        }
                    </div>
                    <div className="col-10 pl-0 pr-0" style={{ backgroundColor: "#ffffff" }} >
                        <Tabs />
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<Home />, document.getElementById("root"));