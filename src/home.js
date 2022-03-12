import React, { useEffect, useState } from 'react';

import Header from './lib/header'
import Tabs from './tabs'
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div class="d-flex">
           
                <div class="row"  >

                    <div class="" style={{
                        "backgroundImage": "linear-gradient(134deg, #b32e86 5%, #152e7a 91%)"
                    }} >
                        <Header />
                    </div>

                    <div class="">
                        <div class="">
                            <Tabs />
                        </div>

                    </div>

                </div>
            </div >
        
    )
}



export default Home