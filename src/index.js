import logger from "redux-logger"
import {createStore, applyMiddleware} from "redux"

// reducer is the function who will handle all dispatch function fired from store object
// it's default tow argument is state and action
// state is the global object it will save in the browser
// action is the object get from store.dispatch
const mathReducer = (state = 0, action) =>{
    switch(action.type){
        case "add":
            state = state + action.payload 
        break

        case "sub":
            state = state - action.payload 
        break

        case "div":
            state = state / action.payload
        break

        case "mul":
            state = state * action.payload
        break
    }
    return state
}

//second argument means the default state 0
//third argument means the middleware that will show the log in the console.log
const store = createStore(mathReducer,0,applyMiddleware(logger))

store.subscribe( () =>{
    console.log("update")
})
// below is something like this
// 0 (default state defined in createStore)
// (((0 + 2) * 5) - 7) / 2 = 1.5
// you can see the result in F12 developer console
store.dispatch({
    type: "add",
    payload: 2
})

store.dispatch({
    type: "mul",
    payload: 5
})

store.dispatch({
    type: "sub",
    payload: 7
})

store.dispatch({
    type: "div",
    payload: 2
})



