import './styles/main.scss';

import { HeaderComponent } from './components/header/HeaderComponent';
import { ContentContainerComponent } from './components/container/ContentContainerComponent';
import { NewTodo } from './journies/TODOAPP/NewTodo/NewTodo';

function App() {
  return (
    <div className="App">
     <HeaderComponent />
     <main className="main-container">
      <NewTodo />
     </main>
    </div>
  );
}

export default App;
