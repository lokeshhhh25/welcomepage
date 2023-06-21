import React from "react";
import "./index.css";

function Event(){

 const time=new Date().getHours();

let Msg=" ";
const cssStyle={};


if(time>=1 && time<12){
  Msg='good morning';
  cssStyle.color="skyblue";
}else if(time>=12 && time<20){
  Msg='good evening'
  cssStyle.color="orange";
}
else{
  Msg="good night";
  cssStyle.color="black";
  
}

return (
    <>
    <div className="main">
      <h1 className="text">hello sir ,<span style={cssStyle}>{ Msg}</span></h1>
    </div>
  
    </>
);
}

export default Event;