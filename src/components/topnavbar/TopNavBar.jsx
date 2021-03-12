import MenuNavigation from "./MenuNavigation";


const TopNavBar = ({
    content,
    token,
    login,
    logout,
    signup
}) => {
    const text = token ? 'Logout' : 'Login';
    const manageButton = () => {
        if(token) {
            logout();
        } else {
            login();
        }
    }
    return <nav className="navigation-main">
        <div className="navigation-logo">
            Clique
        </div>
        <div style={{marginLeft: '1179px'}}><ul className="menu-list">
            <li onClick={() => manageButton()}>{text}</li>
            {!token && <li onClick={() => signup()}>Signup  </li>}
        </ul></div>
    </nav>
}

export default TopNavBar;
