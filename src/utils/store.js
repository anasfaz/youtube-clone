import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";

//how to make store
// wha the configure store take 


const store = configureStore({
    reducer: {
        app:appSlice,
    }
});

export default store;