import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pages, contact } from "../utils/const";

const Nav = ({modelOn}) => {
  const [linksShowing, setLinksShowing] = useState(false);
  const windowCheck = () => {
    if (window.innerWidth < 770) {
      setLinksShowing(false);
    }else if (window.innerWidth >= 770) {
      setLinksShowing(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => windowCheck());
    windowCheck();
  }, []);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-head">
            <img src="" alt = "" className="logo"/>
            <h2 className="companyName">Company Name</h2>
          <button className="hamburger" onClick={() => setLinksShowing(!linksShowing)}>
          {/*put something here*/}jj
          </button>
        </div>
        <div className={`pageDiv ${linksShowing && "showing"}`}>
          <ul className="pages">
            {pages
              .filter((pageLink) => pageLink.text !== "Error")
              .map((pageLink) => {
                return (
                  <li key={pageLink.id} className="pageLink">
                    <Link to={pageLink.path}>{pageLink.text}</Link>
                  </li>
                );
              })}
              <li key={5}>
                <Link to="/cart" onClick={modelOn}>Totals</Link>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
