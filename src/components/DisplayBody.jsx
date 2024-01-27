"use client";

import styled from "styled-components";
import SalesComp from "./bodyComponents/SalesComp";
import TotalComp from "./bodyComponents/TotalComp";
import OrdersComp from "./bodyComponents/OrdersComp";
import TopPlatform from "./bodyComponents/TopPlatform";
import icon from "../assets/icon.png"
import icon1 from "../assets/icon1.png"
import icon2 from "../assets/icon2.png"
import icon3 from "../assets/icon3.png"

const DisplayBody = () => {
  return (
    <Container>
      <Wrapper>
        <SalesComp />
        <TotalComp title="Total Order" value={"350"} img={icon}/>
        <TotalComp title="Total Refund" value={"270"} img={icon1}/>
        <TotalComp title="Average Sales" value={"1567"} img={icon2}/>
        <TotalComp title="Total Income" value={"$350.000"} img={icon3}/>
       
        <OrdersComp />
        <TopPlatform />
      </Wrapper>
    </Container>
  );
};

export default DisplayBody;

const Wrapper = styled.div`
width: 100%;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  gap: 20px;
  grid-auto-rows: minmax(120px, auto);
  height: auto;
  @media screen and (max-width:950px){
  display:flex;
  flex-direction: column;
  }
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  padding:  30px;
  padding-bottom: 0px;
  @media screen and (max-width:600px){
    padding:  15px;
  padding-bottom: 0px;
  }
  /* @media screen and (max-width:950px){
    width: 95%;
    background-color: red;
  } */
 
`;
