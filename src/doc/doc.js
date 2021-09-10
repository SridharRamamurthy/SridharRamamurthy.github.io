import React from 'react';

const reactDocs = require("react-docgen");

const componentFolder = "./src"

class Documentation extends React.Component {
    render = () => {
      
        let componentInfo = reactDocs.parse(componentFolder);

        return (
            <div class="d-flex">
                test
            </div>
        )
    }
}


export default Documentation