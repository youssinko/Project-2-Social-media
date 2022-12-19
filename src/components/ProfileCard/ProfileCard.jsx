import React from 'react'
import './ProfileCard.css'

function ProfileCard() {
  return (
    <div className='ProfileCard'>
        <div className="ProfileImage">
            <img src="https://cdn.stockmediaserver.com/smsimg35/pv/IsignstockContributors/ISS_18508_00896.jpg?token=cDBq9IVXeO4kd4qIngnXyEXZQ3EVf4JEBiNZdkBJv0Q&class=pv&smss=59&expires=4102358400" alt="" />
        </div>
        <div className="profile-name">
          <span>Rania Elnaggar</span>
          <span>Junior Full Stack Developer</span>
        </div>
        <div className="followStatus">
          <hr />
          <div>
            <div className="follow">
              <span>1,000</span>
              <span>Followings</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
              <span>100</span>
              <span>Followers</span>
            </div> 
          </div>
          <hr />
        </div>
          <span>My Profile</span>
    </div>
  )
}

export default ProfileCard