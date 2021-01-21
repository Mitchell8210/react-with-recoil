import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Background = styled.div`
  background: url("https://images.unsplash.com/photo-1516410529446-2c777cb7366d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3334&q=80");
  height: 100vh;
  background-size: cover;
  background-position: 50% 70%;
`;

const Content = styled.div`
  color: white;
`;
const Message = styled.h1`
  margin: 0;
  position: absolute;
  bottom: 100px;
  left: 0px;
  right: 0px;
  font-size: 40px;
`;

const Linked = styled.div`
  color: teal;
  text-align: left;
  width: 
  transition: color 0.2s;
  font-size: 30px;
  &:hover {
    color: white;
  }
`;

export default function About() {
  return (
    <Background>
      <Content>
        <Link to="/">
          <Linked>Back</Linked>
        </Link>
        <Message>
          The road that lies ahead is the one that offers opportunity.
        </Message>
      </Content>
    </Background>
  );
}
