import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/header"

class Container extends React.Component{
    constructor(props){
        super(props)
        self.text = "I have this state in stateful class\n"
        self.list = ["1","2","3","4","5"]
    }
    render(){
        return(
            <div>
                <Header/>
                {self.text}
                {"inline javascript can put here"}
                {
                    self.list.map((data) =>{
                        return(data)
                    })
                }
            </div>
        )
    }
}

ReactDOM.render(<Container/>,document.getElementById("react-container"))
