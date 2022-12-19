import React from "react";
import './Home.css';
import ProfileSide from "../../components/ProfileSide/ProfileSide"
export default function Home(){
    return(
        <div className="Home">
        <div className="profileSide"><ProfileSide /></div>
        <div className="postSide">Posts</div>
        <div className="rightSide">RightSide</div>
        </div>
    )
}
