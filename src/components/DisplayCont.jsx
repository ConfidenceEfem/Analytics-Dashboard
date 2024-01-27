"use client"
import Header from "./Header"
import DisplayBody from "./DisplayBody"
import styled from "styled-components"
import MobileNavBar from "./MobileNavBar"
import { useState } from "react"

const DisplayCont = () =>{

    const [toggle, setToggle] = useState(false)

    return (
        <Container>
            {
                toggle? 
            
            <MobileNavBar toggle={toggle} setToggle={setToggle}/> : null }
            <Header toggle={toggle} setToggle={setToggle}/>
            <DisplayBody/>
        </Container>
    )
}

export default DisplayCont

const Container = styled.div`
height:40px;
flex:1;
overflow-y: scroll;
  height: auto;
  padding-bottom: 30px;
  position: relative;
  @media screen and (max-width:950px){
    width: 95%;
    /* background-color: green; */
  }
`

