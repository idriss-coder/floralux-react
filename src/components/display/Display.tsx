/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */

import React,{useRef, useEffect, useState} from "react";
import {Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import {ChevronLeftOutlined, ChevronRightOutlined} from "@mui/icons-material"
import { DisplayProps } from "../../interfaces/componentsProps";
import Container from "../container/Container";
import "./Display.scss"

function Display({title, link, children, wrap=false, nodesc=false}:DisplayProps): JSX.Element {

    const [scrolPosition, setScrolPosition] = useState(0)
    const [scrollRightEnable, setScrollRightEnable] = useState(true)
    const [scrollLeftEnable, setScrollLeftEnable]  = useState(false)
    const [scrollable, setScrollable] = useState(false)

    const swipper = useRef() as React.MutableRefObject<HTMLDivElement>
    const swipper2 = useRef() as React.MutableRefObject<HTMLDivElement>

    const verifyIfIsScrollable = ()=>{
        if(!wrap){
            if(swipper.current.scrollWidth > swipper.current.clientWidth){
                setScrollable(true)
            }else{
                setScrollable(false)
            }
        }
    }
    useEffect(()=>{
        // eslint-disable-next-line operator-assignment
        // setScrolPosition(swipper.current.clientWidth)
       if(!wrap){
         swipper.current.scrollLeft = 0
       }

    },[])

    useEffect(()=>{
        if(!wrap){
            // eslint-disable-next-line operator-assignment
            swipper.current.scrollLeft = scrolPosition
        }

    },[scrolPosition])

    useEffect(()=>{
       if(!wrap){
         // eslint-disable-next-line operator-assignment
            swipper.current.scrollLeft = scrolPosition
            verifyIfIsScrollable()
       }
    },[])

    useEffect(() => {
        function handleResize() {
            verifyIfIsScrollable()
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const scrollLeft = ()=>{
       if(swipper.current){
            if((swipper.current.scrollWidth - swipper.current.scrollLeft) > swipper.current.clientWidth){
                setScrolPosition(swipper.current.scrollLeft - swipper.current.clientWidth)
            }else{
                setScrollRightEnable(true)
                setScrollLeftEnable(false)
                setScrolPosition(0)
            }
       }
    }

    const scrolRight = ()=>{
        if(swipper.current){
            if((swipper.current.clientWidth + swipper.current.scrollLeft) < swipper.current.scrollWidth){
                setScrolPosition(swipper.current.scrollLeft + swipper.current.clientWidth)
            }else{
                setScrollRightEnable(false)
                setScrollLeftEnable(true)
                setScrolPosition(swipper.current.scrollWidth)
            }
        }
    }

  return <Container>
        <div className="display">
            {!nodesc ? <div className="display-head">
                <div className="title">
                    <Typography variant="h5">{title}</Typography>
                </div>
                <div className="link">
                    <Link to={link}>Tout aficher</Link>
                </div>
            </div>  : ""}      
            {wrap ? <ul className="categorys-content" style={{flexWrap: "wrap"}}>
                {children}
            </ul> 
            : <div className="displayContainer">
                {scrollable ? <><div className={`arrow arrow-left ${scrollLeftEnable ? "" : "disabled"}`} onClick={scrollLeft}>
                      <ChevronLeftOutlined />
                  </div><div className={`arrow arrow-right  ${scrollRightEnable ? "" : "disabled"}`} onClick={scrolRight}>
                          <ChevronRightOutlined />
                      </div></>
                : ""}
                <div className="categorys-content horizontall" style={{flexWrap: "nowrap"}} ref={!wrap ? swipper : swipper2}>
                    {children}
                </div>
 
            </div>}
        </div>
    </Container>
}

export default Display;
