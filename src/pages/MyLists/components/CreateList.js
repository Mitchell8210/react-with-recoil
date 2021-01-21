import React, { useState } from "react";
import styled from "styled-components";
import { useListState } from "../../../state/CustomHooks";

const Container = styled.div`
  padding: 15;
  text-align: left;
  border-top: 1px solid white;
  background: black;
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5;
  &:hover {
    cursor: pointer;
  }
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
`;

const Input = styled.input`
  font-size: 20px;
  padding: 5px;
  outline: none;
  background: #333333;
  width: 90%;
  color: white;
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 5px;
`;

const Button = styled.button`
  font-size: 18px;
  margin: 5px;
  background-color: green;
  color: black;
`;

const Label = styled.label`
  font-size: 20px;

  color: white;
`;

export default function CreateList() {
  const [listName, setListName] = useState("");
  const { createList } = useListState();

  return (
    <Container>
      <InputContainer>
        <Label htmlFor="listName">Create new list</Label>
        <Input
          type="text"
          placeholder="List Name..."
          name="listName"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
      </InputContainer>
      <Button
        onClick={() => {
          createList(listName);
          setListName("");
        }}
      >
        Create
      </Button>
    </Container>
  );
}
