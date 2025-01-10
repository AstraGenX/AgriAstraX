import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="row headingf">
        <div className="col-lg-12">
          <div className="future-look">
            <img src="/mainlogo.png" className="log" />
            <Link href="/Camera">
              <img src="/scanme.png" className="scanbtn" id="scan" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
