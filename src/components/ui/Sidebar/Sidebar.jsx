import { Link, useNavigate } from "react-router-dom";
import useContextState from "../../../hooks/useContextState";
import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { RiEditBoxFill } from "react-icons/ri";

/* eslint-disable react/no-unknown-property */
const Sidebar = () => {
  const {
    showSidebar,
    setShowSidebar,
    setGetToken,
    setShowEditStake,
    token,
    setShowLogin,
  } = useContextState();
  const loginName = localStorage.getItem("loginName");
  const navigate = useNavigate();
  const leftMenuRef = useRef();

  useCloseModalClickOutside(leftMenuRef, () => {
    setShowSidebar(false);
  });
  const handleLogout = () => {
    localStorage.clear();
    setShowSidebar(false);
    setGetToken((prev) => !prev);
    navigate("/");
  };

  return (
    <>
      <div
        className="mat-drawer-backdrop ng-star-inserted"
        style={{ visibility: `${showSidebar ? "visible" : "hidden"}` }}
      ></div>
      <div
        className="cdk-visually-hidden cdk-focus-trap-anchor"
        aria-hidden="true"
      ></div>

      <div
        ref={leftMenuRef}
        _ngcontent-ng-c967272132=""
        ngskiphydration=""
        mode="over"
        opened="false"
        className="mat-drawer mat-sidenav left-sidemenu ng-tns-c3816625663-0 ng-trigger ng-trigger-transform mat-drawer-over ng-star-inserted"
        style={{
          transform: `translate(${showSidebar ? "0" : "-100%"}, 0)`,
          boxShadow: `${showSidebar ? "" : "none"}`,
          transition: "0.5s",
        }}
      >
        {/* <span
              _ngcontent-ng-c967272132=""
              ngskiphydration=""
              mode="over"
              opened="false"
              className="mat-drawer mat-sidenav left-sidemenu ng-tns-c3816625663-0 ng-trigger ng-trigger-transform mat-drawer-over ng-star-inserted mat-drawer-opened"
              style={{ transform: "none", visibility: "visible" }}
            ></span> */}

        <div
          cdkscrollable=""
          className="mat-drawer-inner-container ng-tns-c3816625663-0"
        >
          <div
            _ngcontent-ng-c967272132=""
            className="sidemenu-wrapper ng-tns-c3816625663-0"
          >
            <div _ngcontent-ng-c967272132="" className="sidemenu-header">
              <div _ngcontent-ng-c967272132="" className="logo">
                <div _ngcontent-ng-c967272132="" className="img-wrap">
                  <img
                    _ngcontent-ng-c967272132=""
                    alt="logo"
                    src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                    className="ng-star-inserted"
                  />
                </div>
              </div>
              <div
                _ngcontent-ng-c967272132=""
                className="user-details ng-star-inserted"
              >
                <p _ngcontent-ng-c967272132="" className="notranslate">
                  <span
                    _ngcontent-ng-c967272132=""
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    person
                  </span>
                  {loginName}
                </p>
              </div>
            </div>
            <div _ngcontent-ng-c967272132="" className="sidemenu-list">
              <ul _ngcontent-ng-c967272132="" className="smenu-wrap top">
                {token && (
                  <>
                    <li
                      _ngcontent-ng-c967272132=""
                      className="smenu-item nav-bonus ng-star-inserted"
                    >
                      <div _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bonus.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Bonus</span>
                        <span
                          _ngcontent-ng-c967272132=""
                          role="img"
                          className="mat-icon notranslate material-icon rules-icon material-icons mat-ligature-font mat-icon-no-color"
                          aria-hidden="true"
                          data-mat-icon-type="font"
                        >
                          description
                        </span>
                      </div>
                      <div _ngcontent-ng-c967272132="">
                        <div _ngcontent-ng-c967272132="" className="bonus-wrap">
                          <div
                            _ngcontent-ng-c967272132=""
                            className="bonus-details"
                          >
                            <div
                              _ngcontent-ng-c967272132=""
                              className="bonus-info"
                            >
                              <p _ngcontent-ng-c967272132="">
                                Total Bonus: 1,100
                              </p>
                              <div
                                _ngcontent-ng-c967272132=""
                                className="claim-btn"
                              >
                                <p _ngcontent-ng-c967272132="">
                                  Claimable Bonus: 0
                                </p>
                                <button
                                  _ngcontent-ng-c967272132=""
                                  className="btn secondary-btn"
                                  disabled=""
                                >
                                  Claim
                                </button>
                              </div>
                              <p _ngcontent-ng-c967272132="" className="n-msg">
                                Min. Claimable Coins: 100
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li
                      _ngcontent-ng-c967272132=""
                      hidden=""
                      className="smenu-item"
                    >
                      <a _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav-reward.svg"
                        />
                        <span _ngcontent-ng-c967272132="">
                          Have a promo/refer code
                        </span>
                      </a>
                      <div _ngcontent-ng-c967272132="" className="refer-code">
                        <input
                          _ngcontent-ng-c967272132=""
                          type="text"
                          placeholder="Enter Promo/Refer code"
                        />
                        <p
                          _ngcontent-ng-c967272132=""
                          className="timer text-danger"
                          style={{ display: "none" }}
                        >
                          23:03
                        </p>
                        <button
                          _ngcontent-ng-c967272132=""
                          className="btn secondary-btn"
                        >
                          Submit
                        </button>
                      </div>
                    </li>
                    <li _ngcontent-ng-c967272132="" className="smenu-item">
                      <Link
                        to="/profile"
                        onClick={() => setShowSidebar(false)}
                        _ngcontent-ng-c967272132=""
                        className="smenu-link"
                      >
                        <img
                          _ngcontent-ng-c967272132=""
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_profile.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Profile</span>
                      </Link>
                    </li>
                    <li
                      _ngcontent-ng-c967272132=""
                      routerlinkactive="active-link"
                      className="smenu-item"
                    >
                      <a _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bank.svg"
                        />
                        <span _ngcontent-ng-c967272132="">
                          Withdrawal Details
                        </span>
                      </a>
                    </li>
                    <li
                      _ngcontent-ng-c967272132=""
                      routerlinkactive="active-link"
                      className="smenu-item"
                    >
                      <a _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                        />
                        <span _ngcontent-ng-c967272132="">
                          Account Statement
                        </span>
                      </a>
                    </li>
                    <li
                      _ngcontent-ng-c967272132=""
                      routerlinkactive="active-link"
                      className="smenu-item"
                    >
                      <a _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Active Bets</span>
                      </a>
                    </li>
                    <li
                      _ngcontent-ng-c967272132=""
                      routerlinkactive="active-link"
                      className="smenu-item"
                    >
                      <a
                        onClick={() => {
                          setShowEditStake(true);
                          setShowSidebar(false);
                        }}
                        _ngcontent-ng-c967272132=""
                        className="smenu-link"
                      >
                        <RiEditBoxFill size={18} color="#3d3d3d" />
                        <span _ngcontent-ng-c967272132="">Edit Stakes</span>
                      </a>
                    </li>
                  </>
                )}
                <li _ngcontent-ng-c967272132="" className="smenu-item">
                  <a _ngcontent-ng-c967272132="" className="smenu-link">
                    <img
                      _ngcontent-ng-c967272132=""
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_notification.svg"
                    />
                    <span _ngcontent-ng-c967272132="">Notifications</span>
                  </a>
                </li>
                <li _ngcontent-ng-c967272132="" className="smenu-item">
                  <Link
                    onClick={() => setShowSidebar(false)}
                    to="/rules"
                    _ngcontent-ng-c967272132=""
                    className="smenu-link"
                  >
                    <img
                      _ngcontent-ng-c967272132=""
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                    />
                    <span _ngcontent-ng-c967272132="">Rules</span>
                  </Link>
                </li>
                <li
                  _ngcontent-ng-c967272132=""
                  className="smenu-item ng-star-inserted"
                >
                  <a _ngcontent-ng-c967272132="" className="smenu-link">
                    <img
                      _ngcontent-ng-c967272132=""
                      alt="Menu Icon"
                      src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_help.svg"
                    />
                    <span _ngcontent-ng-c967272132="">Help</span>
                  </a>
                </li>
              </ul>
              <ul _ngcontent-ng-c967272132="" className="smenu-wrap bottom">
                {/* <li
                _ngcontent-ng-c967272132=""
                className="smenu-item social-links-wrap ng-star-inserted"
              >
                <label _ngcontent-ng-c967272132="">Join us Now</label>
                <div _ngcontent-ng-c967272132="" className="social-links">
                  <a _ngcontent-ng-c967272132="" className="ng-star-inserted">
                    <img
                      _ngcontent-ng-c967272132=""
                      alt=""
                      src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_facebook.svg"
                    />
                  </a>
                  <a _ngcontent-ng-c967272132="" className="ng-star-inserted">
                    <img
                      _ngcontent-ng-c967272132=""
                      alt=""
                      src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_instagram.svg"
                    />
                  </a>
                  <a _ngcontent-ng-c967272132="" className="ng-star-inserted">
                    <img
                      _ngcontent-ng-c967272132=""
                      alt=""
                      src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_telegram.svg"
                    />
                  </a>
                </div>
              </li>
              <li
                _ngcontent-ng-c967272132=""
                className="smenu-item ng-star-inserted"
              >
                <div _ngcontent-ng-c967272132="" className="action-btn">
                  <button
                    _ngcontent-ng-c967272132=""
                    className="btn outline-btn app-dwnld-btn notranslate"
                  >
                    <span
                      _ngcontent-ng-c967272132=""
                      role="img"
                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                      aria-hidden="true"
                      data-mat-icon-type="font"
                    >
                      download
                    </span>
                    Download App
                  </button>
                </div>
              </li> */}
                <li _ngcontent-ng-c967272132="" className="smenu-item">
                  <div
                    _ngcontent-ng-c967272132=""
                    className="action-btn ng-star-inserted"
                  >
                    {token ? (
                      <button
                        onClick={handleLogout}
                        _ngcontent-ng-c967272132=""
                        className="btn secondary-btn notranslate"
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          setShowLogin(true);
                          setShowSidebar(false);
                        }}
                        _ngcontent-ng-c967272132=""
                        className="btn secondary-btn notranslate"
                      >
                        Login
                      </button>
                    )}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
