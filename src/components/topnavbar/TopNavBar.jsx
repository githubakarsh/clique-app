import MenuNavigation from "./MenuNavigation";


const TopNavBar = ({
    content
}) => {
    return <nav className="navigation-main">
        <div className="navigation-logo">
            Clique
        </div>
        <div style={{marginLeft: '1179px'}}><ul className="menu-list">
            <li>Login / Logout </li>
            <li>Signup  </li>
        </ul></div>
    </nav>
}

export default TopNavBar;
