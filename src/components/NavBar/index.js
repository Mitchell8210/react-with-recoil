import React from "react";
import styled from "styled-components";
import NavBarItem from "./NavBarItem";

const Container = styled.div`
  background: #222222;
  height: 50px;
  display: flex;
  width: fit-content;
  padding: 5px;
  overflow: hidden;
  background-color: #333;
  position: fixed;
  top: 0;
`;

export default function NavBar() {
  return (
    <Container>
      <NavBarItem title="Home" path="/" />
      <NavBarItem title="MyLists" path="/my-lists" />
      <NavBarItem title="About" path="/about" />
      <NavBarItem title="place" path="/" />
    </Container>
  );
}
