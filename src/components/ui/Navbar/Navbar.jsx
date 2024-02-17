/* eslint-disable react/no-unknown-property */
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContextState from "../../../hooks/useContextState";
import Login from "../../modal/Login";
import UseTokenGenerator from "../../../hooks/UseTokenGenerator";
import UseEncryptData from "../../../hooks/UseEncryptData";
import { API, Settings } from "../../../api";
import { useState } from "react";
import useBalance from "../../../hooks/useBalance";
import { IoArrowBack } from "react-icons/io5";
import Warning from "../Notification/Warning";
const Navbar = () => {
  const [errorLogin, setErrorLogin] = useState("");
  const {
    setShowSidebar,
    showLogin,
    setShowLogin,
    token,
    setGetToken,
    isCheckedBonusToken,
  } = useContextState();
  const location = useLocation();
  const navigate = useNavigate();
  const loginName = localStorage.getItem("loginName");
  const { balanceData } = useBalance();
  const [showWarning, setShowWarning] = useState("");
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
          setGetToken((prev) => !prev);
        } else {
          setErrorLogin(data?.error);
        }
      });
  };

  const handleNavigateDeposit = () => {
    if (isCheckedBonusToken) {
      setShowWarning("Please switch to main wallet for deposit.");
    } else {
      navigate("/profile/deposit");
    }
  };

  return (
    <>
      {showWarning && (
        <Warning message={showWarning} setMessage={setShowWarning} />
      )}

      <div
        style={
          {
            //   position:'fixed',
            //   width:'100%',
            //   zIndex:'1040',
            //   minHeight:'auto',
            // boxSizing:'border-box'
          }
        }
        _ngcontent-ng-c943649379=""
        className="page-header"
      >
        <div _ngcontent-ng-c943649379="" _nghost-ng-c3243547741="">
          <div
            _ngcontent-ng-c3243547741=""
            className="header-wrapper top-header"
          >
            <div _ngcontent-ng-c3243547741="" className="logo">
              {location?.pathname === "/" ? (
                <span
                  onClick={() => setShowSidebar(true)}
                  _ngcontent-ng-c3243547741=""
                  role="img"
                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                  aria-hidden="true"
                  data-mat-icon-type="font"
                  style={{ cursor: "pointer", color: "white" }}
                >
                  menu
                </span>
              ) : (
                <IoArrowBack
                  size={25}
                  color="#fff"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    navigate(-1);
                  }}
                />
              )}
              <Link to="/">
                <img
                  _ngcontent-ng-c3243547741=""
                  alt="logo"
                  src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                  className="ng-star-inserted"
                />
              </Link>
            </div>
            {token ? (
              <div _ngcontent-ng-c3243547741="" className="header-right-cont">
                <div
                  _ngcontent-ng-c3243547741=""
                  className="loggedIn ng-star-inserted"
                >
                  <div _ngcontent-ng-c3243547741="" className="bal-cont">
                    <div
                      _ngcontent-ng-c3243547741=""
                      className="bal-amount show-bal"
                    >
                      <span
                        style={{ color: "white", fontSize: "10px" }}
                        _ngcontent-ng-c3243547741=""
                      >
                        {isCheckedBonusToken ? "Bonus" : "Bal"}
                      </span>
                      <p _ngcontent-ng-c3243547741="">
                        {balanceData?.creditLimit}
                      </p>
                    </div>
                    <div
                      _ngcontent-ng-c3243547741=""
                      className="bal-amount exp-bal"
                    >
                      <span
                        style={{ color: "white", fontSize: "10px" }}
                        _ngcontent-ng-c3243547741=""
                      >
                        Exp
                      </span>
                      <p
                        style={{ width: "fit-content", paddingTop: "3px" }}
                        _ngcontent-ng-c3243547741=""
                      >
                        {balanceData?.deductedExposure}
                      </p>
                      <span
                        style={{ color: "white", fontSize: "10px" }}
                        _ngcontent-ng-c3243547741=""
                      >
                        {loginName}
                      </span>
                    </div>
                  </div>
           {
            Settings.deposit && (
              <button
              onClick={handleNavigateDeposit}
              _ngcontent-ng-c3243547741=""
              mat-flat-button=""
              className="btn deposit-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
              mat-ripple-loader-uninitialized=""
              mat-ripple-loader-class-name="mat-mdc-button-ripple"
            >
              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
              <span className="mdc-button__label"> Deposit </span>
              <span className="mat-mdc-focus-indicator"></span>
              <span className="mat-mdc-button-touch-target"></span>
            </button>
            )
           }
                </div>
              </div>
            ) : (
              <div _ngcontent-ng-c3243547741="" className="header-right-cont">
                <div
                  _ngcontent-ng-c3243547741=""
                  className="not-loggedIn ng-star-inserted"
                >
                  <button
                    onClick={() => setShowLogin(true)}
                    _ngcontent-ng-c3243547741=""
                    mat-flat-button=""
                    className="btn dark-outlined-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span className="mdc-button__label">Login</span>
                    <span className="mat-mdc-focus-indicator"></span>
                    <span className="mat-mdc-button-touch-target"></span>
                    <span className="mat-ripple mat-mdc-button-ripple"></span>
                  </button>
                {
                  Settings.register && (
                    <button
                    _ngcontent-ng-c3243547741=""
                    mat-flat-button=""
                    className="btn dark-outlined-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span className="mdc-button__label">Register</span>
                    <span className="mat-mdc-focus-indicator"></span>
                    <span className="mat-mdc-button-touch-target"></span>
                    <span className="mat-ripple mat-mdc-button-ripple"></span>
                  </button>
                  )
                }

             {
              Settings.demoLogin && (
                <button
                onClick={loginWithDemo}
                _ngcontent-ng-c3243547741=""
                mat-flat-button=""
                className="btn dark-outlined-btn demo-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                mat-ripple-loader-class-name="mat-mdc-button-ripple"
              >
                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                <span className="mdc-button__label">Demo ID</span>
                <span className="mat-mdc-focus-indicator"></span>
                <span className="mat-mdc-button-touch-target"></span>
                <span className="mat-ripple mat-mdc-button-ripple"></span>
              </button>
              )
             }
                </div>
              </div>
            )}
          </div>
        </div>
        {loginName === "demo" && (
          <div _ngcontent-ng-c943649379="" _nghost-ng-c3660323651="">
            <div
              _ngcontent-ng-c3660323651=""
              className="demoid-marquee bottom ng-star-inserted"
            >
              <marquee
                _ngcontent-ng-c3660323651=""
                width="100%"
                direction="left"
                height="auto"
                scrollamount="5"
                loop=""
              >
                This is a Demo ID (to buy Mercedes play with real money)
              </marquee>

              <p _ngcontent-ng-c3660323651="" className="marquee">
                This is a Demo ID (to buy Mercedes play with real money)
              </p>
            </div>
          </div>
        )}
      </div>
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          errorLogin={errorLogin}
          setErrorLogin={setErrorLogin}
          setGetToken={setGetToken}
        />
      )}
    </>
  );
};

export default Navbar;
