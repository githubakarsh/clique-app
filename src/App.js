import './styles/main.scss';
import NavBarComponent from './components/header/NavBarComponent';
import Spendings from './pages/Spending';
import { Card } from "react-bootstrap";


function App() {
  return (
    <div>
      <header><NavBarComponent /></header>
      <main ><Spendings /></main>
      <footer></footer>
    </div>
  );
}

export default App;
