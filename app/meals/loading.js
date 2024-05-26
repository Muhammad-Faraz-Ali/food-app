import React from "react";

import classes from "./loading.module.css";

function LoadingPage() {
  return <p className={classes.loading}>Fetching meals...</p>;
}

export default LoadingPage;