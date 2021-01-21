import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import CreateList from "./CreateList";
import { useListState } from "../../../state/CustomHooks";
import { Link } from "@reach/router";

const Container = styled.div`
  max-width: 500px;
  min-height: 200px;
  max-height: 400px;
  border: 10px solid teal;
  background: grey;
  position: relative;
  padding-bottom: 75px;
  overflow: hidden;
`;
const Title = styled.div`
  font-size: 25px;
  text-decoration: underline;
  padding: 5px;
  background: #222222;
  color: white;
`;

export default function ListContainer() {
  const { lists } = useListState();
  return (
    <Container>
      <Title>My Lists</Title>
      <div style={{ overflow: "auto", maxHeight: "330px" }}>
        {lists.map((item) => (
          <ListItem item={item} />
        ))}
      </div>
      <CreateList />
    </Container>
  );
}
