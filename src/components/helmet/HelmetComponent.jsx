import { Helmet } from "react-helmet";

const HelmetComponent = ({
    title
}) => {
    return (<Helmet title={title}/>)
}

export default HelmetComponent;