import React from 'react';
import './App.css';
import Pcube from './func2';
import Vcubo from './func3';
import Pcubo from './func4';
import Semi1 from './func5';
function Func1(){
    var side=2;
    var area=side*side;
    return(
    <>
    <h1 id='ul'>Functions</h1>
    <br></br>
    <h3>Volume of cube</h3>
    {area}
    <br></br>
    <h3>Perimeter Of cube</h3>
    <Pcube/>
    <br></br>
    <h3>Volume of cuboid</h3>
    <Vcubo/>
    <br></br>
    <h3>Perimeter of cuboid</h3>
    <Pcubo/>
    <br></br>
    <h3>Semicircle</h3>
    <Semi1/>
    <br></br>
    </>
    );
}

export default Func1;