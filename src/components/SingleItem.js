import React from "react";
import { listItemState } from "../state/ListItemState";
import { useSetRecoilState } from "recoil";
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
  const setItems = useSetRecoilState(listItemState);
  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

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
