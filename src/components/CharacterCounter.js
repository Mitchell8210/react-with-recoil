import React from "react";
import { useTextFieldState } from "../state/CustomHooks";
export default function CharacterCounter() {
  const { text } = useTextFieldState();

  return <div>Character Count: {text.length}/140</div>;
}
