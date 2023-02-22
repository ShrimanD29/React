import './price.css';
import React from 'react';

class Price extends React.Component{
    constructor(props){
        super(props);
            this.state={
                price:500,
                qu:1
            }
            
    }
    addProd=()=>{
        this.setState({qu:this.state.qu+1});
    }
    subProd=()=>{
        this.setState({qu:this.state.qu-1});
    }
    render(){
        return(
            <>
            <button id="add" onClick={this.addProd}>+</button>
            <h4 id="qua">{"Quantities: "+this.state.qu}</h4>
            <button id="sub" onClick={this.subProd}>-</button>
            <h1 id="price">{"Rupees: "+this.state.price * this.state.qu}</h1>
            </>
        );
    }
}

export default Price;