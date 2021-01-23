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
  completeButton: {
    background: "green",
    border: "1px solid white",
    color: "black",
  },
};

export default function SingleItem({ text, index, id, completed }) {
  const { deleteItem, completeItem } = useListItemState();

  return (
    <div style={styles.item}>
      <div>
        {index}. {text}
      </div>
      {completed && (
        <button style={styles.deleteButton} onClick={() => deleteItem(id)}>
          Delete
        </button>
      )}
      {!completed && (
        <button style={styles.completeButton} onClick={() => completeItem(id)}>
          Mark Complete
        </button>
      )}
    </div>
  );
}
