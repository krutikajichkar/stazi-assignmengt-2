import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Categories from './components/Categories';
import Header from './components/Header';
function App() {
  const [category, setCategory] = useState("New York")
  const [page, setPage] = useState(0)
  return (
    <div className="bg-blue-50 h-[100%]">
     <Header category={category} setCategory={setCategory} setPage={setPage}/>
     <CardContainer category={category} page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
