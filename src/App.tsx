/** Required import statements */
import React, { useState, useEffect } from 'react';
import './App.css';   /** CSS File for styling */
import Datatable from './components/datatable';
import Search from './components/search';
import logo from './logo.png';

/** Our main component App() */
function App() {

  /** React State Hooks for dynamic change of variable */
  const [info, setinfo] = useState([])
  const [darkmode, setdarkmode] = useState(false)
  const [state, setstate] = useState({ s: "" })

  /** To assign user input search query */
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let s = e.target.value;

    setstate(prevState => {
      return { ...prevState, s: s }  /** usage of prevState to avoid direct change of current state */
    });
  }

  /** Fetching API using Fetch() */

  useEffect(() => {
    fetch("https://run.mocky.io/v3/b0f3e975-b815-4e88-8a6a-84af59fe32eb")
      .then((response) => response.json())
      .then((data) => setinfo(data));
  }, []);

  /** Search Function to compare user input and Restaurant name */

  function search(rows: any) {
    return rows.filter((row: any) => row["Kushi Tsuru"].toString().toLowerCase().indexOf(state.s.toLowerCase()) > -1 )
  }
  
  /** redering output through return */
  /** we use component <Datatable> for getting cards */

  return (
    <div className="App">
      <div className={darkmode ? "header-dark" : "header"}>
        <img src={logo} className="logo" alt="logo" />
        <button className={darkmode ? "toggle-dark" : "toggle"} onClick={() => setdarkmode(prevMode => !prevMode)}>{darkmode ? "Light Mode" : "Dark Mode"}</button>
      </div>
      <div className={darkmode ? "search-dark" : "search"}>
        <h1 className={darkmode ? "midText-dark" : "midText"}><span></span></h1>
        <Search handleInput={handleInput} />
      </div>
      <div className={darkmode ? "restaurants-dark" : "restaurants"}>
        <Datatable data={search(info)} mode={darkmode} />
      </div>
    </div>
  );
}
/** exporting our component */

export default App;
