/* eslint-disable react/no-unknown-property */
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContextState from "../../../hooks/useContextState";
import Login from "../../modal/Login";
import UseTokenGenerator from "../../../hooks/UseTokenGenerator";
import UseEncryptData from "../../../hooks/UseEncryptData";
import { API, Settings } from "../../../api";
import { useEffect, useState } from "react";
import useBalance from "../../../hooks/useBalance";
import { IoArrowBack } from "react-icons/io5";
import Warning from "../Notification/Warning";
import GetOTP from "../../modal/signup/GetOTP";
import Registration from "../../modal/signup/Registration";
import Success from "../Notification/Success";
import GetForgotOTP from "../../modal/forgotPassword/GetForgotOTP";
import ForgotPassword from "../../modal/forgotPassword/ForgotPassword";
import AppPopup from "./AppPopUp";
// import { AndroidView } from "react-device-detect";
const Navbar = () => {
  const [orderId, setOrderId] = useState({
    orderId: "",
    otpMethod: "",
  });
  const [errorLogin, setErrorLogin] = useState("");
  const {
    setShowSidebar,
    showLogin,
    setShowLogin,
    token,
    setGetToken,
    isCheckedBonusToken,
    logo,
    setSportsType,
    setSHowDeposit,
    showOTP,
    setShowOTP,
  } = useContextState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgotOTP, setShowForgotOTP] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const navigate = useNavigate();
  const loginName = localStorage.getItem("loginName");
  /* Get balance data */
  const { balanceData } = useBalance();
  const [showWarning, setShowWarning] = useState("");
  const [showRegister, setShowRegister] = useState(false);

  const [mobileNo, setMobileNo] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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
          /* Get current token from locale storage */
          setGetToken((prev) => !prev);
        } else {
          /* set  error message during login failed   */
          setErrorLogin(data?.error);
        }
      });
  };

  /* Handle navigate deposit page */
  const handleNavigateDeposit = () => {
    /* If checked bonus token true then set warning message */
    if (isCheckedBonusToken) {
      setShowWarning("Please switch to main wallet for deposit.");
    } else {
      setSHowDeposit(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   const expiryTime = localStorage.getItem("installPromptExpiryTime");
  //   const currentTime = new Date().getTime();
  //   if (!expiryTime || currentTime > expiryTime) {
  //     localStorage.removeItem("installPromptExpiryTime");
  //     setIsModalOpen(true);
  //   }
  // }, [isModalOpen]);

  useEffect(() => {
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      localStorage.setItem("closePopupForForever", true);
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if (!expiryTime || currentTime > expiryTime) {
          setIsModalOpen(true);
        }
      }
    }
  }, [windowWidth, isModalOpen, location?.state?.pathname, location.pathname]);

  return (
    <>
      {Settings?.apkLink && isModalOpen && windowWidth < 550 && (
        <AppPopup setIsModalOpen={setIsModalOpen} />
      )}
      {/* Show warning message */}
      {showWarning && (
        <Warning message={showWarning} setMessage={setShowWarning} />
      )}

      <div _ngcontent-ng-c943649379="" className="page-header">
        <div _ngcontent-ng-c943649379="" _nghost-ng-c3243547741="">
          <div
            _ngcontent-ng-c3243547741=""
            className="header-wrapper top-header"
          >
            <div _ngcontent-ng-c3243547741="" className="logo">
              {/* Showing sidebar button in only home page */}
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
                  /* Navigate back */
                  onClick={() => {
                    navigate(-1);
                  }}
                />
              )}
              <Link
                /* Set sports type to inplay */
                onClick={() => setSportsType(0)}
                to="/"
              >
                <img
                  style={{
                    height: `${Settings.logoHeight}px`,
                    width: `${Settings.logoWidth}px`,
                    objectFit: "contain",
                  }}
                  _ngcontent-ng-c3243547741=""
                  alt="logo"
                  src={logo}
                  className="ng-star-inserted"
                />
              </Link>
            </div>
            {/* If token available then showing below html else----> */}
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
                        style={{ width: "fit-content" }}
                        _ngcontent-ng-c3243547741=""
                      >
                        {balanceData?.deductedExposure}
                      </p>
                      {/* <span
                        style={{ color: "white", fontSize: "10px" }}
                        _ngcontent-ng-c3243547741=""
                      >
                        {loginName}
                      </span> */}
                    </div>
                  </div>
                  {/* If deposit true in settings then showing deposit button  */}
                  {Settings.deposit && (
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
                  )}
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
                  {/* If registration true in settings then showing registration button  */}
                  {Settings.register && (
                    <button
                      onClick={() => setShowOTP(true)}
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
                  )}
                  {/* If demo login true in settings then showing demologin button  */}
                  {Settings.demoLogin && (
                    <button
                      onClick={loginWithDemo}
                      _ngcontent-ng-c3243547741=""
                      mat-flat-button=""
                      className="btn dark-outlined-btn demo-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base primary-button"
                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                      <span className="mdc-button__label">Demo ID</span>
                      <span className="mat-mdc-focus-indicator"></span>
                      <span className="mat-mdc-button-touch-target"></span>
                      <span className="mat-ripple mat-mdc-button-ripple"></span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Render html in condition */}
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
      {/* Login modal */}
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          errorLogin={errorLogin}
          setErrorLogin={setErrorLogin}
          setGetToken={setGetToken}
          setShowForgotOTP={setShowForgotOTP}
        />
      )}
      {/* forgot password */}
      {showForgotOTP && (
        <GetForgotOTP
          setOrderId={setOrderId}
          setShowForgotOTP={setShowForgotOTP}
          setShowForgotPassword={setShowForgotPassword}
          mobileNo={mobileNo}
          setMobileNo={setMobileNo}
        />
      )}
      {showForgotPassword && (
        <ForgotPassword
          orderId={orderId}
          setShowForgotPassword={setShowForgotPassword}
          setShowForgotOTP={setShowForgotOTP}
          mobileNo={mobileNo}
          setErrMsg={setErrMsg}
          setSuccessMsg={setSuccessMsg}
        />
      )}
      {/* Opt register modal */}
      {showOTP && (
        <GetOTP
          setOrderId={setOrderId}
          setShowOTP={setShowOTP}
          setShowRegister={setShowRegister}
          mobileNo={mobileNo}
          setMobileNo={setMobileNo}
        />
      )}
      {/* Registration modal */}
      {showRegister && (
        <Registration
          orderId={orderId}
          setShowRegister={setShowRegister}
          setShowOTP={setShowOTP}
          mobileNo={mobileNo}
          setErrRegister={setErrMsg}
          setSuccessRegister={setSuccessMsg}
        />
      )}
      {/* Success message after registration */}
      {successMsg && (
        <Success
          message={successMsg}
          setMessage={setSuccessMsg}
          success={true}
        />
      )}
      {/* Error message after failed registration */}
      {errMsg && (
        <Success message={errMsg} setMessage={setErrMsg} success={false} />
      )}
    </>
  );
};

export default Navbar;
