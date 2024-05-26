"use client"; //Must be a client component
import React from "react";

function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Failed to create meal</p>
    </main>
  );
}

export default Error;
