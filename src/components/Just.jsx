import React from "react";
import { useForm } from "react-hook-form";
import "react-bulma-components/dist/react-bulma-components.min.css";
import "../style/style.css";

function Just() {
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "onChange",
  });
  function onSubmit() {
    alert("form validation successful");
  }

  return (
    <div>
      <div className="columns">
        <div id="one" className="column is-half">
          <p id="pole" className="is-size-1 has-text-weight-bold">
            Learn to code by watching others
          </p>
          <p id="you" className="is-size-6">
            See how experienced developers solve problems
            <br />
            Watching scripted tutorials is great, but understanding how
            developers <br />
            think is invaluable.
          </p>
        </div>
        <div id="two" className="column is-half">
          <div id="three"> Try it free 7 days then $20/mo. thereafter</div>
          <div id="four">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="field">
                <div className="control">
                  <input
                    ref={register({
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    name="First"
                    className="input"
                    type="text"
                    placeholder="First Name"
                    style={{ borderColor: errors.First && "red" }}
                  />
                  {errors.First && errors.First.type === "required" && (
                    <small> First Name is required</small>
                  )}
                  {errors.First && errors.First.type === "minLength" && (
                    <small>First Name is too short </small>
                  )}
                  {errors.First && errors.First.type === "maxLength" && (
                    <small>First Name is too long </small>
                  )}
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    ref={register({
                      required: true,
                      minLength: 2,
                      maxLength: 20,
                    })}
                    name="Last"
                    className="input"
                    type="text"
                    placeholder=" Last Name"
                    style={{ borderColor: errors.Last && "red" }}
                  />
                  {errors.Last && errors.Last.type === "required" && (
                    <small> Last Name is required</small>
                  )}
                  {errors.Last && errors.Last.type === "minLength" && (
                    <small>Last Name is too short </small>
                  )}
                  {errors.Last && errors.Last.type === "maxLength" && (
                    <small>Last Name is too long </small>
                  )}
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <input
                    ref={register({
                      required: true,
                      minLength: 6,
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    })}
                    name="email"
                    className="input"
                    type="email"
                    placeholder="Email Address"
                    style={{ borderColor: errors.email && "red" }}
                  />
                  {errors.email && errors.email.type === "required" && (
                    <small> email is required</small>
                  )}
                  {errors.email && errors.email.type === "minLength" && (
                    <small>this is not an email</small>
                  )}
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    ref={register({
                      required: true,
                      minLength: 9,
                    })}
                    name="password"
                    className="input"
                    type="password"
                    placeholder="Password"
                    style={{ borderColor: errors.password && "red" }}
                  />
                  {errors.password && errors.password.type === "required" && (
                    <small> password is required</small>
                  )}
                  {errors.password && errors.password.type === "minLength" && (
                    <small>password is too short</small>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="field"
                disabled={formState.isSubmitting}
              >
                CLAIM YOUR FREE TRIAL
              </button>
            </form>

            <p className="yup">
              By clicking the button, you are agreeing to our{" "}
              <a href="klo">
                <strong>Terms and Services</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
      <footer>
        <p className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/beloshh">badanga ishak</a>.
        </p>
      </footer>
    </div>
  );
}

export default Just;
