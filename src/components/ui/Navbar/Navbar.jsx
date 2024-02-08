import { Link } from "react-router-dom";
import useContextState from "../../../hooks/useContextState";

/* eslint-disable react/no-unknown-property */
const Navbar = () => {
  const { setShowSidebar } = useContextState();

  return (
    <div _ngcontent-ng-c943649379="" className="page-header">
      <div _ngcontent-ng-c943649379="" _nghost-ng-c3243547741="">
        <div _ngcontent-ng-c3243547741="" className="header-wrapper top-header">
          <div _ngcontent-ng-c3243547741="" className="logo">
            <span
            
              onClick={() => setShowSidebar(true)}
              _ngcontent-ng-c3243547741=""
              role="img"
              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
              aria-hidden="true"
              data-mat-icon-type="font"
              style={{ cursor: "pointer",color:'white' }}
            >
              menu
            </span>
            <Link to="/">
              <img
                _ngcontent-ng-c3243547741=""
                alt="logo"
                src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                className="ng-star-inserted"
              />
            </Link>
          </div>
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
                  <mat-label _ngcontent-ng-c3243547741="">Bal</mat-label>
                  <p _ngcontent-ng-c3243547741="">1,500</p>
                </div>
                <div
                  _ngcontent-ng-c3243547741=""
                  className="bal-amount exp-bal"
                >
                  <mat-label _ngcontent-ng-c3243547741="">Exp</mat-label>
                  <p _ngcontent-ng-c3243547741="">0</p>
                </div>
              </div>
              <button
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
            </div>
          </div>
        </div>
      </div>
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
    </div>
  );
};

export default Navbar;
