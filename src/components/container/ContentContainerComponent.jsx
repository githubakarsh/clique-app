
export const ContentContainerComponent = ({
    title,
    children
}) => {
    return (<div className="content-container-main">
        <section className="content-container-title">
            <h2>title {title}</h2>
        </section>
        <section className="content-container-body">
            body {children}
        </section>
    </div>)
}