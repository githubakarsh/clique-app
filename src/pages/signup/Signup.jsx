import {useHistory } from "react-router-dom";
import { PathConstants } from "../../router/AppRouterConstants";

const Signup = () => {
    const history = useHistory();
    const onLogin = () => {
        history.push(PathConstants.LOGIN);
    }
    return <>Signup
        <button onClick={() => onLogin()}>Login ?.</button>
    </>
}

export default Signup;
