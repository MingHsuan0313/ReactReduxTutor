import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header"

class Container extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <Header/>
                
            </div>
        )
    }
}

ReactDOM.render(<Container/>,document.getElementById("react-container"))
