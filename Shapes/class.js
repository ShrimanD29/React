import React from 'react';

class Vccube extends React.Component{
    render(){
    var side=2;
    var area=side*side;
    return(
        area
    );
    }
}

class Pccube extends React.Component{
    render(){
    var side=2;
    var peri=12*side;
    return (
        peri
    );
    }
}

class Vccubo extends React.Component{
    render(){
    var l=2;
    var b=3;
    var h=5;
    return(
        l*b*h
    )
    }
}

class Pccubo extends React.Component{
    render(){
        var l=2;
        var b=3;
        var h=5;
        return(
            4*(l*b*h)
        )
    }
}

class Semi extends React.Component{
    render(){
        var r=2;
        return(
            3.14*r+2*r
        )
    }
}

export {Vccube,Pccube,Vccubo,Pccubo,Semi};
