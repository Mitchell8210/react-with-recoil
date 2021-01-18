import { atom, selector } from "recoil";

const textFieldState = atom({
  key: "textFieldState",
  default: "",
});

const textFieldSelector = selector({
  key: "textFieldSelector",
  get: ({ get }) => {
    const text = get(textFieldState);
    return text;
  },
});

export { textFieldState, textFieldSelector };
