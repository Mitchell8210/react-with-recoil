import React from "react";
import { useListItemState } from "../../state/CustomHooks";

const styles = {
  item: {
    padding: 5,
    textAlign: "left",
    border: "1px solid white",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  deleteButton: {
    background: "red",
    border: "1px solid white",
    color: "black",
  },
};

export default function SingleItem({ text, index, id }) {
  const { deleteItem } = useListItemState();

  return (
    <div style={styles.item}>
      <div>
        {index}. {text}
      </div>
      <button style={styles.deleteButton} onClick={() => deleteItem(id)}>
        Delete
      </button>
    </div>
  );
}
