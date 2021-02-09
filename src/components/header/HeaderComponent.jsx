import Proptypes from 'prop-types';

export const HeaderComponent = ({

}) => {
    return <div className="header-main">
        <section className="header-left-items">left logo / heading</section>
        <section className="header-center-items"> 
            <ul>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
            </ul>
        </section>
        <section className="header-right-items"> logout / sign up</section>
    </div>
}