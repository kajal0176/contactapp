import React from "react";
import Details from './details'
import Avatar from './Avatar'
function Card(props){
  return(
<div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
         <Avatar
         img={props.img}
         />
        </div>
        <div className="bottom">
         <Details
         detailinfo={props.tel}
         />
         <Details
         detailinfo={props.email}
         />
          
        </div>
      </div>
  )
}
export default Card;