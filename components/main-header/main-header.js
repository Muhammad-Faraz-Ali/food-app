import Link from "next/link";
import React from "react";

import logoImg from "@/assets/logo.png"; //logoImg=>obj=>pth prop will be stored in logoImg.src
//console.log("index logoImg", logoImg);

import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import Navlink from "./nav-link";

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate of food" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
