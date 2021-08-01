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
            <div class="d-flex">
                <div class="row" >
                    <div class="col-md-2 col-sm-12 p-0 justify-content-center" style={{
                        "backgroundImage": "linear-gradient(134deg, #b32e86 5%, #152e7a 91%)"
                    }}>

                        <div class="col-md-12 col-sm-6 p-0 " >
                            <LeftPanel />
                        </div>
                    </div>

                    <div class="col-md-10 col-sm-12 p-0">
                        <div class="col-md-12 col-sm-6 p-0 ">
                            <Tabs />
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}


ReactDOM.render(<Home />, document.getElementById("root"));