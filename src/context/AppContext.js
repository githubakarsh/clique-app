import { createContext } from "react";

const AppContext = createContext({
    appContent: '',
    appToken: '',
});

export default AppContext;
