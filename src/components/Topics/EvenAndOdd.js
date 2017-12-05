import React, { Component } from "react";

class EvenAndOdd extends Component{

    constructor(){
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    updateUserInput(val){
        this.setState({userInput: val});
    }

    splitEvenOdds(userInput) {
        var arr = userInput.split(',');
        var evens = [];
        var odds = [];
        for(var i of arr){
            i%2 === 0 ? evens.push(+i) : odds.push(+i);
        }
        this.setState({ evenArray: evens, oddArray: odds });
    }

    render(){
        return(
            <div className="puzzleBox evenAndOddPB">

                <h4>Evens and Odds</h4>

                <input className="inputLine" onChange={(e)=>this.updateUserInput(e.target.value)}></input>

                <button className="confirmationButton" onClick={()=>{this.splitEvenOdds(this.state.userInput)}}> Split </button>

                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>

                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>

            </div>
            
        )
    }
}

export default EvenAndOdd
