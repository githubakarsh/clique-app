
import { useEffect, useState } from "react";
import TopNavBar from './components/topnavbar/TopNavBar';
import MenuNavigation from './components/topnavbar/MenuNavigation';
import AppRouter from './router/AppRouter';
import { useHistory } from "react-router-dom";
import { PathConstants } from "./router/AppRouterConstants";

function App() {
  const [appContent, setAppContent] = useState({});
  const [token, setToken] =useState('123');
  const history = useHistory();

  fetch(`${process.env.PUBLIC_URL}/content/app-content.json`)
  .then((r) => r.json())
  .then((data) =>{ 
    setAppContent(JSON.stringify(data));
  })

  const logout = () => {
    setToken(null);
  }

  const login = () => {
    history.push(PathConstants.LOGIN);
  }

  const signup = () => {
    history.push(PathConstants.SIGNUP);
  }

  return (
    <div>
      <TopNavBar content={appContent} token={token}
        login={login}
        logout={logout}
        signup={signup}
      />
     {token && <MenuNavigation />} 
      <main className="main-content">
        <AppRouter token={token}/>
      </main>
    </div>
  );
}

export default App;
