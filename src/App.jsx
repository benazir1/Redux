import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import Header from './Header'
import Basketproduct from './BasketProduct'
import { useEffect } from 'react';
import { updateTotal } from './BasketSlice';

function App() {
  const { products } =useSelector((store) => store.basket);
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(updateTotal())
     },
     [products,dispatch] )
  return (
    <>
      <Header />
      <Basketproduct />
    </>
  )
}

export default App
