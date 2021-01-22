import React from "react";
import ListsContainer from "./components/ListsContainer";
import { Link } from "@reach/router";
import styled from "styled-components";

const Linked = styled.a`
  color: teal;
  transition: color 0.2s;
  &:hover {
    color: white;
  }
`;

export default function MyLists() {
  return (
    <div>
      <div style={{ fontSize: "30px", color: "white", textAlign: "left" }}>
        <Link to="/">
          <Linked>Go Back</Linked>
        </Link>
      </div>
      <ListsContainer />
    </div>
  );
}
