"use server";

export async function create(formData: FormData) {
  const inputtedName = formData.get("firstName") as string;
  console.log("Action running: ", inputtedName);
}
