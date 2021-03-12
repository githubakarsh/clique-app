
import { useEffect, useState } from "react";
import TopNavBar from './components/topnavbar/TopNavBar';


function App() {
  const [appContent, setAppContent] = useState({});


  fetch(`${process.env.PUBLIC_URL}/content/app-content.json`)
  .then((r) => r.json())
  .then((data) =>{ 
    setAppContent(JSON.stringify(data));
  })


  return (
    <div>
      <TopNavBar content={appContent}/>
      <main className="main-content">
        Page content here
      </main>
    </div>
  );
}

export default App;
