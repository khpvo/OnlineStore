import React from "react";
import Logo from "../../logo.svg";
function CheckOut() {
  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2 className="display-5">
            Thank you for shopping at <strong>Mukutsuri Swimsuits</strong>{" "}
          </h2>
          <p className="lead">
            Please provide your details and we shall contact you when your order
            is ready.
          </p>
        </div>

        <div className="row g-5">
          <div className="col-md-6 col-lg-6 mx-auto">
            <h4 className="mb-3">Shipping address</h4>
            <form className="needs-validation" novalidate>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label for="firstName" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>

                <div className="col-sm-6">
                  <label for="lastName" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder=""
                    value=""
                    required
                  />
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>

                <div className="col-12">
                  <label for="username" className="form-label">
                    Username
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required
                    />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div>

                <div className="col-12">
                  <label for="email" className="form-label">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div className="col-12">
                  <label for="address" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="+256787728635"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your phone number.
                  </div>
                </div>

                <div className="col-12">
                  <label for="address2" className="form-label">
                    Shipping Address <span className="text-muted"></span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Apartment or suite"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>

                <div className="col-md-4">
                  <label for="country" className="form-label">
                    Country
                  </label>
                  <select className="form-select" id="country" required>
                    <option value="">Choose...</option>
                    <option>Uganda</option>
                    <option>Kenya</option>
                    <option>Tanzania</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid country.
                  </div>
                </div>

                <div className="col-md-4">
                  <label for="state" className="form-label">
                    State
                  </label>
                  <select className="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>California</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid state.
                  </div>
                </div>

                <div className="col-md-4">
                  <label for="state" className="form-label">
                    Street
                  </label>
                  <select className="form-select" id="state" required>
                    <option value="">Choose...</option>
                    <option>Main Street</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid street.
                  </div>
                </div>
              </div>

              <hr className="my-4" />

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="save-info"
                />
                <label className="form-check-label" for="save-info">
                  Save this information for next time
                </label>
              </div>
              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Continue to checkout
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CheckOut;
