import './styles/main.scss';

import { HeaderComponent } from './components/header/HeaderComponent';
import { ContentContainerComponent } from './components/container/ContentContainerComponent';
import { NewTodo } from './journies/TODOAPP/NewTodo/NewTodo';
import { SMPage } from './journies/Instagram/SMPage';

function App() {
  return (
    <div className="App">
      <SMPage />
    </div>
  );
}

export default App;
