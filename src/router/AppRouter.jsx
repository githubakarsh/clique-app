import CamerasAndOthers from "../pages/cameras/CamerasAndOthers";
import Cancelled from "../pages/cancelled/Cancelled";
import Home from "../pages/home/Home";
import InProgress from '../pages/inprogress/InProgress';
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
        <PrivateRoute token={token} component={InProgress} path={PathConstants.IN_PROGRESS}/>
        <PrivateRoute token={token} component={Home} exact path={PathConstants.DEFAULT}/>
        <PrivateRoute token={token} component={Cancelled} path={PathConstants.CANCELLED}/>
        <PrivateRoute token={token} component={CamerasAndOthers} path={PathConstants.CAMERAS_OTHERS}/>
    </Switch>
}

export default AppRouter;
