import React from "react";
import { useListState } from "../../../state/CustomHooks";
import styled from "styled-components";
import { useNavigate } from "@reach/router";

const Container = styled.div`
  padding: 15;
  text-align: left;
  border: 1px solid white;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5;
  &:hover {
    cursor: pointer;
  }
`;

const Text = styled.div`
  font-size: 25px;
  padding-left: 10px;
`;

const DeleteButton = styled.button`
  background: red;
  border: 1px solid white;
  color: black;
  font-size: 18px;
  margin: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export default function ListItem(props) {
  const navigate = useNavigate();
  const { item } = props;
  const { deleteList } = useListState();

  return (
    <Container onClick={() => navigate(`/single-list/${item.id}`)}>
      <Text>{item.title}</Text>
      <DeleteButton onClick={() => deleteList(item.id)}>Delete</DeleteButton>
    </Container>
  );
}
