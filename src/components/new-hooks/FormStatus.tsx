"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import TextInput from "../TextInput";

function Submit() {
  const status = useFormStatus();
  return (
    <button disabled={status.pending} type="submit">
      Submit
    </button>
  );
}

async function submitUser(
  prevState: Record<string, string>,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  console.log({ name, email });
  return {
    name,
    email,
  };
}

const initialState = {
  name: "",
  email: "",
};

export default function FormStatus() {
  const [state, formAction, pending] = useActionState(submitUser, initialState);

  return (
    <form action={formAction}>
      <TextInput id="name" label="Name" />
      <TextInput id="email" label="Email" />
      <Submit />
    </form>
  );
}
