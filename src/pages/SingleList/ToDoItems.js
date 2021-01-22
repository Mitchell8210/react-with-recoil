import React from "react";
import SingleItem from "./SingleItem";

const styles = {
  items: {
    marginBottom: 50,
    padding: 5,
  },
};

export default function ToDoItems({ items }) {
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
