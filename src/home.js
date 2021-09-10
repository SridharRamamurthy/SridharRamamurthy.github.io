import React from 'react';
import LeftPanel from './leftPanel'
import Tabs from './tabs'
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render = () => {
    
        return (
            <div class="d-flex">
                <div class="row"  >
                  
                    <div class="col-md-2 col-sm-12 p-0 justify-content-center" style={{
                        "backgroundImage": "linear-gradient(134deg, #b32e86 5%, #152e7a 91%)"
                        
                    }} >

                        <div class="col-md-12 col-sm-6 mb-4 " >
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


export default Home