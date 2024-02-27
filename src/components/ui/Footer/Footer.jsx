import { useLocation, useNavigate } from "react-router-dom";
import useContextState from "../../../hooks/useContextState";
import { handleLogOut } from "../../../utils/handleLogOut";
import MyMarket from "../../modal/MyMarket";
import { useState } from "react";
import useGetSocialLink from "../../../hooks/useGetSocialLink";

/* eslint-disable react/no-unknown-property */
const Footer = () => {
  const { socialLink } = useGetSocialLink();
  const location = useLocation();
  const navigate = useNavigate();
  const { setGetToken, token, setShowLogin, icon } = useContextState();
  const [showMyMarket, setShowMyMarket] = useState(false);
  /* Handle logout */
  const handleLogout = () => {
    /* Logout function */
    handleLogOut();
    /* Get updated token from local storage */
    setGetToken((prev) => !prev);
    /* Navigate home page */
    navigate("/");
  };

  /* on click whats app navigate in new tab */
  const navigateWhatsApp = () => {
    window.open(socialLink?.link, "_blank");
  };

  return (
    <>
      {/* My market modal */}
      {showMyMarket && <MyMarket setShowMyMarket={setShowMyMarket} />}
      {/* Render html based on path */}
      {!location?.pathname?.includes("/game-details") && (
        <div _ngcontent-ng-c943649379="" className="page-footer">
          {socialLink?.link && location.pathname === "/" && (
            <div
              onClick={navigateWhatsApp}
              _ngcontent-ng-c943649379=""
              className="floating-btns"
              style={{ cursor: "pointer" }}
            >
              <div
                _ngcontent-ng-c943649379=""
                className="btn-item ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" className="btn-wrap whatsapp">
                  <img
                    _ngcontent-ng-c943649379=""
                    alt="WhatsApp"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
                  />
                </div>
              </div>
            </div>
          )}
          {location?.pathname === "/profile" && token && (
            <div
              onClick={handleLogout}
              _ngcontent-ng-c2865632707=""
              className="action-btns ng-star-inserted"
            >
              <button
                _ngcontent-ng-c2865632707=""
                type="button"
                className="btn secondary-btn w-100"
              >
                Logout
              </button>
            </div>
          )}
          {location?.pathname === "/profile" && !token && (
            <div
              onClick={() => {
                setShowLogin(true);
              }}
              _ngcontent-ng-c2865632707=""
              className="action-btns ng-star-inserted"
            >
              <button
                _ngcontent-ng-c2865632707=""
                type="button"
                className="btn secondary-btn w-100"
              >
                Login
              </button>
            </div>
          )}

          <div _ngcontent-ng-c943649379="" _nghost-ng-c2125492905="">
            <div _ngcontent-ng-c2125492905="" className="tab-navigation">
              <button
                onClick={() => {
                  navigate("/");
                }}
                _ngcontent-ng-c2125492905=""
                mat-flat-button=""
                routerlink="/home"
                routerlinkactive="active-link"
                className={`home mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ${
                  location?.pathname === "/" ? "active-link" : ""
                }`}
                mat-ripple-loader-uninitialized=""
                mat-ripple-loader-class-name="mat-mdc-button-ripple"
              >
                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                <span className="mdc-button__label">
                  <img
                    _ngcontent-ng-c2125492905=""
                    src="/assets/img/transparent-img.svg"
                    alt="Tab Icon"
                    style={{
                      backgroundImage: `url(${icon})`,
                    }}
                  />
                  <p _ngcontent-ng-c2125492905="" className="notranslate">
                    Home
                  </p>{" "}
                </span>
                <span className="mat-mdc-focus-indicator"></span>
                <span className="mat-mdc-button-touch-target"></span>
              </button>

              <button
                onClick={() => setShowMyMarket(true)}
                _ngcontent-ng-c2125492905=""
                mat-flat-button=""
                className="market mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                mat-ripple-loader-uninitialized=""
                mat-ripple-loader-class-name="mat-mdc-button-ripple"
              >
                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                <span className="mdc-button__label">
                  <img
                    _ngcontent-ng-c2125492905=""
                    src="/assets/img/transparent-img.svg"
                    alt="Tab Icon"
                    style={{
                      backgroundImage: `url(${icon})`,
                    }}
                  />
                  <p _ngcontent-ng-c2125492905="" className="notranslate">
                    My Markets
                  </p>{" "}
                </span>
                <span className="mat-mdc-focus-indicator"></span>
                <span className="mat-mdc-button-touch-target"></span>
              </button>
              <button
                onClick={() => {
                  navigate("/passbook");
                }}
                _ngcontent-ng-c2125492905=""
                mat-flat-button=""
                routerlink="/passbook"
                routerlinkactive="active-link"
                className={`passbook mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted ${
                  location?.pathname === "/passbook" ? "active-link" : ""
                }`}
                mat-ripple-loader-uninitialized=""
                mat-ripple-loader-class-name="mat-mdc-button-ripple"
              >
                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                <span className="mdc-button__label">
                  <img
                    _ngcontent-ng-c2125492905=""
                    src="/assets/img/transparent-img.svg"
                    alt="Tab Icon"
                    style={{
                      backgroundImage: `url(${icon})`,
                    }}
                  />
                  <p _ngcontent-ng-c2125492905="" className="notranslate">
                    Passbook
                  </p>{" "}
                </span>
                <span className="mat-mdc-focus-indicator"></span>
                <span className="mat-mdc-button-touch-target"></span>
              </button>
              <button
                onClick={() => {
                  navigate("/profile");
                }}
                _ngcontent-ng-c2125492905=""
                mat-flat-button=""
                routerlink="/profile"
                routerlinkactive="active-link"
                className={`profile mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ${
                  location?.pathname === "/profile" ? "active-link" : ""
                }`}
                mat-ripple-loader-uninitialized=""
                mat-ripple-loader-class-name="mat-mdc-button-ripple"
              >
                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                <span className="mdc-button__label">
                  <img
                    _ngcontent-ng-c2125492905=""
                    src="/assets/img/transparent-img.svg"
                    alt="Tab Icon"
                    style={{
                      backgroundImage: `url(${icon})`,
                    }}
                  />
                  <p _ngcontent-ng-c2125492905="" className="notranslate">
                    Profile
                  </p>{" "}
                </span>
                <span className="mat-mdc-focus-indicator"></span>
                <span className="mat-mdc-button-touch-target"></span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
