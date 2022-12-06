import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
    reducer:{
        burger: (state ={salad:1,beef:1}) => {
            return state
        },
        menu: (state = {salad:10,beef:20}) => {
            return state
        }

    }
})