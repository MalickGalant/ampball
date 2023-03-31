import React from "react";
import TodoTextInput from "./todo-text-input";

const Header = ({ onNewItem }: { onNewItem: (text: string) => void }) => (
  <header className="header">
    <h1>Daily Basis</h1>
    <TodoTextInput
      initial=""
      placeholder="Plan your events?"
      onSubmit={onNewItem}
    />
  </header>
);

export default Header;
