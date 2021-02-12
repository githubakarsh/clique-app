import Proptypes from 'prop-types';

export const HeaderComponent = ({

}) => {
    return <nav className="header-main">
        <section className="header-left-items">Quantum</section>
        <section className="header-center-items"> 
            <ul>
                <li>To Do</li>
                <li>Example</li>
                <li>Example</li>
            </ul>
        </section>
        <section className="header-right-items"> <a className="anchor-main" href="#">Login</a></section>
    </nav>
}