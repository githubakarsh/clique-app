const TopNavBar = () => {
    return <nav className="navigation-main">
        <div className="navigation-logo">
            Logo
        </div>
        <div className="search-bar">
            <input type="text" placeholder="Search ..."/>
        </div>
        <ul className="navigation-menu">
            <li>Login / Logout </li>
        </ul>
    </nav>
}

export default TopNavBar;
