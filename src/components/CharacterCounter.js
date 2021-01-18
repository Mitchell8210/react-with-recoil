import React from "react";
import { useRecoilValue } from "recoil";
import { textFieldState } from "../state/textFieldState";
export default function CharacterCounter() {
  const count = useRecoilValue(textFieldState);
  return <div>Character Count: {count.length}/140</div>;
}
