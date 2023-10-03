import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Categories from './components/Categories';
import Header from './components/Header';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
function App() {
  const [category, setCategory] = useState("New York")
  const [page, setPage] = useState(0)
  return (
    <div >
     <Header/>
     <Outlet />
    </div>
  );
}

export default App;

export const appRouter = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children : [
  {
    path:'/',
    element:<CardContainer />
  },
  {
    path:'/product/:id',
    element:<ProductDetails/>
  },
]
}])
