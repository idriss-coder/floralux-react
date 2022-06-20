/* eslint-disable prettier/prettier */
import React,{useEffect, useState} from "react";

export default function Page({title, children}:any) {
    const [dTitle, setDTitle] = useState("");
    useEffect(()=>{
        setDTitle(window.document.title)
        window.document.title = title
        return ()=>{
             window.document.title = dTitle
        }
    },[title])

    return (
        <div>
        {children}
        </div>
    );
}
