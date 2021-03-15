
import { PathConstants }  from "../../router/AppRouterConstants";
import {useHistory } from "react-router-dom";
const options = [
    {name: 'Home', path: PathConstants.DEFAULT},
    {name: 'New Bookings', path: PathConstants.NEW_BOOKINGS},
    {name: 'Investments', path: PathConstants.INVESTMENTS},
    {name: 'Credit Card', path: PathConstants.CREDITCARD},
    {name: 'Banking', path: PathConstants.BANKING},
]

const MenuNavigation = () => {
    const history = useHistory();
    const optionClick = (path) => {
        history.push(path);
    }
    return <nav className="menu-navigation"><ul className="menu-list">
        {options.map(listItem  => {
            return <li onClick={() => optionClick(listItem.path)}>{listItem.name}</li>
        })}
</ul></nav>
}

export default MenuNavigation;
