import { applyMiddleware, combineReducers,createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { courseReducer } from "./Reducers/Coursereducer";


const reducer=combineReducers({
    cart: courseReducer

})

const cartItemsfromLocalStorage=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]

const initialState={
    cart:{
        cartItems:cartItemsfromLocalStorage
    }
}

const middleware=[thunk]

const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;