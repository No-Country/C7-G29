import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [headerUp, setheaderUp] = useState(
    window.innerWidth < 800 ? false : true
  );

  const renderPoint = () => {
    if (window.innerWidth < 800) setheaderUp(false);
    else setheaderUp(true);
  };

  useEffect(() => {
    renderPoint();
    window.addEventListener("resize", renderPoint);
    return () => window.removeEventListener("resize", renderPoint);
  }, []);

  return (
    <div className="general-header">
      <div className="background-header">
        <section className="section-up">
          <h1 className="future-image">LOGO</h1>
          {headerUp ? (
            <div>
              <button className="header-login">
                <i>
                  <Link
                    to="/login"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Log In
                  </Link>
                </i>
              </button>
              <button className="header-signup">
                <i>
                  <Link
                    to="/register"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </i>
              </button>
            </div>
          ) : (
            <div>
              <button className="header-point">
                <i>...</i>
              </button>
            </div>
          )}
        </section>
        <section className="section-search">
          <h1 className="title-header">MockupPhoto</h1>
          <form className="form-header">
            <label className="label-header" htmlFor="search">
              The largest marketplace for free Mockups online
            </label>
            <input
              className="input-header"
              placeholder="🔍 Search image"
            ></input>
          </form>
        </section>
      </div>
    </div>
  );
}
