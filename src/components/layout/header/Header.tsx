"use client";

import ColorButton from "@/components/shared/ColorButton";
import { rainbowColors } from "@/utils/contants";
import Link from "next/link";
import { FC, useState } from "react";

const Header: FC = () => {
  const [buttonColor, setButtonColor] = useState<string>("");
  const [fact, setFact] = useState<string>("A warm welcome!");
  const [textVisible, setTextVisible] = useState<boolean>(true);

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error("Ошибка при получении факта:", error);
    }
  };

  const onBtnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTextVisible(false);
    setFact("");
    fetchCatFact();
    const randomIndex = Math.floor(Math.random() * rainbowColors.length);
    setButtonColor(rainbowColors[randomIndex]);
  };

  return (
    <>
      {" "}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container px-lg-5">
          <Link href="#!" className="navbar-brand">
            Start Bootstrap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="#!" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#!" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold">{fact || "Loading fact..."}</h1>
              <p className={`fs-4  ${textVisible ? "" : "fade-out"}`}>
                Bootstrap utility classes are used to create this jumbotron
                since the old component has been removed from the framework. Why
                create custom CSS when you can use utilities?
              </p>
              <ColorButton buttonColor={buttonColor} onClick={onBtnClick} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
