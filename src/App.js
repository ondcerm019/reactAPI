import {useState} from 'react';
import './App.css';
import DataPicker from "./components/DataPicker";
import List from "./components/List";
//import Item from "./components/Item";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="App">
      <DataPicker date={date} setDateAction={setDate} />
      <List date={date} />
    </div>
  );
}

export default App;
