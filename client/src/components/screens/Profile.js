import React,{useEffect,useState,useContext } from "react";
import {UserContext} from "../../App"

export const Profile = () => {
  const[mypics,setMypics]=useState([])
  const {state,dispatch} =useContext(UserContext)
  useEffect(()=>{
    fetch('./mypost',{
      headers:{
        "Authorization":"bearer "+localStorage.getItem("jwt" )
      }
    }).then(res=>res.json())
    .then(result=>{
      setMypics(result.mypost)

    })
  },[])
  return (
    <div style={{maxWidth:"750px", margin:"0px auto", }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            alt="Profile"
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
          />
        </div>
        <div>
      <h4>{state?state.name:"loading" }</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h5>40 posts</h5>
            <h5>40 followers</h5>
            <h5>40 following</h5>
          </div>
        </div>
      </div>

      <div className="gallery">
        {
          mypics.map(item=>{
            return(
              <img
              key={item._id}
              className="item"
              alt={item.title }
              src={item.photo}
        />
            )
          })
        }
      </div>
    </div>
  );
};
