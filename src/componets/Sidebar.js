import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="container">
        <div className="sidebar">
          <nav>
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="/intro">Divine Intro</Link>
              </li>
              <li>
                <Link to="/contro">Contribution in whole world</Link>
              </li>
              <li>
                <Link to="/pastimes">Pastimes</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
