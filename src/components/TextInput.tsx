import React from "react";

interface ITextInput {
  id: string;
  label: string;
}

export default function TextInput({ id, label }: ITextInput) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input id={id} name={id} />
    </div>
  );
}
