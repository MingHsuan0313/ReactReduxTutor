import logger from "redux-logger"
import {createStore, applyMiddleware} from "redux"
import TextReducer from "./textReducer"
import ReactDOM from "react-dom"
import React from "react"
import Container from "./container"

//second argument means the default state 0
//third argument means the middleware that will show the log in the console.log
const store = createStore(TextReducer,"",applyMiddleware(logger))



const render = () => {
    // store will pass to Container class as this.props.store
    ReactDOM.render(<Container store={store}/>,document.getElementById("react-container"))
}
// every time store beind updated will fire render
// store will be updated by TextReducer defined in line 9
store.subscribe(render)
// initialization
render()


