"use client";
import SideBar from "@/components/SideBar";
import DisplayCont from "@/components/DisplayCont";
import styled from "styled-components";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Container>
        <SideBar />
        <DisplayCont />
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 100%;
  position: fixed;
`;
