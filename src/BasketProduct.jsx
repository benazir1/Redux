import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';

    const Basketproduct=()=>{
        const {products,total,amount}=useSelector((store)=>store.basket);
    
  return (
  
        <div className='b1 mt-5'> 
        <div> 
        {amount > 1 ? (<>
            <div>
         
       {products.map((item,i)=>
           <Product
           key={new Date().getTime + Math.random()}
           name={item.title}
           price={item.price}
           image={item.thumbnail}
           amount={item.amount}
           />

       )}
       </div>
       </>) 
         :(<>
            <p>your basket is Empty</p>
            </>)}

       <div className='d-flex flex-row align-item-center justify-content-around py-3 m-5'>
       <p>Total</p>
       <p>₹ {total.toFixed(2)}</p>
      </div>
   </div>    
     </div>
  )
        }

export default Basketproduct