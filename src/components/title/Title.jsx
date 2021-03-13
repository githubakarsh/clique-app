import { createElement }  from "react";

const Title = ({
    type,
    children
}) => {
    return <div className="title-main">
        {createElement(type, {id: '', name: '', className: 'title-content'}, children)}
    </div>
}

Title.defaultProps = {
    type: "h1",
}

export default Title;