import React from "react";
import { useRecoilValue } from "recoil";
import { listItemSelector } from "../state/ListItemState";
import SingleItem from "./SingleItem";

const styles = {
  items: {
    marginBottom: 50,
    padding: 5,
  },
};

export default function ListItem() {
  const items = useRecoilValue(listItemSelector);

  console.log("ITEMS", items);
  return (
    <div style={styles.items}>
      <h1>To do list</h1>
      {items.length > 0 &&
        items.map((item, index) => (
          <div key={`list-item ${index + 1}`}>
            <SingleItem text={item.text} index={index + 1} id={item.id} />
          </div>
        ))}
    </div>
  );
}