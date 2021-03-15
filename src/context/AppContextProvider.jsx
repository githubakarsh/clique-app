

import AppContext from './AppContext';

const AppContextProvider = ({
    children
}) => {
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;
