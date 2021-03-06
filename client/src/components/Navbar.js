import React,{useContext} from "react";
import { Link , useHistory} from "react-router-dom";
import {UserContext} from "../App"

export const Navbar = () => {

  const {state, dispatch} = useContext(UserContext )
  const history = useHistory()
  const renderList = () =>{
    if(state){
      return[
            <li>
              <Link to="/profile">Profile</Link>
            </li>,
            <li>
              <Link to="/create">Create A Post</Link>
            </li>,
            <li>
            <button
          className="btn  #0d47a1 blue darken-1"
          onClick={() => {
            localStorage.clear()
            dispatch({type:"CLEAR"})
            history.push('/signin')
          }}
        >
          Logout
        </button>
          </li>
      ]

    }else{
      return[
            <li>
              <Link to="/signin">Signin</Link>
            </li>,
            <li>
              <Link to="/signup">Signup</Link>
            </li>
      ]

    }
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/signin"} className="brand-logo left">
            Instagram
          </Link>
          <ul id="nav-mobile" className="right">
            {renderList()}
          </ul>
        </div>
      </nav>
    </div>
  );
};
