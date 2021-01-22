import React from "react";
import { useTextFieldState, useListItemState } from "../../state/CustomHooks";

const styles = {
  textArea: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
  },
  button: {
    background: "black",
    color: "white",
    fontSize: 15,
    textTransform: "uppercase",
    border: "1px solid white",
    marginTop: 10,
  },
};

export default function TextField({ listId }) {
  const { createItem } = useListItemState();
  const { text, setText } = useTextFieldState();

  const handleTextChange = (value) => {
    setText(value);
  };

  return (
    <div>
      <label htmlFor="todo" />
      <div style={styles.textArea}>
        <textarea
          name="todo"
          rows="10"
          maxCols="50"
          value={text}
          maxLength={140}
          onChange={(e) => handleTextChange(e.target.value)}
        />
        <button
          onClick={() => {
            createItem(text, listId);
            setText("");
          }}
          style={styles.button}
        >
          Create List Item
        </button>
      </div>
    </div>
  );
}
