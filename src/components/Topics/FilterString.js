import React, { Component } from "react";

class FilterString extends Component{

    constructor(){
        super()
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: "",
            filteredArray: [],
        }
    }
    

    updateUserInput(val){
        this.setState({
            userInput: val
        })
    }

    filterArr(val){
        var filtered = val.filter((e)=> e.includes(this.state.userInput));
        this.setState({
            filteredArray: filtered
        })
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB" >
                <h4>Filter String</h4>
                <span  className="puzzleText" >Names: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(e)=> this.updateUserInput(e.target.value)} ></input>
                <button className="confirmationButton" onClick={()=> this.filterArr(this.state.unFilteredArray)} >Filter</button>
                <span className="resultBox filterStringRB" >Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}

export default FilterString


