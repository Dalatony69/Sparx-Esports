import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Group_row from "./Group_row";

function Group(props){
    
    const get = () =>{
    let gr = [];
    for(var i=0;i<props.x;i++){
        gr.push(
            <div className="Group">
            <Group_row  size ={1} rank={"Rank"} name={"Name"} played={"Played"} wins={"Wins"} losses={"Losses"} points={"Points"}/>
            <Group_row  size ={4} rank={0} name={"default"} played={0} wins={0} losses={0} points={0}/>
        </div>
        )
    }
    return gr;
}
    return(
       [get()]
    );
}
export default Group;