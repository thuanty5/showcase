import React, { Component } from "react";

class Palindrome extends Component{

    constructor(){
        super()
        this.state = {
            userInput: "",
            palindrom: ""
        }
    }

    updateUserInput(val){
        this.setState({
            userInput: val,
        })
    }
    checkPalindrome(val){
        var test = val.split("").reverse().join("");
        if(test === this.state.userInput){
            this.setState({
                palindrom: "true"
            })
        }else{
            this.setState({
                palindrom: "false"
            })
        }
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB"> 
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e)=> this.updateUserInput(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=> this.checkPalindrome(this.state.userInput)}>Check</button>
                <span className="resultsBox">Palindrom: {this.state.palindrom}</span>
            </div>
        )
    }
}

export default Palindrome