// reducer is the function who will handle all dispatch function fired from store object
// it's default tow argument is state and action
// state is the global object it will save in the browser
// action is the object get from store.dispatch

const TextReducer = (state = "",action) =>{
    switch(action.type){
        case "change":
            state = action.payload
        break

        default:
            console.log("Not found")
        break
    }
    return state
}


export default TextReducer
