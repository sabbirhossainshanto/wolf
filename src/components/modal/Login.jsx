/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { IoClose } from "react-icons/io5";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import UseEncryptData from "../../hooks/UseEncryptData";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import { API } from "../../api";
import Warning from "../ui/Notification/Warning";
const Login = ({ setShowLogin, setErrorLogin, errorLogin, setGetToken }) => {
  const { register, handleSubmit } = useForm();
  const loginRef = useRef();
  useCloseModalClickOutside(loginRef, () => {
    setShowLogin(false);
  });

  /* handle login user */
  const onSubmit = ({ username, password }) => {
    /* Random token generator */
    const generatedToken = UseTokenGenerator();
    const loginData = {
      username: username,
      password: password,
      token: generatedToken,
    };
    /* Encrypted the post data */
    const encryptedData = UseEncryptData(loginData);
    fetch(API.login, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          /* Set token to localeStorage */
          localStorage.setItem("token", data.result.token);
          /* Set login name to locale storage */
          localStorage.setItem("loginName", data.result.loginName);
          const buttonValue = JSON.stringify(data.result.buttonValue.game);
          /* set button value to locale storage */
          localStorage.setItem("buttonValue", buttonValue);
          const modal = [
            { banner: data?.result?.banner },
            { bannerTitle: data?.result?.bannerTitle },
          ];
          /* set modal picture to locale storage for the open modal in home page */
          localStorage.setItem("modal", JSON.stringify(modal));
          if (
            localStorage.getItem("token") &&
            localStorage.getItem("loginName") &&
            data?.result?.changePassword === false
          ) {
            setShowLogin(false);
            setGetToken((prev) => !prev);
          }
        } else {
          setErrorLogin(data?.error);
        }
      });
  };

  /* handle login demo user */
  const loginWithDemo = () => {
    /* Random token generator */
    const generatedToken = UseTokenGenerator();
    /* Encrypted the post data */
    const loginData = UseEncryptData({
      username: "demo",
      password: "",
      token: generatedToken,
    });
    fetch(API.login, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((res) => res.json())
      .then((data) => {
        /* Set token to localeStorage */
        localStorage.setItem("token", data.result.token);
        /* Set login name to locale storage */
        localStorage.setItem("loginName", data.result.loginName);
        /* set button value to locale storage */
        const buttonValue = JSON.stringify(data.result.buttonValue.game);
        /* set modal picture to locale storage for the open modal in home page */
        localStorage.setItem("buttonValue", buttonValue);
        const modal = [
          { banner: data?.result?.banner },
          { bannerTitle: data?.result?.bannerTitle },
        ];
        localStorage.setItem("modal", JSON.stringify(modal));
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("loginName") &&
          data?.result?.changePassword === false
        ) {
          setShowLogin(false);
          setGetToken((prev) => !prev);
        } else {
          setErrorLogin(data?.error);
        }
      });
  };

  return (
    <>
      <div className="cdk-overlay-container">
        <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
        <div
          className="cdk-global-overlay-wrapper"
          dir="ltr"
          style={{ justifyContent: "center", alignItems: "flex-end" }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.1 }}
            id="cdk-overlay-0"
            className="cdk-overlay-pane login-dialog"
            style={{
              width: "calc(100% - 30px)",
              minHeight: "320px",
              maxWidth: "500px",
              position: "static",
              marginBottom: "10px",
            }}
            ref={loginRef}
          >
            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            ></div>
            <div
              className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
              id="LoginComponent"
              role="dialog"
              aria-modal="true"
              // style="--mat-dialog-transition-duration: 150ms;"
            >
              <div className="mdc-dialog__container">
                <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                  <div _nghost-ng-c2806737617="" className="ng-star-inserted">
                    <div _ngcontent-ng-c2806737617="" className="main">
                      <div
                        _ngcontent-ng-c2806737617=""
                        className="container login-section"
                        style={{
                          backgroundImage:
                            'url("https://ss.manage63.com/bmk-wl/wl/wolf365/img/login-pattern.png")',
                        }}
                      >
                        <div
                          _ngcontent-ng-c2806737617=""
                          className="login-header-section"
                        >
                          <div _ngcontent-ng-c2806737617="" className="logo">
                            {" "}
                            <img
                              _ngcontent-ng-c2806737617=""
                              alt="logo"
                              src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                              className="ng-star-inserted"
                            />{" "}
                          </div>
                          <div
                            _ngcontent-ng-c2806737617=""
                            className="welcome-text"
                          >
                            <h2
                              _ngcontent-ng-c2806737617=""
                              className="notranslate"
                            >
                              Login{" "}
                            </h2>
                          </div>

                          <button
                            onClick={() => setShowLogin(false)}
                            _ngcontent-ng-c2806737617=""
                            mat-mini-fab=""
                            color="primary"
                            mat-dialog-close=""
                            aria-label="Login Dialog Close Button"
                            className="close-btn mdc-fab mdc-fab--mini mat-mdc-mini-fab mat-primary mat-mdc-button-base"
                            mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            type="button"
                            style={{
                              borderRadius: "50%",
                              fontSize: "30px",
                              height: "25px",
                              width: "25px",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            <IoClose
                              style={{
                                height: "100%",
                                width: "100%",
                                fontWeight: "700",
                              }}
                              size={30}
                            />
                          </button>
                        </div>
                        <div
                          _ngcontent-ng-c2806737617=""
                          className="body-section ng-star-inserted"
                        >
                          <form
                            onSubmit={handleSubmit(onSubmit)}
                            _ngcontent-ng-c2806737617=""
                            className="ng-untouched ng-pristine ng-invalid"
                          >
                            <div
                              _ngcontent-ng-c2806737617=""
                              className="login-form"
                            >
                              <p
                                _ngcontent-ng-c2806737617=""
                                className="form-title"
                              ></p>
                              <div
                                _ngcontent-ng-c2806737617=""
                                className="form-list"
                              >
                                <div
                                  _ngcontent-ng-c2806737617=""
                                  appearance="fill"
                                  className="mat-mdc-form-field mat-form-field example-full-width ng-tns-c1205077789-3 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted"
                                >
                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c1205077789-3 mdc-text-field--filled mdc-text-field--no-label">
                                    <div className="mat-mdc-form-field-focus-overlay ng-tns-c1205077789-3 ng-star-inserted"></div>
                                    <div className="mat-mdc-form-field-flex ng-tns-c1205077789-3">
                                      <div className="mat-mdc-form-field-infix ng-tns-c1205077789-3">
                                        {" "}
                                        <input
                                          {...register("username", {
                                            required: true,
                                          })}
                                          _ngcontent-ng-c28067376
                                          type="text"
                                          name="username"
                                          appnumericonly=""
                                          matinput=""
                                          placeholder="Username"
                                          formcontrolname="phone"
                                          className="mat-mdc-input-element ng-tns-c1205077789-3 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"
                                          id="mat-input-0"
                                          required=""
                                          aria-required="true"
                                        />
                                      </div>
                                    </div>

                                    <div
                                      matformfieldlineripple=""
                                      className="mdc-line-ripple ng-tns-c1205077789-3 mdc-line-ripple--deactivating ng-star-inserted"
                                    ></div>
                                  </div>
                                </div>
                              </div>

                              <div
                                _ngcontent-ng-c2806737617=""
                                className="form-list"
                              >
                                <div
                                  _ngcontent-ng-c2806737617=""
                                  appearance="fill"
                                  className="mat-mdc-form-field mat-form-field example-full-width ng-tns-c1205077789-3 mat-mdc-form-field-type-mat-input mat-form-field-appearance-fill mat-primary ng-untouched ng-pristine ng-invalid ng-star-inserted"
                                >
                                  <div className="mat-mdc-text-field-wrapper mdc-text-field ng-tns-c1205077789-3 mdc-text-field--filled mdc-text-field--no-label">
                                    <div className="mat-mdc-form-field-focus-overlay ng-tns-c1205077789-3 ng-star-inserted"></div>
                                    <div className="mat-mdc-form-field-flex ng-tns-c1205077789-3">
                                      <div className="mat-mdc-form-field-infix ng-tns-c1205077789-3">
                                        {" "}
                                        <input
                                          {...register("password", {
                                            required: true,
                                          })}
                                          _ngcontent-ng-c2806737617=""
                                          type="text"
                                          name="password"
                                          appnumericonly=""
                                          matinput=""
                                          placeholder="Password"
                                          formcontrolname="phone"
                                          className="mat-mdc-input-element ng-tns-c1205077789-3 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"
                                          id="mat-input-0"
                                          aria-required="true"
                                        />
                                      </div>
                                    </div>

                                    <div
                                      matformfieldlineripple=""
                                      className="mdc-line-ripple ng-tns-c1205077789-3 mdc-line-ripple--deactivating ng-star-inserted"
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              _ngcontent-ng-c2806737617=""
                              className="login-form"
                            >
                              <div
                                _ngcontent-ng-c2806737617=""
                                className="form-btn"
                              >
                                <button
                                  _ngcontent-ng-c2806737617=""
                                  type="submit"
                                  className="btn secondary-btn"
                                >
                                  Login
                                </button>
                                <p
                                  _ngcontent-ng-c2806737617=""
                                  className="separator ng-star-inserted"
                                >
                                  OR
                                </p>
                                <div
                                  _ngcontent-ng-c2806737617=""
                                  className="extra-btns"
                                >
                                  {" "}
                                  <button
                                    onClick={loginWithDemo}
                                    _ngcontent-ng-c2806737617=""
                                    type="button"
                                    className="btn secondary-btn ng-star-inserted"
                                  >
                                    Login with Demo ID
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            ></div>
          </motion.div>
        </div>
      </div>
      {errorLogin && (
        <Warning message={errorLogin} setMessage={setErrorLogin} />
      )}
    </>
  );
};

export default Login;