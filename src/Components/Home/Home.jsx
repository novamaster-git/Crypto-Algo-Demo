import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  return (
    <Fragment>
      <section className="mt-5">
        <div className="container mt-5">
          <h2 className="text-center mt-5">
            Encryption/Decrypting algorithms&nbsp;
            <br />
            Demostration
          </h2>
          <p
            className="text-center"
            style={{ fontFamily: "Actor, sans-serif", letterSpacing: "1px" }}
          >
            <>
              This web app is developed to demonstrate&nbsp;different types of
              Key based&nbsp;Encryption/Decrypting algorithms
            </>
            <br />
          </p>
        </div>
        <div className="center-ms">
          <a className="btn btn-primary mx-2" role="button" href="/github">
            Github
          </a>
          <Link to="/about" className="btn btn-light mx-2" type="button">
            about
          </Link>
        </div>
      </section>
    </Fragment>
  );
};
export default Home;
