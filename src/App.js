import './styles/main.scss';

import { HeaderComponent } from './components/header/HeaderComponent';
import { ContentContainerComponent } from './components/container/ContentContainerComponent';

function App() {
  return (
    <div className="App">
     <HeaderComponent />
     <main>
       App content
      <ContentContainerComponent />
     </main>
    </div>
  );
}

export default App;
