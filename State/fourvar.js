import React from "react";
class FourVar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            a:1,
            b:2,
            c:3,
            d:4,
            str:"Before changing"
        };
    }
    changeA=()=>{
        this.setState({a:5,str:"After changing A"});
        
    }
    changeB=()=>{
        this.setState({b:6,str:"After changing B"});
    }
    changeC=()=>{
        this.setState({c:7,str:"After changing C"});
    }
    changeD=()=>{
        this.setState({d:8,str:"After changing D"});
    }
    changeAll=()=>{
        this.setState({a:9,b:10,c:11,d:12,str:"After changing ALL"});
    }
    resetAll=()=>{
        this.setState({a:1,b:2,c:3,d:4,str:"After Reset"});
    }
    render(){
    return (
        <>
        <button onClick={this.changeA}>Change A</button>
        <button onClick={this.changeB}>Change B</button>
        <button onClick={this.changeC}>Change C</button>
        <button onClick={this.changeD}>Change D</button>
        <button onClick={this.changeAll}>Change All</button>
        <button onClick={this.resetAll}>Reset</button>
        <h4>{this.state.str}</h4>
        <h1>{(this.state.a*this.state.b*this.state.c*this.state.d)+(this.state.a+this.state.b+this.state.c+this.state.d)}</h1>
        </>
    );
    }
}

export default FourVar;