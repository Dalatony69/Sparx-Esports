import React from "react";
import Header from "../Components/Header";
import Group_sec from "../Components/Groups_sec";
import "../App.css";

function Home_page(){
    return(
        <div className="Home-page">
            <Header/>
            <Group_sec/>
        </div>
    );
}
export default Home_page;