import React from 'react';
import './User.css'
const User = (props) => {
    const {name,email,address,bio,sellary,image}=props.user;
    const handelAddFriend =props.handelAddFriend;
    //  console.log(props)
    return (
        <div className= "user">
            <div>
             <img src={image} alt=""/>
            </div>
            <div className="user-name">
                <h4>Name:{name}</h4>
               <p>Email:{email}</p>
               <p>Address:{address}</p>
               <p>Sellary:{sellary}</p>
                <p>bio:{bio}</p>
                <button className="addbtn" onClick={()=>handelAddFriend(props.user)}>+ addFriend</button>
            </div>
        </div>
    );
};

export default User;