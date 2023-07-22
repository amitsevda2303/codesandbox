import React from "react";

export default function Navbar() {
  return (
    <navbar className="Navbar">
      <div className="logo">
        <a href="/">Company.</a>
      </div>

      <div className="menu">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Companies</a>
        </li>
        <li>
          <a href="/">Contact us</a>
        </li>
      </div>
    </navbar>
  );
}
