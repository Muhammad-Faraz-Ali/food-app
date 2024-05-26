import React, { Suspense } from "react";

import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All meals",
  description: "Delicious meals shared by our vibrant community",
};

async function Meals() {
  //RSC
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you </span>
        </h1>
        <p>Choose your fav recipe and meal</p>
        <p className={classes.cta}>
          <Link href="/meals/share"> Share your fav recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

export default MealsPage;
