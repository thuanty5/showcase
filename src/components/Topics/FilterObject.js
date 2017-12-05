import React, { Component } from "react";

class FilterObject extends Component{

    constructor(){
        super()
        this.state = {
            unFilteredArray: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
            ],
            userInput: "",
            filteredArray: []
        }
    }

    updateUserInput(val){
        this.setState({
            userInput: val
        })
    }

    filterArray(val){
        var filtered = val.filter((e)=> e.hasOwnProperty(this.state.userInput));
        this.setState({
            filteredArray: filtered
        })
    }

    render(){
        return(
            <div className="puzzleBox filterObjextPB">
            
                <h4>Filter Object</h4>

                <span className="puzzleText"> Original: {JSON.stringify(this.state.unFilteredArray)}
                </span>

                <input className="inputLine" onChange={(e)=> this.updateUserInput(e.target.value)} ></input>

                <button className="confirmationButton" onClick={()=> this.filterArray(this.state.unFilteredArray)} > Filter </button>

                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)} </span>

            </div>
        )
    }
}

export default FilterObject