import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer: {
        burger: (state = { salad: 1, beef: 1, cheese: 5 }, action) => {
            switch (action.type) {
                case 'TANG_GIAM_SO_LUONG': {
                    let burgerUpdate = {...state};
                    burgerUpdate[action.propItem] += action.payload;
                    if (burgerUpdate[action.propItem] < 1) {
                        return {...state}
                    }
                    
                    console.log(burgerUpdate)
                    state = burgerUpdate;
                    return {...state};
                }
                default: {return state}
            }
           
        },
        menu: (state = { salad: 10, beef: 55, cheese: 20 }, action) => {
            return state
        },

    }
})