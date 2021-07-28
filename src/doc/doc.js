const reactDocs = require("react-docgen");

const componentFolder = "./src"

const componentInfo = reactDocs.parse();

const Documentation = () => {
    return (
        console.log(componentInfo)
    )
}

export default Documentation
