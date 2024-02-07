// import Navbar from "../ui/Navbar/Navbar";
// import { Outlet } from "react-router-dom";
// import Footer from "../ui/Footer/Footer";

const Main = () => {
  return (
    <>
      <div className="translator-wrap" style={{ display: "block" }}></div>
      <app-root _nghost-ng-c967272132="" ng-version="16.2.0">
        <mat-sidenav-container
          _ngcontent-ng-c967272132=""
          ngskiphydration=""
          className="mat-drawer-container mat-sidenav-container sidenav-container"
        >
          <div className="mat-drawer-backdrop ng-star-inserted"></div>
          <div
            tabindex="0"
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>

          {/*    <!-- mennu start --> */}

          <mat-sidenav
            _ngcontent-ng-c967272132=""
            tabindex="-1"
            ngskiphydration=""
            mode="over"
            opened="false"
            className="mat-drawer mat-sidenav left-sidemenu ng-tns-c3816625663-0 ng-trigger ng-trigger-transform mat-drawer-over ng-star-inserted"
            style={{ boxShadow: "none", visibility: "hidden" }}
          >
            {/*     <mat-sidenav _ngcontent-ng-c967272132="" tabindex="-1" ngskiphydration="" mode="over" opened="false"
        className="mat-drawer mat-sidenav left-sidemenu ng-tns-c3816625663-0 ng-trigger ng-trigger-transform mat-drawer-over ng-star-inserted mat-drawer-opened"
        style="transform: none; visibility: visible;"/>  */}

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
                        onerror="src = 'assets/img/transparent-img.svg'"
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
                      <mat-icon
                        _ngcontent-ng-c967272132=""
                        role="img"
                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        person
                      </mat-icon>
                      Demo
                    </p>
                  </div>
                </div>
                <div _ngcontent-ng-c967272132="" className="sidemenu-list">
                  <ul _ngcontent-ng-c967272132="" className="smenu-wrap top">
                    <li
                      _ngcontent-ng-c967272132=""
                      className="smenu-item nav-bonus ng-star-inserted"
                    >
                      <div _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          onerror="src='assets/img/default-logo-icon.svg'"
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bonus.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Bonus</span>
                        <mat-icon
                          _ngcontent-ng-c967272132=""
                          role="img"
                          className="mat-icon notranslate material-icon rules-icon material-icons mat-ligature-font mat-icon-no-color"
                          aria-hidden="true"
                          data-mat-icon-type="font"
                        >
                          description
                        </mat-icon>
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
                          onerror="src='../assets/img/sidenav-reward.svg'"
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
                    <li
                      _ngcontent-ng-c967272132=""
                      routerlink="/profile"
                      routerlinkactive="active-link"
                      className="smenu-item"
                      tabindex="0"
                    >
                      <a _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          onerror="src='assets/img/default-logo-icon.svg'"
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_profile.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Profile</span>
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
                          onerror="src='assets/img/default-logo-icon.svg'"
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
                          onerror="src='assets/img/default-logo-icon.svg'"
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
                          onerror="src='assets/img/default-logo-icon.svg'"
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Active Bets</span>
                      </a>
                    </li>
                    <li _ngcontent-ng-c967272132="" className="smenu-item">
                      <a _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          onerror="src = 'assets/img/default-logo-icon.svg'"
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_notification.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Notifications</span>
                      </a>
                    </li>
                    <li
                      _ngcontent-ng-c967272132=""
                      routerlink="/rules"
                      routerlinkactive="active-link"
                      className="smenu-item"
                      tabindex="0"
                    >
                      <a _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          onerror="src = 'assets/img/default-logo-icon.svg'"
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Rules</span>
                      </a>
                    </li>
                    <li
                      _ngcontent-ng-c967272132=""
                      className="smenu-item ng-star-inserted"
                    >
                      <a _ngcontent-ng-c967272132="" className="smenu-link">
                        <img
                          _ngcontent-ng-c967272132=""
                          onerror="src = 'assets/img/default-logo-icon.svg'"
                          alt="Menu Icon"
                          src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_help.svg"
                        />
                        <span _ngcontent-ng-c967272132="">Help</span>
                      </a>
                    </li>
                  </ul>
                  <ul _ngcontent-ng-c967272132="" className="smenu-wrap bottom">
                    <li
                      _ngcontent-ng-c967272132=""
                      className="smenu-item social-links-wrap ng-star-inserted"
                    >
                      <label _ngcontent-ng-c967272132="">Join us Now</label>
                      <div _ngcontent-ng-c967272132="" className="social-links">
                        <a
                          _ngcontent-ng-c967272132=""
                          className="ng-star-inserted"
                        >
                          <img
                            _ngcontent-ng-c967272132=""
                            onerror="src = 'assets/img/default-logo-icon.svg'"
                            alt=""
                            src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_facebook.svg"
                          />
                        </a>
                        <a
                          _ngcontent-ng-c967272132=""
                          className="ng-star-inserted"
                        >
                          <img
                            _ngcontent-ng-c967272132=""
                            onerror="src = 'assets/img/default-logo-icon.svg'"
                            alt=""
                            src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_instagram.svg"
                          />
                        </a>
                        <a
                          _ngcontent-ng-c967272132=""
                          className="ng-star-inserted"
                        >
                          <img
                            _ngcontent-ng-c967272132=""
                            onerror="src = 'assets/img/default-logo-icon.svg'"
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
                          <mat-icon
                            _ngcontent-ng-c967272132=""
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            download
                          </mat-icon>
                          Download App
                        </button>
                      </div>
                    </li>
                    <li _ngcontent-ng-c967272132="" className="smenu-item">
                      <div
                        _ngcontent-ng-c967272132=""
                        className="action-btn ng-star-inserted"
                      >
                        <button
                          _ngcontent-ng-c967272132=""
                          className="btn secondary-btn notranslate"
                        >
                          Logout
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </mat-sidenav>

          {/*  <!-- header start--> */}

          <div
            tabindex="0"
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
          <mat-sidenav-content
            _ngcontent-ng-c967272132=""
            ngskiphydration=""
            className="mat-drawer-content mat-sidenav-content"
          >
            <router-outlet _ngcontent-ng-c967272132=""></router-outlet>
            <app-homepage-v2
              _nghost-ng-c943649379=""
              className="ng-star-inserted"
            >
              <div _ngcontent-ng-c943649379="" className="main">
                <div _ngcontent-ng-c943649379="" className="container">
                  <div _ngcontent-ng-c943649379="" className="page-header">
                    <app-header
                      _ngcontent-ng-c943649379=""
                      _nghost-ng-c3243547741=""
                    >
                      <div
                        _ngcontent-ng-c3243547741=""
                        className="header-wrapper top-header"
                      >
                        <div _ngcontent-ng-c3243547741="" className="logo">
                          <mat-icon
                            _ngcontent-ng-c3243547741=""
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            menu
                          </mat-icon>
                          <img
                            _ngcontent-ng-c3243547741=""
                            onerror="src = 'assets/img/transparent-img.svg'"
                            alt="logo"
                            src="https://ss.manage63.com/bmk-wl/wl/wolf365/img/logo.svg"
                            className="ng-star-inserted"
                          />
                        </div>
                        <div
                          _ngcontent-ng-c3243547741=""
                          className="header-right-cont"
                        >
                          <div
                            _ngcontent-ng-c3243547741=""
                            className="loggedIn ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c3243547741=""
                              className="bal-cont"
                            >
                              <div
                                _ngcontent-ng-c3243547741=""
                                className="bal-amount show-bal"
                              >
                                <mat-label _ngcontent-ng-c3243547741="">
                                  Bal
                                </mat-label>
                                <p _ngcontent-ng-c3243547741="">1,500</p>
                              </div>
                              <div
                                _ngcontent-ng-c3243547741=""
                                className="bal-amount exp-bal"
                              >
                                <mat-label _ngcontent-ng-c3243547741="">
                                  Exp
                                </mat-label>
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
                              <span className="mdc-button__label">
                                {" "}
                                Deposit{" "}
                              </span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                          </div>
                        </div>
                      </div>{" "}
                    </app-header>

                    <app-demoid-marquee
                      _ngcontent-ng-c943649379=""
                      _nghost-ng-c3660323651=""
                    >
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
                          onmouseover="this.stop();"
                          onmouseout="this.start();"
                          onclick="this.stop()"
                        >
                          This is a Demo ID (to buy Mercedes play with real
                          money)
                        </marquee>
                        <p _ngcontent-ng-c3660323651="" className="marquee">
                          This is a Demo ID (to buy Mercedes play with real
                          money)
                        </p>
                      </div>
                    </app-demoid-marquee>
                  </div>

                  {/*      <!-- header end --> */}

                  {/*    <!-- wrapper start--> */}

                  <div _ngcontent-ng-c943649379="" className="page-body demoID">
                    <app-common-tabs
                      _ngcontent-ng-c943649379=""
                      _nghost-ng-c2582205232=""
                      className="ng-star-inserted"
                    >
                      <div
                        _ngcontent-ng-c2582205232=""
                        className="pagetab-wrapper"
                      >
                        <div
                          _ngcontent-ng-c2582205232=""
                          className="latest-events ng-star-inserted"
                        >
                          <div
                            _ngcontent-ng-c2582205232=""
                            className="le-item ng-star-inserted"
                          >
                            <h2
                              _ngcontent-ng-c2582205232=""
                              className="ng-star-inserted"
                            >
                              <span
                                _ngcontent-ng-c2582205232=""
                                className="blink-it"
                              >
                                Lok Sabha 2024
                              </span>
                            </h2>
                          </div>
                        </div>
                        <div
                          _ngcontent-ng-c2582205232=""
                          className="pagetab-header"
                        >
                          <div
                            _ngcontent-ng-c2582205232=""
                            routerlinkactive="active-link"
                            tabindex="0"
                            className="pagetab-item ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="icon-wrap rotate-animation"
                            >
                              <img
                                _ngcontent-ng-c2582205232=""
                                onerror="src='assets/img/ball-header-icon.svg'"
                                alt="Tab Icon"
                                src="https://cdnimg.manage63.com/games_icon/ball.svg"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="tab-label"
                            >
                              Cricket
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c2582205232=""
                            routerlinkactive="active-link"
                            tabindex="0"
                            className="pagetab-item ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c2582205232=""
                                onerror="src='assets/img/ball-header-icon.svg'"
                                alt="Tab Icon"
                                src="https://cdnimg.manage63.com/games_icon/soccer.svg"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="tab-label"
                            >
                              Soccer
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c2582205232=""
                            routerlinkactive="active-link"
                            tabindex="0"
                            className="pagetab-item ng-star-inserted"
                          >
                            {/*    <!-- <p _ngcontent-ng-c2582205232="" className="newgame ng-star-inserted">Started</p> --> */}
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="icon-wrap rotate-animation"
                            >
                              <img
                                _ngcontent-ng-c2582205232=""
                                onerror="src='assets/img/ball-header-icon.svg'"
                                alt="Tab Icon"
                                src="https://cdnimg.manage63.com/games_icon/tennis.svg"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="tab-label"
                            >
                              Tennis
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c2582205232=""
                            routerlink="/casino-bmk-lobby"
                            routerlinkactive="active-link"
                            className="pagetab-item ng-star-inserted"
                            tabindex="0"
                          >
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c2582205232=""
                                onerror="src='assets/img/cards-header-icon.svg'"
                                alt="Tab Icon"
                                src="https://ss.manage63.com/bmk-wl/commonAssets/cards-header-icon.svg"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="tab-label"
                            >
                              Go Casino
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c2582205232=""
                            routerlink="/live-casino-lobby/live_casino"
                            routerlinkactive="active-link"
                            className="pagetab-item ng-star-inserted"
                            tabindex="0"
                          >
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c2582205232=""
                                onerror="src='assets/img/chips-header-icon.svg'"
                                alt="Tab Icon"
                                src="https://ss.manage63.com/bmk-wl/commonAssets/chips-header-icon.svg"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="tab-label"
                            >
                              Live Casino
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c2582205232=""
                            className="pagetab-item ds-none ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c2582205232=""
                                onerror="src='assets/img/chips-header-icon.svg'"
                                alt="Tab Icon"
                                src="https://ss.manage63.com/bmk-wl/commonAssets/chips-header-icon.svg"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="tab-label"
                            >
                              Live Casino
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c2582205232=""
                            routerlink="/casino-lobby/casino"
                            routerlinkactive="active-link"
                            className="pagetab-item ng-star-inserted"
                            tabindex="0"
                          >
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c2582205232=""
                                onerror="src='assets/img/dice-header-icon.svg'"
                                alt="Tab Icon"
                                src="https://ss.manage63.com/bmk-wl/commonAssets/dice-header-icon.svg"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="tab-label"
                            >
                              Casino
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c2582205232=""
                            className="pagetab-item ds-none ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c2582205232=""
                                onerror="src='assets/img/dice-header-icon.svg'"
                                alt="Tab Icon"
                                src="https://ss.manage63.com/bmk-wl/commonAssets/dice-header-icon.svg"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2582205232=""
                              className="tab-label"
                            >
                              Casino
                            </div>
                          </div>
                        </div>
                      </div>
                    </app-common-tabs>

                    <ion-content
                      _ngcontent-ng-c943649379=""
                      className="hydrated"
                      style={{ offsetTop: "0px", offsetBottom: "0px" }}
                      /*      "--offset-top: 0px; --offset-bottom: 0px" */
                    >
                      <ion-refresher
                        _ngcontent-ng-c943649379=""
                        slot="fixed"
                        className="refresher refresher-md hydrated"
                      >
                        <ion-refresher-content
                          _ngcontent-ng-c943649379=""
                          className="hydrated"
                        >
                          <div className="refresher-pulling">
                            <div className="refresher-pulling-icon">
                              <ion-icon
                                role="img"
                                className="hydrated"
                                aria-label="arrow down"
                              ></ion-icon>
                            </div>
                          </div>
                          <div className="refresher-refreshing">
                            <div className="refresher-refreshing-icon">
                              <ion-spinner className="spinner-lines hydrated"></ion-spinner>
                            </div>
                          </div>{" "}
                        </ion-refresher-content>
                      </ion-refresher>
                      <div _ngcontent-ng-c943649379="" className="pagetab-body">
                        <div
                          _ngcontent-ng-c943649379=""
                          className="pagetab-content"
                        >
                          <div
                            _ngcontent-ng-c943649379=""
                            className="cricket-tab ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c943649379=""
                              className="game-play-heading"
                            >
                              <h2 _ngcontent-ng-c943649379="">Cricket</h2>

                              {/*  <!-- <a _ngcontent-ng-c943649379=""
                            routerlinkactive="active-link" className="view-all-link ng-star-inserted"
                            href="">View
                            All</a> --> */}
                            </div>
                            {/*  <!-- <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> New zealand Vs South
                              africa </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> new zealand </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> south africa </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Sharjah warriors Vs
                              Abu dhabi knight riders </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> sharjah warriors </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> abu dhabi knight riders </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Otago volts Vs
                              Central stags </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> otago volts </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> central stags </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Wellington firebirds
                              Vs Northern districts </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> wellington firebirds </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> northern districts </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Auckland aces Vs
                              Canterbury kings </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> auckland aces </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> canterbury kings </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Australia Vs West
                              indies </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> australia </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> west indies </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Durdanto dhaka Vs
                              Rangpur riders </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> durdanto dhaka </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> rangpur riders </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> South africa u19 Vs
                              India u19 </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> south africa u19 </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> india u19 </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Chattogram
                              challengers Vs Fortune barishal </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> chattogram challengers </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> fortune barishal </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Dubai capitals Vs
                              Gulf giants </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> dubai capitals </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> gulf giants </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Sunrisers eastern
                              cape Vs Durban super giants </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> sunrisers eastern cape </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> durban super giants </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Australia women Vs
                              South africa women </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> australia women </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> south africa women </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Paarl royals Vs
                              Johannesburg super kings </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> paarl royals </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> johannesburg super kings </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div _ngcontent-ng-c943649379="" className="cricket-card notranslate ng-star-inserted"
                          style="display: none;">
                          <div _ngcontent-ng-c943649379="" className="card-header">
                            <h3 _ngcontent-ng-c943649379="" className="card-title"><mat-icon _ngcontent-ng-c943649379=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true" data-mat-icon-type="font">play_arrow</mat-icon> Australia u19 Vs
                              Pakistan u19 </h3>
                            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
                              <h3 _ngcontent-ng-c943649379="" className="back-bg">Back</h3>
                              <h3 _ngcontent-ng-c943649379="" className="lay-bg">Lay</h3>
                            </div>
                          </div>
                          <div _ngcontent-ng-c943649379="" className="card-body">
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> australia u19 </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                            <div _ngcontent-ng-c943649379="" className="data-wrap ng-star-inserted">
                              <div _ngcontent-ng-c943649379="" className="teamlist-info"><span
                                  _ngcontent-ng-c943649379=""></span>
                                <h3 _ngcontent-ng-c943649379="" className="team-title"> pakistan u19 </h3>
                              </div>
                              <div _ngcontent-ng-c943649379="" className="suspended-wrap ng-star-inserted">
                                <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                              </div>
                            </div>
                          </div>
                        </div> --> */}

                            <div
                              _ngcontent-ng-c943649379=""
                              className="cricket-table notranslate ng-star-inserted"
                            >
                              <div
                                _ngcontent-ng-c943649379=""
                                className="table-header"
                              >
                                <h3
                                  _ngcontent-ng-c943649379=""
                                  className="card-title"
                                >
                                  <mat-icon
                                    _ngcontent-ng-c943649379=""
                                    role="img"
                                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                    aria-hidden="true"
                                    data-mat-icon-type="font"
                                  >
                                    schedule
                                  </mat-icon>
                                  Teams
                                </h3>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="lay-back-wrap"
                                >
                                  <h3
                                    _ngcontent-ng-c943649379=""
                                    className="back-bg"
                                  >
                                    Back
                                  </h3>
                                  <h3
                                    _ngcontent-ng-c943649379=""
                                    className="lay-bg"
                                  >
                                    Lay
                                  </h3>
                                </div>
                              </div>
                              <div
                                _ngcontent-ng-c943649379=""
                                className="table-body"
                              >
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <span
                                        _ngcontent-ng-c943649379=""
                                        className="inplay ng-star-inserted"
                                      >
                                        In-play
                                      </span>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          new zealand
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          south africa
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      ></p>
                                    </h3>
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="inplay-wrap ng-star-inserted"
                                    >
                                      <mat-icon
                                        _ngcontent-ng-c943649379=""
                                        role="img"
                                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                        aria-hidden="true"
                                        data-mat-icon-type="font"
                                      >
                                        play_arrow
                                      </mat-icon>
                                    </div>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.19
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">1.1k</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">1.2</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          18.3k
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Starts at 8:00pm IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          sharjah warriors
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          abu dhabi knight riders
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.67
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">81.24</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.69
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">84</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 3:00am IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          otago volts
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          central stags
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.54
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">56</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">1.6</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          2
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 3:00am IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          wellington firebirds
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          northern districts
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.69
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">1.11</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.71
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">23.29</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 3:00am IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          auckland aces
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          canterbury kings
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">1.9</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          3.5
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                      <span className="mat-ripple mat-mdc-button-ripple"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">2</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          10.27
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 9:00am IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          australia
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          west indies
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.16
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">7.5k</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                      <span className="mat-ripple mat-mdc-button-ripple"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.17
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">10</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 1:00pm IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          durdanto dhaka
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          rangpur riders
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.41
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">75.36</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.68
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">8.7</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                      <span className="mat-ripple mat-mdc-button-ripple"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 1:30pm IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          south africa u19
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          india u19
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.41
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">3.56</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.49
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">12</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 6:00pm IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          chattogram challengers
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          fortune barishal
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">1.7</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          6.34
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">1.9</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          6.26
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 8:00pm IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          dubai capitals
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          gulf giants
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">1.8</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          46.04
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.95
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">6.34</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        Tomorrow 9:00pm IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          sunrisers eastern cape
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          durban super giants
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">1.8</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          500
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">1.9</h4>
                                        <p _ngcontent-ng-c943649379="">
                                          2.81
                                        </p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        07 Feb 9:10am IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          australia women
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          south africa women
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.13
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">268.8</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.17
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">2.88</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        07 Feb 9:00pm IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          paarl royals
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          johannesburg super kings
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.78
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">2.99</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.99
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">7.6</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                                <div
                                  _ngcontent-ng-c943649379=""
                                  className="table-item ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="teamlist-info"
                                  >
                                    <div
                                      _ngcontent-ng-c943649379=""
                                      className="match-time"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        08 Feb 1:30pm IST
                                      </p>
                                    </div>
                                    <h3
                                      _ngcontent-ng-c943649379=""
                                      className="team-title"
                                    >
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <mat-icon
                                          _ngcontent-ng-c943649379=""
                                          role="img"
                                          className="mat-icon notranslate material-icons favorite mat-ligature-font mat-icon-no-color ng-star-inserted"
                                          aria-hidden="true"
                                          data-mat-icon-type="font"
                                        >
                                          star
                                        </mat-icon>
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          australia u19
                                        </span>
                                      </p>
                                      <p
                                        _ngcontent-ng-c943649379=""
                                        className="ng-star-inserted"
                                      >
                                        <span
                                          _ngcontent-ng-c943649379=""
                                          className="team-name ng-star-inserted"
                                        >
                                          pakistan u19
                                        </span>
                                      </p>
                                    </h3>
                                  </div>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="count-v-wrap ng-star-inserted"
                                  >
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.74
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">20.3</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                    <button
                                      _ngcontent-ng-c943649379=""
                                      mat-flat-button=""
                                      className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                      mat-ripple-loader-uninitialized=""
                                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                    >
                                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                      <span className="mdc-button__label">
                                        <h4 _ngcontent-ng-c943649379="">
                                          1.98
                                        </h4>
                                        <p _ngcontent-ng-c943649379="">5</p>{" "}
                                      </span>
                                      <span className="mat-mdc-focus-indicator"></span>
                                      <span className="mat-mdc-button-touch-target"></span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            _ngcontent-ng-c943649379=""
                            className="casino-section go-casino game-play mt-2 mb-3 ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c943649379=""
                              className="game-play-heading"
                            >
                              <h2 _ngcontent-ng-c943649379="">Go Casino</h2>
                              <a
                                _ngcontent-ng-c943649379=""
                                routerlink="/casino-bmk-lobby"
                                routerlinkactive="active-link"
                                className="view-all-link ng-star-inserted"
                                href="/app/casino-bmk-lobby"
                              >
                                View All
                              </a>
                            </div>
                            <div
                              _ngcontent-ng-c943649379=""
                              className="game-type-list ng-star-inserted"
                            >
                              <ul _ngcontent-ng-c943649379="">
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    619
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/aviator.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Aviator 3D
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    2984
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/blastoff.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Blastoff
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    220
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Trio.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Trio
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    2206
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/super-over.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Super Over
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    909
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/3-Card-Judgement.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      3 Card Judgement
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 25K
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    1931
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Casino-War.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Casino War
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    3158
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Dream-Catcher.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Dream Catcher
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    6278
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/29-Card-Baccarat.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      29 Card Baccarat
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    2739
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Teenpatti-Open.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Teenpatti Open
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    229
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Trap.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Trap
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    7676
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Teenpatti-Test.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Teenpatti Test
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    8766
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Queen-Race.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Queen Race
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    9050
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/2-Card-Teenpatti.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      2 Card Teenpatti
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    3361
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Poker-20-20.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Poker 20-20
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    2967
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Casino-Meter.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Casino Meter
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    5883
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Baccarat.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Baccarat
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 1L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    9399
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Teenpatti-one-day.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Teenpatti one day
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    3534
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Muflis-Teenpatti.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Muflis Teenpatti
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    3330
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Sicbo.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Sicbo
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    7170
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Roulette.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Roulette
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    6871
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Bollywood-Casino.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Bollywood Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    6519
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Race-20-20.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Race 20-20
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    5517
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Amar-Akbar-Anthony.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Amar Akbar Anthony
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    6470
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Dragon-Tiger.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Dragon Tiger
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    4421
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/7up-&amp;-down.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      7 up &amp; down
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    8798
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Matka.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Matka
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹10 - 20K
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    4013
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Andar-Bahar.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Andar Bahar
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    5811
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Six-player-poker.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Six player poker
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    741
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Poker.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Poker
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    5294
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/Hi-Low.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Hi Low
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    181
                                  </p>
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://ss.manage63.com/south247/casinolobbyimages/32-card-casino.jpg"
                                    />
                                  </a>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Aura Casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      32 card casino
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 2L
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c943649379=""
                            className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c943649379=""
                              className="game-play-heading"
                            >
                              <h2 _ngcontent-ng-c943649379="">Live Casino</h2>
                              <a
                                _ngcontent-ng-c943649379=""
                                routerlink="/live-casino-lobby/live_casino"
                                routerlinkactive="active-link"
                                className="view-all-link ng-star-inserted"
                                href="/app/live-casino-lobby/live_casino"
                              >
                                View All
                              </a>
                            </div>
                            <div
                              _ngcontent-ng-c943649379=""
                              className="game-type-list ng-star-inserted"
                            >
                              <ul _ngcontent-ng-c943649379="">
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamdelhi.com/dc/hindi_lightning_roulette.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    5202
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Evolution Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Hindi Lightning Roulette
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 25L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamcasino.live/evo_hindilightningroulette.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    9941
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Evolution Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Hindi Lightning Roulette
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 25L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamcasino.live/evo_supersicbo.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    9516
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Evolution Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Super Sic Bo
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 13L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamdelhi.com/dc/gold_vault_roulette.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    5165
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Evolution Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Gold Vault Roulette
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 10L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamcasino.live/evolution/evo_emperorsicbo.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    3571
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Evolution Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Emperor Sic Bo
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 13L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamcasino.live/evo_lightningroulette.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    6963
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Evolution Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Lightning Roulette
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 25L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamcasino.live/evo_livedoubleballroulette.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    3294
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Evolution Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Double Ball Roulette
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 5L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamcasino.live/evo_liveamericanroulette.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    3786
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Evolution Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      American Roulette
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 25L
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c943649379=""
                            className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c943649379=""
                              className="game-play-heading"
                            >
                              <h2 _ngcontent-ng-c943649379="">Casino</h2>
                            </div>
                            <div
                              _ngcontent-ng-c943649379=""
                              className="game-type-list ng-star-inserted"
                            >
                              <ul _ngcontent-ng-c943649379="">
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamcasino.live/sbe_aviator.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    7080
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Spribe
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      AVIATOR
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹10 - 8K
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamdelhi.com/dc/gmz_dragons_secret.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    9425
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Gamzix
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Dragons Secret
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 40K
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamdelhi.com/dc/gmz_the_hottest_game.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    2316
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Gamzix
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      The Hottest Game
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 50K
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamdelhi.com/dc/gmz_buffalo_coin_hold_the_spin.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    9197
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Gamzix
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Buffalo Coin: Hold The Spin
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 20K
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="assets/img/default-casino-img.png"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    123
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Smartsoft Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Viking
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 1L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamdelhi.com/dc/sms_argo.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    6222
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Smartsoft Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Argo
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 1L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamdelhi.com/dc/sms_book_of_win.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    569
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Smartsoft Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      Book of Win
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 1L
                                    </p>
                                  </div>
                                </li>
                                <li
                                  _ngcontent-ng-c943649379=""
                                  className="ng-star-inserted"
                                >
                                  <a
                                    _ngcontent-ng-c943649379=""
                                    className="active"
                                  >
                                    <img
                                      _ngcontent-ng-c943649379=""
                                      onerror="src = 'assets/img/default-casino-img.png'"
                                      alt=""
                                      src="https://cdn.dreamdelhi.com/dc/sms_jetx3.webp"
                                    />
                                  </a>
                                  <p
                                    _ngcontent-ng-c943649379=""
                                    className="total-players"
                                  >
                                    <mat-icon
                                      _ngcontent-ng-c943649379=""
                                      role="img"
                                      className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                      aria-hidden="true"
                                      data-mat-icon-type="font"
                                    >
                                      group
                                    </mat-icon>
                                    6643
                                  </p>
                                  <div
                                    _ngcontent-ng-c943649379=""
                                    className="game-detail"
                                  >
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="company-type"
                                    >
                                      Smartsoft Gaming
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="game-name"
                                    >
                                      JetX3
                                    </p>
                                    <p
                                      _ngcontent-ng-c943649379=""
                                      className="coins-limit ng-star-inserted"
                                    >
                                      ₹100 - 1L
                                    </p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ion-content>
                    <div _ngcontent-ng-c943649379="" className="floating-btns">
                      <div
                        _ngcontent-ng-c943649379=""
                        className="btn-item ng-star-inserted"
                      >
                        <div
                          _ngcontent-ng-c943649379=""
                          className="btn-wrap whatsapp"
                        >
                          <img
                            _ngcontent-ng-c943649379=""
                            alt="WhatsApp"
                            src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*     <!-- wrapper end-->

                <!-- footer start--> */}

                  <div _ngcontent-ng-c943649379="" className="page-footer">
                    <app-footer
                      _ngcontent-ng-c943649379=""
                      _nghost-ng-c2125492905=""
                    >
                      <mat-toolbar
                        _ngcontent-ng-c2125492905=""
                        className="tab-navigation"
                      >
                        <button
                          _ngcontent-ng-c2125492905=""
                          mat-flat-button=""
                          routerlink="/home"
                          routerlinkactive="active-link"
                          className="home mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base active-link"
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                          tabindex="0"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span className="mdc-button__label">
                            <img
                              _ngcontent-ng-c2125492905=""
                              src="assets/img/transparent-img.svg"
                              alt="Tab Icon"
                              style={{
                                backgroundImage:
                                  'url("https://ss.manage63.com/bmk-wl/wl/wolf365/img/sprite-img/nav-sprite.svg")',
                              }}
                            />
                            <p
                              _ngcontent-ng-c2125492905=""
                              className="notranslate"
                            >
                              Home
                            </p>{" "}
                          </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>

                        <button
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
                              src="assets/img/transparent-img.svg"
                              alt="Tab Icon"
                              style={{
                                backgroundImage:
                                  'url("https://ss.manage63.com/bmk-wl/wl/wolf365/img/sprite-img/nav-sprite.svg")',
                              }}
                            />
                            <p
                              _ngcontent-ng-c2125492905=""
                              className="notranslate"
                            >
                              My Markets
                            </p>{" "}
                          </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                        <button
                          _ngcontent-ng-c2125492905=""
                          mat-flat-button=""
                          routerlink="/passbook"
                          routerlinkactive="active-link"
                          className="passbook mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                          tabindex="0"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span className="mdc-button__label">
                            <img
                              _ngcontent-ng-c2125492905=""
                              src="assets/img/transparent-img.svg"
                              alt="Tab Icon"
                              style={{
                                backgroundImage:
                                  'url("https://ss.manage63.com/bmk-wl/wl/wolf365/img/sprite-img/nav-sprite.svg")',
                              }}
                            />
                            <p
                              _ngcontent-ng-c2125492905=""
                              className="notranslate"
                            >
                              Passbook
                            </p>{" "}
                          </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                        <button
                          _ngcontent-ng-c2125492905=""
                          mat-flat-button=""
                          routerlink="/profile"
                          routerlinkactive="active-link"
                          className="profile mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                          tabindex="0"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span className="mdc-button__label">
                            <img
                              _ngcontent-ng-c2125492905=""
                              src="assets/img/transparent-img.svg"
                              alt="Tab Icon"
                              style={{
                                backgroundImage:
                                  'url("https://ss.manage63.com/bmk-wl/wl/wolf365/img/sprite-img/nav-sprite.svg")',
                              }}
                            />
                            <p
                              _ngcontent-ng-c2125492905=""
                              className="notranslate"
                            >
                              Profile
                            </p>{" "}
                          </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                      </mat-toolbar>
                    </app-footer>
                  </div>
                </div>
              </div>{" "}
            </app-homepage-v2>
          </mat-sidenav-content>
        </mat-sidenav-container>
      </app-root>
    </>
  );
};

export default Main;
