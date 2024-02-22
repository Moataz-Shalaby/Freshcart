import { configureStore } from "@reduxjs/toolkit";
import { branReducer, brandsReducer } from "./brandsSlice";
import { categoriesReducer } from "./CategoriesSlice";



export let store = configureStore({
    reducer : {
        brand : brandsReducer,
        category : categoriesReducer,
        
    }
})