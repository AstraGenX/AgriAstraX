import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <>
      <div className="btnn">
        <div className="foot-btn">
          <div className="com">
            <a href="https://google.com/">
              <i className="fa-solid fa-virus ic"></i>
            </a>
            <h3>Disease</h3>
          </div>
          <div className="com">
            <i className="fa-solid fa-suitcase-medical ic"></i>
            <h3>Treatment</h3>
          </div>
          <div className="com">
            <Link href="/Weather">
              <i className="fa-solid fa-cloud ic"></i>
            </Link>
            <h3>Weather</h3>
          </div>
          <div className="com">
            <i className="fa-solid fa-chart-column ic"></i>
            <h3>Dashboard</h3>
          </div>
          <div className="com">
            <i className="fa-solid fa-helicopter ic"></i>
            <h3>Adv. Feature</h3>
          </div>
        </div>

        <p>
          All rights reserved © 2024 AstraGenX | Unauthorized reproduction or
          distribution of this material is a criminal offense | AgriAstraX is a
          proud member of the AstraGenX family.
        </p>
      </div>
    </>
  );
};

export default Button;
