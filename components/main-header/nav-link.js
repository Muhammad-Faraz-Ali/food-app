"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import classes from "./nav-link.module.css";

function Navlink({ href, children }) {
  const path = usePathname();
  console.log("index pathName", path);
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

export default Navlink;
