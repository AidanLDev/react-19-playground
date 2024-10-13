"use client";

import { useOptimistic } from "react";
import TextInput from "../TextInput";

const messages = ["Great news", "Oh what?", "Well dear..."];

export default function Optimistic() {
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage: string) => [...state, newMessage]
  );

  async function formAction(formData: FormData) {
    const message = formData.get("message") as string;
    addOptimisticMessage(message);
    messages.push(message);
  }

  return (
    <div>
      {optimisticMessages.map((message, idx) => (
        <div key={idx}>{message}</div>
      ))}
      <form action={formAction}>
        <TextInput id="message" label="Message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
