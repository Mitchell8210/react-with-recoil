import { atom, useRecoilState } from "recoil";

const listState = atom({
  key: "listState",
  default: [],
});

// random id generator -- to be replaced with database id or uuid
const random = () => Math.floor(Math.random() * 10000000000);

const useListState = () => {
  const [lists, setLists] = useRecoilState(listState);

  const createList = (title) => {
    const list = {
      title,
      id: `${title}${random()}`,
      selected: false,
    };
    setLists((lists) => [...lists, list]);
  };

  const deleteList = (id) => {
    setLists((lists) => lists.filter((item) => item.id !== id));
  };

  const selectList = (id) => {
    const listToSelect = lists.find((list) => list.id === id);
    listToSelect.selected = true;
    setLists((lists) => [...lists, listToSelect]);
  };
  return { createList, deleteList, selectList, lists };
};

export { useListState };
