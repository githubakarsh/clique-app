
import { useEffect, useState } from "react";
import TopNavBar from './components/topnavbar/TopNavBar';


function App() {
  const [appContent, setAppContent] = useState({});

useEffect(() => {
  fetch(`${process.env.PUBLIC_URL}/content/app-content.json`)
  .then((r) => r.json())
  .then((data) =>{ 
    setAppContent(JSON.stringify(data));
  })
})

  return (
    <div>
      <TopNavBar />
    </div>
  );
}

export default App;
