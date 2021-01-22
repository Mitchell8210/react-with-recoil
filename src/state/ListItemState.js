import { atom, useRecoilState } from "recoil";

const listItemState = atom({
  key: "listItemState",
  default: [],
});

// random id generator -- to be replaced with database id or uuid
const random = () => Math.floor(Math.random() * 10000000000);

// custom hook to use for state management consolidation
const useListItemState = () => {
  // state setter function
  const [items, setItems] = useRecoilState(listItemState);

  const createItem = (text, listId) => {
    const newItem = {
      text,
      id: `${text}${random()}`,
      completed: false,
      inList: listId,
    };
    setItems((items) => [...items, newItem]);
  };

  const deleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const completeItem = (id) => {
    const itemToComplete = items.find((item) => item.id === id);
    itemToComplete.completed = true;
    setItems((items) => [...items, itemToComplete]);
  };

  return { items, setItems, createItem, completeItem, deleteItem };
};

export { useListItemState };
