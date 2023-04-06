import { useState, useEffect, useContext } from "react";
import "./App.css";
import Calendar from "./Components/Calendar";
import Header from "./Components/Header";
import TodoComponent from "./Components/TodoComponent";
import ShopListComponent from "./Components/ShopListComponent";
import WeekComponent from "./Components/WeekComponent";
import { DataContext } from "./Contexts/DataContext";
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

function App() {
  const [dummyData, setDummyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)

  const url = "https://weeklog-f836.restdb.io/rest/data";
  const options = {
    headers: {
      "x-apikey": "642d8b8739cf552ef728bff7",
    },
  };
  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setDummyData(data[0]);
        console.log("dummyData", dummyData);
        setIsLoaded(true);

      });
  }, []);

  return (
    <main>
      <DataContext.Provider value={{ dummyData, setDummyData }}>
     
<>
{isLoaded ?
  <Header />: 
<Skeleton variant="rectangular" width={1000} height={80} />}

<div className="first-row">
{isLoaded ?
  <Calendar /> : 
<Skeleton variant="rectangular" width={300} height={350} />}
{isLoaded ?
 <TodoComponent /> : 
<Skeleton variant="rectangular" width={300} height={350} />}
{isLoaded ?
 <ShopListComponent /> : 
<Skeleton variant="rectangular" width={300} height={350} />}
  
</div>
{isLoaded ?
  <WeekComponent />: 
<Skeleton variant="rectangular" width={1000} height={250} />}

</>        

        
      </DataContext.Provider>
    </main>
  );
}

export default App;
