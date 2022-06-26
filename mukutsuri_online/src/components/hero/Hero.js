import React from "react";
import { Link } from "react-router-dom";
import Categories from "../categories/Categories";

function Hero() {
  return (
    <>
      <div className="px-0 py-5 my-0 text-center hero">
        <h1 className="display-2 fw-bold lh-1 mb-3">Mukutsuri Swimsuits</h1>
        <div class="col-lg-6 mx-auto">
          <p className="lead">
            Summer time all year round, you just gotta dress right.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/products">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Shop
              </button>
            </Link>
            <a
              href="#collections"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Collections
            </a>
          </div>
        </div>
      </div>
      <div
        id="#categories"
        className="row flex-lg-row-reverse align-items-center g-5 py-5"
      >
        {/* <Categories /> */}
      </div>
    </>
  );
}

export default Hero;
