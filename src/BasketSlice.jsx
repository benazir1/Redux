import { createSlice } from '@reduxjs/toolkit'
import { data } from './ProductList'

const initialState = {
  products: data,
  amount: 0,
  total: 0
}

  const basketSlice=createSlice({
    name: "basket",
    initialState,
  reducers: {
    increment: (state, { payload }) => {
      console.log(payload.name);
      const item = state.products.find(item => item.title === payload.name);
      console.log(item);
      item.amount +=1;
      
    },
    decrement: (state, {payload})=>{
      const item=state.products.find(item=>item.title === payload.name);
      console.log(item);
      item.amount -=1;
    },
    removeItem:(state , {payload}) => {
      state.products = state.products.filter(item=>item.title!==payload.name)
    },
    updateTotal:(state) => {
      let amount=0;
      let total = 0;
      state.products.forEach(item => {
        amount += item.amount;
        total += item.amount*item.price;
      });
      state.amount=amount;
      state.total=total;
    }
   
  }
})

export const { increment,decrement,removeItem,updateTotal } = basketSlice.actions;
export default basketSlice.reducer;