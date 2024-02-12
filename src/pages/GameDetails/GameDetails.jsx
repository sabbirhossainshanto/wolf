import axios from "axios";
import { useEffect, useState } from "react";
import { API } from "../../api";
import { useParams } from "react-router-dom";
import { token } from "../../api/token";
import MatchOdds from "./GameType/MatchOdds";
import Bookmaker from "./GameType/Bookmaker";
import Fancy from "./GameType/Fancy";
import UseEncryptData from "../../hooks/UseEncryptData";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import Bookmaker2 from "./GameType/Bookmaker2";
import FancyOne from "./GameType/FancyOne";

/* eslint-disable react/no-unknown-property */
const GameDetails = () => {
  const { eventId, eventTypeId } = useParams();
  const [data, setData] = useState([]);
  const [match_odds, setMatch_odds] = useState([]);
  const [bookmarker, setBookmarker] = useState([]);
  const [bookmarker2, setBookmarker2] = useState([]);
  const [normal, setNormal] = useState([]);
  const [fancy1, setFancy1] = useState([]);
  const [overByOver, setOverByOver] = useState([]);
  const [iFrameUrl, setIframeUrl] = useState("");

  console.log(fancy1);
  /* Get game details */
  useEffect(() => {
    const getGameDetails = async () => {
      const res = await axios.get(`${API.odds}/${eventTypeId}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.success) {
        setData(data.result);
      }
    };
    getGameDetails();
    const intervalId = setInterval(getGameDetails, API.interval);
    return () => clearInterval(intervalId);
  }, [eventId, eventTypeId]);

  /* Filtered all the game  */
  useEffect(() => {
    const filterMatch_odds = data?.filter(
      (match_odd) => match_odd.btype === "MATCH_ODDS"
    );
    setMatch_odds(filterMatch_odds);

    const bookmarkerFilter = data?.filter(
      (bookmarker) => bookmarker.btype === "BOOKMAKER"
    );
    setBookmarker(bookmarkerFilter);

    const filterBookmarker2 = data?.filter(
      (bookmarker2) => bookmarker2.btype === "BOOKMAKER2"
    );
    setBookmarker2(filterBookmarker2);

    const normalFilter = data?.filter(
      (normal) => normal.btype === "FANCY" && normal.tabGroupName === "Normal"
    );
    setNormal(normalFilter);

    const fancy1Filter = data?.filter(
      (fancy1) => fancy1.btype === "ODDS" && fancy1.tabGroupName === "Fancy1"
    );
    setFancy1(fancy1Filter);

    const overByOverFilter = data?.filter(
      (overByOver) =>
        overByOver.btype === "FANCY" &&
        overByOver.tabGroupName === "Over By Over"
    );
    setOverByOver(overByOverFilter);
  }, [data]);

  useEffect(() => {
    const getVideo = () => {
      const generatedToken = UseTokenGenerator();
      const encryptedVideoData = UseEncryptData({
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        token: generatedToken,
      });

      fetch(API.accessToken, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(encryptedVideoData),
      })
        .then((res) => res.json())
        .then((data) => {
          setIframeUrl(data?.result?.url);
        });
    };
    getVideo();
  }, [eventId, eventTypeId]);
  console.log(data);
  return (
    <>
      <div _ngcontent-ng-c942213636="" className="page-body">
        <div _ngcontent-ng-c942213636="" className="game-tab ng-star-inserted">
          <div _ngcontent-ng-c942213636="" className="pagetop-bar">
            <div
              _ngcontent-ng-c942213636=""
              className="team-play-bar title-bar"
            >
              <div _ngcontent-ng-c942213636="" className="playing-teams">
                <button
                  _ngcontent-ng-c942213636=""
                  mat-icon-button=""
                  mattooltipposition="below"
                  mattooltiphidedelay="1000"
                  tooltiptouchgestures="on"
                  className="mat-mdc-tooltip-trigger mdc-icon-button mat-mdc-icon-button mat-unthemed mat-mdc-button-base"
                  mat-ripple-loader-uninitialized=""
                  mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  mat-ripple-loader-centered=""
                  aria-describedby="cdk-describedby-message-ng-1-2"
                  cdk-describedby-host="ng-1"
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-icon-button__ripple"></span>
                  i <span className="mat-mdc-focus-indicator"></span>
                  <span className="mat-mdc-button-touch-target"></span>
                </button>
                <span _ngcontent-ng-c942213636="" className="ng-star-inserted">
                  {data?.length > 0 && data[0]?.eventName}
                </span>
              </div>
              <div _ngcontent-ng-c942213636="" className="playing-teams">
                <span _ngcontent-ng-c942213636="" className="ng-star-inserted">
                  {data?.length > 0 && data[0]?.openDate}
                </span>
              </div>
            </div>
          </div>
          <div
            _ngcontent-ng-c942213636=""
            ngskiphydration=""
            mat-stretch-tabs="true"
            disablepagination="true"
            className="mat-mdc-tab-group mat-tab-group mat-primary mat-mdc-tab-group-stretch-tabs"
            /*  style="--mat-tab-animation-duration: 500ms" */
          >
            <div className="mat-mdc-tab-header mat-tab-header">
              <button
                aria-hidden="true"
                type="button"
                mat-ripple=""
                className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before mat-mdc-tab-header-pagination-disabled"
              >
                <div className="mat-mdc-tab-header-pagination-chevron"></div>
              </button>
              <div className="mat-mdc-tab-label-container">
                <div role="tablist" className="mat-mdc-tab-list">
                  <div className="mat-mdc-tab-labels">
                    <div
                      role="tab"
                      mattablabelwrapper=""
                      cdkmonitorelementfocus=""
                      className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted mdc-tab-indicator--active"
                      id="mat-tab-label-0-0"
                      aria-posinset="1"
                      aria-setsize="3"
                      aria-controls="mat-tab-content-0-0"
                      aria-selected="true"
                      aria-disabled="false"
                    >
                      <span className="mdc-tab__ripple"></span>
                      <div
                        mat-ripple=""
                        className="mat-ripple mat-mdc-tab-ripple"
                      ></div>
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">Market</span>
                      </span>
                      <span className="mdc-tab-indicator">
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                      </span>
                    </div>
                    <div
                      role="tab"
                      mattablabelwrapper=""
                      cdkmonitorelementfocus=""
                      className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator ng-star-inserted"
                      id="mat-tab-label-0-1"
                      aria-posinset="2"
                      aria-setsize="3"
                      aria-controls="mat-tab-content-0-1"
                      aria-selected="false"
                      aria-disabled="false"
                    >
                      <span className="mdc-tab__ripple"></span>
                      <div
                        mat-ripple=""
                        className="mat-ripple mat-mdc-tab-ripple"
                      ></div>
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">
                          <span
                            _ngcontent-ng-c942213636=""
                            matbadge="0"
                            matbadgeoverlap="false"
                            className="ng-star-inserted"
                          >
                            Open Bets (0)
                          </span>
                        </span>
                      </span>
                      <span className="mdc-tab-indicator">
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                      </span>
                    </div>
                    <div
                      role="tab"
                      mattablabelwrapper=""
                      cdkmonitorelementfocus=""
                      className="mdc-tab mat-mdc-tab mat-mdc-focus-indicator mat-mdc-tab-disabled ng-star-inserted"
                      id="mat-tab-label-0-2"
                      aria-posinset="3"
                      aria-setsize="3"
                      aria-controls="mat-tab-content-0-2"
                      aria-selected="false"
                      aria-disabled="true"
                    >
                      <span className="mdc-tab__ripple"></span>
                      <div
                        mat-ripple=""
                        className="mat-ripple mat-mdc-tab-ripple"
                      ></div>
                      <span className="mdc-tab__content">
                        <span className="mdc-tab__text-label">
                          <div
                            _ngcontent-ng-c942213636=""
                            className="livetv-tab ng-star-inserted"
                          >
                            <button
                              _ngcontent-ng-c942213636=""
                              mat-flat-button=""
                              className="livetv-btn rounded mdc-button mdc-button--unelevated mat-mdc-unelevated-button active mat-unthemed mat-mdc-button-base"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span
                                _ngcontent-ng-c942213636=""
                                className="material-icons"
                              >
                                live_tv
                              </span>
                              <span className="mdc-button__label"></span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c942213636=""
                              mat-flat-button=""
                              className="livetv-btn rounded mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span
                                _ngcontent-ng-c942213636=""
                                className="material-icons"
                              >
                                sports_score
                              </span>
                              <span className="mdc-button__label"></span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c942213636=""
                              mat-flat-button=""
                              className="livetv-btn rounded mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span
                                _ngcontent-ng-c942213636=""
                                className="material-icons"
                              >
                                bar_chart
                              </span>
                              <span className="mdc-button__label"></span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                          </div>{" "}
                        </span>
                      </span>
                      <span className="mdc-tab-indicator">
                        <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                aria-hidden="true"
                type="button"
                mat-ripple=""
                className="mat-ripple mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after mat-mdc-tab-header-pagination-disabled"
              >
                <div className="mat-mdc-tab-header-pagination-chevron"></div>
              </button>
            </div>
            <div className="mat-mdc-tab-body-wrapper">
              <div
                role="tabpanel"
                className="mat-mdc-tab-body mat-tab-body ng-tns-c737557735-1 mat-mdc-tab-body-active ng-star-inserted"
                id="mat-tab-content-0-0"
                aria-labelledby="mat-tab-label-0-0"
              >
                <div
                  cdkscrollable=""
                  className="mat-mdc-tab-body-content ng-tns-c737557735-1 ng-trigger ng-trigger-translateTab"
                  style={{ transform: "none" }}
                >
                  <div
                    _ngcontent-ng-c942213636=""
                    className="tab-body sports-tab ng-star-inserted"
                  >
                    <div
                      _ngcontent-ng-c942213636=""
                      className="live-match-screen ng-star-inserted"
                    >
                      <iframe
                        _ngcontent-ng-c942213636=""
                        style={{
                          width: "100%",
                          border: "0px",
                        }}
                        src={iFrameUrl}
                      ></iframe>
                    </div>
                    <div
                      _ngcontent-ng-c942213636=""
                      className="mkt-tab-section"
                    >
                      {match_odds && match_odds?.length > 0 && (
                        <MatchOdds match_odd={match_odds} />
                      )}

                      {bookmarker && bookmarker?.length > 0 && (
                        <Bookmaker bookmarker={bookmarker} />
                      )}
                      {bookmarker2 && bookmarker2?.length > 0 && (
                        <Bookmaker2 bookmarker2={bookmarker2} />
                      )}
                      {fancy1 && fancy1?.length > 0 && (
                        <Fancy normal={normal} />
                      )}

                      {fancy1 && fancy1?.length > 0 && (
                        <FancyOne FancyOne={fancy1} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div
                role="tabpanel"
                className="mat-mdc-tab-body mat-tab-body ng-tns-c737557735-2 ng-star-inserted"
                id="mat-tab-content-0-1"
                aria-labelledby="mat-tab-label-0-1"
              >
                <div
                  cdkscrollable=""
                  className="mat-mdc-tab-body-content ng-tns-c737557735-2 ng-trigger ng-trigger-translateTab"
                  style={{
                    transform: "translate3d(100%, 0px, 0px)",
                    minHeight: "1px",
                    visibility: "hidden",
                  }}
                ></div>
              </div>
              <div
                role="tabpanel"
                className="mat-mdc-tab-body mat-tab-body ng-tns-c737557735-3 ng-star-inserted"
                id="mat-tab-content-0-2"
                aria-labelledby="mat-tab-label-0-2"
              >
                <div
                  cdkscrollable=""
                  className="mat-mdc-tab-body-content ng-tns-c737557735-3 ng-trigger ng-trigger-translateTab"
                  style={{
                    transform: "translate3d(100%, 0px, 0px)",
                    minHeight: "1px",
                    visibility: "hidden",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  <!-- betslip start --> */}
      <div style={{ display: "none" }} className="cdk-overlay-container">
        <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
        <div
          className="cdk-global-overlay-wrapper"
          dir="ltr"
          style={{ justifyContent: "center", alignItems: "flex-end" }}
        >
          <div
            id="cdk-overlay-1"
            className="cdk-overlay-pane betslip-dialog"
            style={{
              width: "calc(100% - 30px)",
              maxWidth: "400px",
              position: "static",
              marginBottom: "10px",
            }}
          >
            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            ></div>
            <div
              className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
              id="mat-mdc-dialog-1"
              role="dialog"
              aria-modal="true"
              // style="--mat-dialog-transition-duration: 150ms"
            >
              <div className="mdc-dialog__container">
                <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                  <div _nghost-ng-c2459892542="" className="ng-star-inserted">
                    <div
                      _ngcontent-ng-c2459892542=""
                      className="betslip-modal forback"
                    >
                      {/* <!--forback // forlay --> */}
                      <div
                        _ngcontent-ng-c2459892542=""
                        className="modal-header"
                      >
                        <h2 _ngcontent-ng-c2459892542=""></h2>
                        <h2 _ngcontent-ng-c2459892542=""></h2>
                        <h2 _ngcontent-ng-c2459892542="">
                          Place Bet | BOOKMAKER
                        </h2>
                        <div
                          _ngcontent-ng-c2459892542=""
                          className="action-btns"
                        >
                          <button
                            _ngcontent-ng-c2459892542=""
                            mat-button=""
                            mat-dialog-close=""
                            className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                            mat-ripple-loader-uninitialized=""
                            mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            type="button"
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                            <mat-icon
                              _ngcontent-ng-c2459892542=""
                              role="img"
                              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                              aria-hidden="true"
                              data-mat-icon-type="font"
                            >
                              close
                            </mat-icon>
                            <span className="mdc-button__label"></span>
                            <span className="mat-mdc-focus-indicator"></span>
                            <span className="mat-mdc-button-touch-target"></span>
                          </button>
                        </div>
                      </div>
                      <div _ngcontent-ng-c2459892542="" className="modal-body">
                        <div
                          _ngcontent-ng-c2459892542=""
                          className="betvalue-wrap forback"
                        >
                          {/* <!--forback // forlay --> */}
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="betslip-toprow"
                          >
                            <h2 _ngcontent-ng-c2459892542="">
                              Sunrisers Eastern Cape
                            </h2>
                          </div>
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="bet-action-grid"
                          >
                            <div
                              _ngcontent-ng-c2459892542=""
                              className="bet-action-item"
                            >
                              <input
                                _ngcontent-ng-c2459892542=""
                                type="number"
                                readonly=""
                                numbersonly=""
                                name=""
                                className="rate-inp"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2459892542=""
                              className="bet-action-item"
                            >
                              <input
                                _ngcontent-ng-c2459892542=""
                                type="number"
                                numbersonly=""
                                name="betStake"
                                className="ng-untouched ng-pristine ng-valid"
                              />
                            </div>
                            <div
                              _ngcontent-ng-c2459892542=""
                              className="bet-action-item"
                            >
                              <button
                                _ngcontent-ng-c2459892542=""
                                mat-flat-button=""
                                className="slip-btn notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                                mat-ripple-loader-uninitialized=""
                                mat-ripple-loader-class-name="mat-mdc-button-ripple"
                                mat-ripple-loader-
                              >
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                <span className="mdc-button__label">
                                  Submit
                                </span>
                                <span className="mat-mdc-focus-indicator"></span>
                                <span className="mat-mdc-button-touch-target"></span>
                              </button>
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="error-wrap"
                          >
                            <p
                              _ngcontent-ng-c2459892542=""
                              className="spacer"
                            ></p>
                            <p
                              _ngcontent-ng-c2459892542=""
                              className="error-msg ng-star-inserted"
                            >
                              Min bet amount is 100
                            </p>
                          </div>
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="amt-chip-grid"
                          >
                            <button
                              _ngcontent-ng-c2459892542=""
                              mat-flat-button=""
                              className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">100</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c2459892542=""
                              mat-flat-button=""
                              className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">500</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c2459892542=""
                              mat-flat-button=""
                              className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">1000</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c2459892542=""
                              mat-flat-button=""
                              className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">5000</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c2459892542=""
                              mat-flat-button=""
                              className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">10000</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c2459892542=""
                              mat-flat-button=""
                              className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">50000</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c2459892542=""
                              mat-flat-button=""
                              className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">100000</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                          </div>
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="range-text-row"
                          >
                            <h2
                              _ngcontent-ng-c2459892542=""
                              style={{ textTransform: "none" }}
                            >
                              Range: 100 to 5L
                            </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="cdk-visually-hidden cdk-focus-trap-anchor"
              aria-hidden="true"
            ></div>
          </div>
        </div>
      </div>
      {/*   <!-- betslip end --> */}
    </>
  );
};

export default GameDetails;
