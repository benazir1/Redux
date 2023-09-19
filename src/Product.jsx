import React from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { increment,decrement,removeItem } from './BasketSlice'


const Product=({name,price,amount,image})=>{
 const dispatch=useDispatch();
  return (
   <>
<div className="row">
  <div className="col">  <img src={image} width="45%"/></div>
  <div className="col">{name}</div>
  <div className="col">{price}</div>
  <div className="col"><button type="button" className="btn btn-dark mx-2"
   onClick={() =>  { if(amount === 1){
    dispatch(removeItem({name}));
    return;
  }
   dispatch(decrement({ name })) }}>-</button>{amount}
  <button type="button" className="btn btn-dark mx-2" 
    onClick={() => { dispatch(increment({ name })) }}>+</button>
    </div>
  <div className="col"><button type="button" className="btn btn-danger" 
  onClick={() => { dispatch(removeItem({ name })) }}>Remove</button></div>
</div>


   </>
  )
}

export default Product