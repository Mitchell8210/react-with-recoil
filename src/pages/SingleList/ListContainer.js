import React from "react";
import CharacterCounter from "./CharacterCounter";
import { useListItemState } from "../../state/CustomHooks";
import TextField from "./TextField";
import ToDoItems from "./ToDoItems";
import CompletedContainer from "./CompletedContainer";
import styled from "styled-components";
import { useParams } from "@reach/router";

const Container = styled.div`
  max-width: 1050px;
  margin: auto;
`;

export default function ListContainer() {
  const params = useParams();
  const { id } = params;
  console.log("ID", id);
  const { items } = useListItemState();
  console.log("ITEMS", items);
  const listItems = items.filter((item) => item.inList === id);

  return (
    <Container>
      <CharacterCounter />
      <TextField listId={id} />
      <ToDoItems items={listItems} />
      <CompletedContainer items={listItems} />
    </Container>
  );
}
