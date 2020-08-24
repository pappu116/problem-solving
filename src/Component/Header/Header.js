import React, { useState } from 'react';
import './Header.css'
import User from '../User/User';
import fakeData from '../../fakeData'
import Cart from '../Cart/Cart';

const Header = () => {
    
    const fiirstUsr10 = fakeData.slice(0,10)
    const [cart,setCart]=useState([])
   const [user,setUser] = useState(fiirstUsr10)
    // console.log(fiirstUsr10)
    const handelAddFriend=(user)=>{
        const newCart=[...cart,user]
        setCart(newCart)
    }
       
    return (
        <div className="header">
            <div className="header-name">
                {
                    user.map(usr => <User user={usr} handelAddFriend={handelAddFriend} key={usr.key}></User>)
                }
                
            </div>
            <div>
             <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Header;