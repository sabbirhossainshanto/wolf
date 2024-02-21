/* eslint-disable react/no-unknown-property */

const Tabs = ({
  myBets,
  setTabs,
  tabs,
  setShowIFrame,
  showIFrame,
  showScore,
  setShowScore,
  match_odds
}) => {
  return (
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
              onClick={() => setTabs("market")}
              role="tab"
              mattablabelwrapper=""
              cdkmonitorelementfocus=""
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted ${
                tabs === "market" ? "mdc-tab-indicator--active" : ""
              }`}
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
              onClick={() => setTabs("openBets")}
              role="tab"
              mattablabelwrapper=""
              cdkmonitorelementfocus=""
              className={`mdc-tab mat-mdc-tab mat-mdc-focus-indicator mdc-tab--active ng-star-inserted ${
                tabs === "openBets" ? "mdc-tab-indicator--active" : ""
              }`}
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
                    Open Bets ({myBets?.length})
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
                      onClick={() => setShowIFrame((prev) => !prev)}
                      _ngcontent-ng-c942213636=""
                      mat-flat-button=""
                      className={`livetv-btn rounded mdc-button mdc-button--unelevated mat-mdc-unelevated-button ${
                        showIFrame && match_odds?.length > 0 &&  match_odds[0]?.hasVideo ? "active" : ""
                      } mat-unthemed mat-mdc-button-base`}
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
                      onClick={() => setShowScore((prev) => !prev)}
                      _ngcontent-ng-c942213636=""
                      mat-flat-button=""
                      className={`livetv-btn rounded mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ${
                        showScore ? "active" : ""
                      }`}
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
                    {/* <button
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
                    </button> */}
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
  );
};

export default Tabs;
