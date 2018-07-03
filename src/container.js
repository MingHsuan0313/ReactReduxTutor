import React from "react"

export default class Container extends React.Component {
    //this.props.store 
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                {this.props.store.getState()} 
                <br/>
                <input onChange = { (event) =>{
                    this.props.store.dispatch({
                        type:"change",
                        payload:event.target.value
                    })
                    }
                } id="title" type="text"></input>
                <br/>
                Hello I am Container
            </div>
        )
    }
}
