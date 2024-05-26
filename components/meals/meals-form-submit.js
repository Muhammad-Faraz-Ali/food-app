"use client";
import React from "react";
import { useFormStatus } from "react-dom";

function MealsFormSubmit() {
  const { pending } = useFormStatus(); //Managing the form status wih useFormStatus hook
  return (
    <button disabled={pending}>
      {pending ? "Submitting...." : "Share Meal"}
    </button>
  );
}

export default MealsFormSubmit;
