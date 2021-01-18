import { atom, selector } from "recoil";

const listItemState = atom({
  key: "listItemState",
  default: [],
});

const listItemSelector = selector({
  key: "listItemSelector",
  get: ({ get }) => {
    const list = get(listItemState);
    return list;
  },
});

export { listItemState, listItemSelector };
