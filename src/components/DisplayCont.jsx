"use client"
import Header from "./Header"
import DisplayBody from "./DisplayBody"
import styled from "styled-components"

const DisplayCont = () =>{
    return (
        <Container>
            <Header/>
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
`

const Text = styled.div`
    color: orange;

`