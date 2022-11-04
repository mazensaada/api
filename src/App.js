import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
  axios.get("https://jsonplaceholder.typicode.com/users").then(result=>setUsers(result.data))
  }, [])
  console.log(users)
  return (
    <div className="App">
      <header className="App-header">
       {users.map((el,i)=><h1>{el.name}</h1>)}
      </header>
    </div>
  );
}

export default App;
