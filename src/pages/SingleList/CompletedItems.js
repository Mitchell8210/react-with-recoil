import React from "react";
import SingleItem from "./SingleItem";
import styled from "styled-components";

const Header = styled.div`
  font-size: 30px;
  color: white;
  background: #111111;
  border-bottom: 1px solid white;
`;

export default function CompletedItems({ items }) {
  const filteredItems = items.filter((item) => item.completed === true);
  return (
    <div>
      <Header>COMPLETED ITEMS</Header>
      {filteredItems.map((item, index) => (
        <SingleItem
          text={item.text}
          index={index + 1}
          id={item.id}
          completed={item.completed}
        />
      ))}
    </div>
  );
}
