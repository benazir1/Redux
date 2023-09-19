import { configureStore } from "@reduxjs/toolkit";

import basketSlice from "./BasketSlice";
export const store = configureStore({
    reducer:{
       basket: basketSlice
    },
});
export default store