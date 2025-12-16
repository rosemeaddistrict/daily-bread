import React, { useState } from "react";

function Mainpage(props){


    return <>
        <h1>本周({props.data.curWeek})晨兴与读经进度</h1>
        <hr></hr>
        <h2>{props.data.items[0].name}</h2>
        <h3>书目: {props.data.items[0].book}</h3>
        <h3>进度: <a href={props.data.items[0].link}>{props.data.items[0].chapter} {props.data.items[0].subject}</a></h3>
    </>;
}

export default Mainpage;