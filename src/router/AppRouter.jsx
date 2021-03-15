import Banking from "../pages/banking/Banking";
import CreditCard from "../pages/creditcard/CreditCard";
import Home from "../pages/home/Home";
import Investments from '../pages/investments/Investments';
import NewBookings from "../pages/newbookings/NewBookings";
import { Switch, Route} from "react-router-dom";
import { PathConstants } from './AppRouterConstants';
import LoginPage from "../pages/login/LoginPage";
import PrivateRoute from "./PrivateRoute";
import Signup from '../pages/signup/Signup';


const AppRouter = ({
    token
}) => {
    return <Switch>
        <Route component={LoginPage} path={PathConstants.LOGIN} />
        <Route component={Signup} path={PathConstants.SIGNUP} />
        <PrivateRoute token={token} component={NewBookings} path={PathConstants.NEW_BOOKINGS}/>
        <PrivateRoute token={token} component={Investments} path={PathConstants.INVESTMENTS}/>
        <PrivateRoute token={token} component={Home} exact path={PathConstants.DEFAULT}/>
        <PrivateRoute token={token} component={CreditCard} path={PathConstants.CREDITCARD}/>
        <PrivateRoute token={token} component={Banking} path={PathConstants.BANKING}/>
    </Switch>
}

export default AppRouter;
