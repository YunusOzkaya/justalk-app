import React from "react";
import SignIn from "./SignIn";
import LogOut from "./LogOut"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";


export default function Navbar(){
    const [user]=useAuthState(auth)
    const style={
        nav:"bg-lemon-500 h-[120px] flex justify-between items-center p-4",
        imageContainer:"w-[181px]"
    }
    return(
        <div className={style.nav}>
            <img className={style.imageContainer} src="images/main_logo.png" />
            {user ? <LogOut /> : <SignIn /> }
                       
        </div>
    )
}