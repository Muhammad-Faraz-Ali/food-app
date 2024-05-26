"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

//All the functions below this directive will be server actions

function isInvalidText(text) {
  return !text || text.trim() === "";
}
export async function shareMeal(prevState, formData) {
  //"use server"; //No need here

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    //Server-side input validation
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    //throw new Error("Invalid input");//Throwing error
    return {
      //returning response-obj
      //It's a SERIALIZED object, which means it, shouldn't include any methods because those would get lost while being sent to the client.
      //But any simple values like strings, numbers, nested objects or nested arrays, those values all work.
      message: "Invalid input",
    };
  }
  await saveMeal(meal);
  revalidatePath("/meals"); //Revalidate the given path data/component, dont use cached data/comp
  redirect("/meals");
}
