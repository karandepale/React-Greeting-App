
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


let currDate = new Date();     //2022 , 7 , 5 , 11
let currTime = currDate.getHours();
let currMinutes = currDate.getMinutes();

let greeting = '';
const style = {
};

if(currTime >= 1  &&  currTime < 12){
    greeting = 'Good Morning';
    style.color = 'green';
}
else if( currTime >= 12  &&  currTime <= 19){
    greeting = 'Good After-Noon';
    style.color = 'orange';
}
else{
    greeting = 'Good Night';
    style.color = 'red';
}

ReactDOM.render(
    <React.Fragment>
    <div className="dv">
    <h1> Hello Sir ,<span style={style}> {greeting}</span>  </h1>
    <h2> { ` time: ${currTime} : ${currMinutes} ` } </h2>
    </div>
    </React.Fragment> ,
    document.getElementById('root')
);
