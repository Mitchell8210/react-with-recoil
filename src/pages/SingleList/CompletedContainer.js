import React from "react";
import styled from "styled-components";
import CompletedItems from "./CompletedItems";

const Container = styled.div`
  border: 5px solid teal;
  margin-top: 50px;
  height: 200px;
  overflow: auto;
`;

const CompletedContainer = ({ items }) => {
  return (
    <Container>
      <CompletedItems items={items} />
    </Container>
  );
};

export default CompletedContainer;
