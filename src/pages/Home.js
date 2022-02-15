import React, { useState, useEffect } from "react";

import "./Home.scss";
import logoImg from "../images/logo/agencia-eplus-n-logo.png";
import Modal from "../components/Modal/Modal";

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div id="homepage">
      <header>
        <nav className="content">
          {(toggleMenu || screenWidth > 800) && (
            <div className="list-items">
              <ul className="list">
                <img src={logoImg} alt="Agencia e-plus" />
                <li className="items">Lorem Ipsum</li>
                <li className="items">Lorem Ipsum</li>
                <li className="items">Lorem Ipsum</li>
                <li className="items">Lorem Ipsum</li>
                <li className="items">Lorem Ipsum</li>
                <li className="items">Lorem Ipsum</li>
              </ul>
              <ul className="list-icons">
                <li className="items-icons">
                  <span className="material-icons">&#xe8b6;</span>
                </li>
                <li className="items-icons">
                  <span className="material-icons">&#xe7fd;</span>
                </li>
                <li className="items-icons dropdown">
                  <span
                    onClick={() =>
                      !isModalVisible
                        ? setIsModalVisible(true)
                        : setIsModalVisible(false)
                    }
                    className="material-icons"
                  >
                    &#xe8cc;
                  </span>
                  {isModalVisible ? (
                    <Modal
                      show={isModalVisible}
                      onClickOutside={() => setIsModalVisible(false)}
                    />
                  ) : null}
                </li>
              </ul>
            </div>
          )}
        </nav>
        <button onClick={toggleNav} className="btn">
          <span className="material-icons">&#xe8fe;</span>
        </button>
      </header>
      <main className="content"></main>
    </div>
  );
}
