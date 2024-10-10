import { useState } from "react";
import TextInput from "./TextInput";
import { create } from "../lib/actions";

export default function ActionExample() {
  const [name, setName] = useState("");

  async function formAction(formData: FormData) {
    const inputtedName = formData.get("firstName") as string;
    setName(inputtedName);
  }

  return (
    <>
      <form action={create}>
        <TextInput label="Name" id="firstName" />
        <button type="submit">Set Name</button>
      </form>
      <h1>Hello {name !== "" ? name : "stranger..."}</h1>
    </>
  );
}
