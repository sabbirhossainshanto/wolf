import useContextState from "../../../hooks/useContextState";
import { handlePlaceBet } from "../../../utils/handlePlaceBet";
import Suspended from "../Suspended";

/* eslint-disable react/no-unknown-property */
const Bookmaker2 = ({
  bookmarker2,
  setOpenBetSlip,
  setPlaceBetValues,
  exposer,
  setShowLoginWarn,
}) => {
  const { token } = useContextState();
  /* exposure */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  return (
    <>
      {bookmarker2?.map((games, i) => {
        return (
          <div key={i} _ngcontent-ng-c942213636="" className="ng-star-inserted">
            <div
              _ngcontent-ng-c942213636=""
              className={`bookmaker-card card-outer ${
                games?.maxLiabilityPerBet == "1" ? "disableMo" : ""
              }`}
              id="YFXXHB0"
            >
              <div _ngcontent-ng-c942213636="" className="head-wrap">
                <h2
                  _ngcontent-ng-c942213636=""
                  className="card-heading ng-star-inserted"
                >
                  
                  {/* { games?.eventTypeId == 4 ? games?.btype : games?.name} */}
                  {games?.name}
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
                  Min: 100 | Max: {games?.maxLiabilityPerBet}
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
                          pnl?.map(({ pnl }, i) => {
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
                      {games?.status === "OPEN" && runner?.status === "OPEN" ? (
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
                                  pnlBySelection,
                                  setShowLoginWarn,
                                  token
                                )
                              }
                              _ngcontent-ng-c942213636=""
                              mat-flat-button=""
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                              className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button back-count count-value mat-unthemed mat-mdc-button-base ng-star-inserted"
                              id="d67e0042e8277600f888897d3a4a8849:f05bb1104e8a7ec43d261c1c0e408764back1"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">
                                <h4 _ngcontent-ng-c942213636="">
                                  {runner?.back[0]?.price}
                                </h4>{" "}
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
                                pnlBySelection,
                                setShowLoginWarn,
                                token
                              )
                            }
                            _ngcontent-ng-c942213636=""
                            mat-flat-button=""
                            mat-ripple-loader-uninitialized=""
                            mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button count-value lay-count mat-unthemed mat-mdc-button-base ng-star-inserted"
                            id="d67e0042e8277600f888897d3a4a8849:f05bb1104e8a7ec43d261c1c0e408764lay1"
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                            <span className="mdc-button__label">
                              <h4 _ngcontent-ng-c942213636="">
                                {runner?.lay[0]?.price}
                              </h4>{" "}
                            </span>
                            <span className="mat-mdc-focus-indicator"></span>
                            <span className="mat-mdc-button-touch-target"></span>
                          </button>
                      
                        </div>
                      ) : (
                        <Suspended statusLabel={runner?.statusLable} />
                      )}
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

export default Bookmaker2;
