import { atom, useRecoilState } from "recoil";

const textFieldState = atom({
  key: "textFieldState",
  default: "",
});

const useTextFieldState = () => {
  const [text, setText] = useRecoilState(textFieldState);

  const handleTextChange = (value) => {
    setText(value);
  };

  return { text, setText, handleTextChange };
};

export { useTextFieldState };
