"use client";

import { useActionState } from "react";

const initialState = 0;

async function incrementCount(prevState: number, formData: FormData) {
  return prevState + 1;
}

export default function ActionState() {
  const [state, formAction, pending] = useActionState(
    incrementCount,
    initialState
  );

  if (pending) {
    return <p>Loading...</p>;
  }

  return (
    <form>
      <span>{state}</span>
      <button formAction={formAction}>+</button>
    </form>
  );
}
