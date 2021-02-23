import './styles/main.scss';

import { HeaderComponent } from './components/header/HeaderComponent';
import { ContentContainerComponent } from './components/container/ContentContainerComponent';
import { NewTodo } from './journies/TODOAPP/NewTodo/NewTodo';
import { SMPage } from './journies/Instagram/SMPage';

import JournalLogin from './journies/journal/JournalLogin';

function App() {
  return (
    <div className="App">
      <JournalLogin />
    </div>
  );
}

export default App;
