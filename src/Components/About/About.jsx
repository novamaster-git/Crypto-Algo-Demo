import React, { Fragment } from "react";
const About = () => {
  return (
    <Fragment>
      <div className="container d-flex flex-column align-items-center">
        <div className="card w-50 mt-5">
          <div className="card-header">Algorithms List used in this Tool</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">RSA Algorithm</li>
            <li class="list-group-item">Hash Algorithm</li>
            <li class="list-group-item">AES Algorithm</li>
          </ul>
        </div>
        <div className="card w-50 mt-5">
          <div className="card-header">About The Creator</div>
          <div className="d-flex flex-column align-items-center">
            <h3 className="mt-1 ">Nova_Master</h3>
            <div className="w-100 mb-3 mt-3 d-flex flex-row justify-content-sm-around">
              <a
                rel="noreferrer"
                className="btn btn-primary"
                href="https://www.linkedin.com/in/soumen-samanta/"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                rel="noreferrer"
                className="btn btn-dark"
                href="https://github.com/novamaster-git"
                target="_blank"
              >
                GitHub
              </a>
              <a
                rel="noreferrer"
                className="btn btn-warning"
                href="https://codepen.io/nova_master"
                target="_blank"
              >
                Codepen
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
