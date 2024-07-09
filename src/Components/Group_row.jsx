import React from "react";

function Group_row(props){

    const get = () =>{
        let gr = [];
        for(var i=0;i<props.size;i++){
            gr.push(
                <div className="Group-row">
                    <div className="rank">{props.rank}</div>
                    <div className="name">{props.name}</div>
                    <div className="played">{props.played}</div>
                    <div className="wins">{props.wins}</div>
                    <div className="losses">{props.losses}</div>
                    <div className="points">{props.points}</div>
               </div>
            )
        }
        return gr;
    }

    return(
        [get()]
    );
}
export default Group_row;