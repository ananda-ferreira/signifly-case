'use client';

import BlackButton from "./global/BlackButton";
import { useEditMode } from "./EditModeProvider";

export default function Header() {
  const { isEditMode, toggleEditMode } = useEditMode();

  return (
    <header>
      <h1>Signifly Foosball Championship</h1>
      <BlackButton handleOnClick={toggleEditMode}>
        {isEditMode ? "Exit Edit Mode" : "Admin Mode"}
      </BlackButton>
    </header>
  );
}
