import React from 'react'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state={scale:'c', temp:0}
    }

    render(){
        return(
            <fieldset>
                <legend>
                    Scale Name 
                </legend>
            </fieldset>
        )
    }
}