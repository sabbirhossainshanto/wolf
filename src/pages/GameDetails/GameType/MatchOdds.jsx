/* eslint-disable react/no-unknown-property */
import { handlePlaceBet } from "../../../utils/handlePlaceBet";
const MatchOdds = ({
  match_odd,
  setOpenBetSlip,
  setPlaceBetValues,
  exposer,
}) => {
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <>
      {match_odd?.map((games, i) => {
        console.log(games);
        return (
          <div key={i} _ngcontent-ng-c942213636="" className="ng-star-inserted">
            <div
              _ngcontent-ng-c942213636=""
              className={`bookmaker-card card-outer  ${
                games?.maxLiabilityPerBet == "1" ? "disableMo" : ""
              }`}
              id="NXDHP0C"
            >
              <div _ngcontent-ng-c942213636="" className="head-wrap">
                <h2 _ngcontent-ng-c942213636="" className="card-heading">
                  {games?.name.toUpperCase()}
                </h2>
                {/* <button
                  _ngcontent-ng-c942213636=""
                  mat-button=""
                  mat-ripple-loader-uninitialized=""
                  mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  className="mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                  mat-ripple-loader-
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                  <span className="mdc-button__label">Cashout</span>
                  <span className="mat-mdc-focus-indicator"></span>
                  <span className="mat-mdc-button-touch-target"></span>
                </button> */}
              </div>
              <div _ngcontent-ng-c942213636="" className="card-header">
                <h3 _ngcontent-ng-c942213636="" className="card-title">
                  Min: {games?.minLiabilityPerBet} | Max: {games?.maxLiabilityPerBet}
                </h3>
                <div _ngcontent-ng-c942213636="" className="lay-back-wrap">
                  <h3 _ngcontent-ng-c942213636="" className="back-bg">
                    Back
                  </h3>
                  <h3 _ngcontent-ng-c942213636="" className="lay-bg">
                    Lay
                  </h3>
                </div>
              </div>
              <div _ngcontent-ng-c942213636="" className="card-body">
                {games?.runners?.map((runner) => {
                  const pnl = pnlBySelection?.filter(
                    (pnl) => pnl?.RunnerId === runner?.id
                  );
                  return (
                    <div
                      key={runner?.id}
                      _ngcontent-ng-c942213636=""
                      className="data-wrap ng-star-inserted"
                    >
                      <div
                        _ngcontent-ng-c942213636=""
                        className="teamlist-info flex-row-left"
                      >
                        <h3 _ngcontent-ng-c942213636="" className="team-title">
                          {runner?.name}
                        </h3>
                        {pnl &&
                          pnl?.map(({ pnl, MarketId }, i) => {
                            return (
                              <p
                                _ngcontent-ng-c942213636=""
                                // onClick={() => handleLader(MarketId)}
                                key={i}
                                className={`ng-star-inserted ${
                                  pnl > 0 ? "text-success" : "text-danger"
                                }`}
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                {pnl}
                              </p>
                            );
                          })}
                      </div>
                      <div
                        _ngcontent-ng-c942213636=""
                        className="count-v-wrap ng-star-inserted"
                      >
                        <button
                          onClick={() =>
                            handlePlaceBet(
                              games,
                              runner,
                              "back",
                              setOpenBetSlip,
                              setPlaceBetValues,
                              pnlBySelection
                            )
                          }
                          _ngcontent-ng-c942213636=""
                          mat-flat-button=""
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                          className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button back-count count-value mat-unthemed mat-mdc-button-base ng-star-inserted"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span className="mdc-button__label">
                            <h4 _ngcontent-ng-c942213636="">
                              {runner?.back[0]?.price}
                            </h4>
                            <p _ngcontent-ng-c942213636="">
                              {runner?.back[0]?.size}
                            </p>{" "}
                          </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                        <button
                          onClick={() =>
                            handlePlaceBet(
                              games,
                              runner,
                              "lay",
                              setOpenBetSlip,
                              setPlaceBetValues,
                              pnlBySelection
                            )
                          }
                          _ngcontent-ng-c942213636=""
                          mat-flat-button=""
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                          className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button count-value lay-count mat-unthemed mat-mdc-button-base ng-star-inserted"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span className="mdc-button__label">
                            <h4 _ngcontent-ng-c942213636="">
                              {runner?.lay[0]?.price}
                            </h4>
                            <p _ngcontent-ng-c942213636="">
                              {runner?.lay[0]?.size}
                            </p>{" "}
                          </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MatchOdds;
