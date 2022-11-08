import './App.css';
import ListJob from './components/listJob/ListJob';
import React, { useEffect, useState } from 'react'
import DetailsJob from './components/detailsJob/DetailsJob';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [setJobList, setData] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function fetchJobList(){
            try {
                let responce = await fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
                let responceJSON = await responce.json();
                setData(responceJSON)
                
            } catch{}
        }
        
        fetchJobList()
    }, []);
  return (
    <div className="App"> 
    <BrowserRouter> 
      <Routes>
          <Route path='/' element={<ListJob setJobList={setJobList}/>} ></Route>
          {setJobList.map(job => <Route path={`/job/${job.id}`}  element={<DetailsJob key={job.id} setJobList={job}/>} />)}
      </Routes>
    </BrowserRouter> 
    </div>
  );
}

export default App;
