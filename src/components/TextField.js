import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { textFieldState } from "../state/textFieldState";
import { listItemState } from "../state/ListItemState";

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

export default function TextField() {
  const [text, setText] = useRecoilState(textFieldState);
  const setItems = useSetRecoilState(listItemState);

  const handleTextChange = (value) => {
    setText(value);
  };
  const random = () => Math.floor(Math.random() * 10000000000);
  const submitToDo = () => {
    setItems((items) => [...items, { text, id: `${text}${random()}` }]);
    setText("");
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
        <button onClick={submitToDo} style={styles.button}>
          Create List Item
        </button>
      </div>
    </div>
  );
}
