const TopNavBar = ({
    content
}) => {
    return <nav className="navigation-main">
        <div className="navigation-logo">
            Clique
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Search ..."/>
        </div>
        <ul className="menu-list">
            <li>Login / Logout </li>
            <li>Signup  </li>
        </ul>
    </nav>
}

export default TopNavBar;
