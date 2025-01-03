import useContextState from "../../../hooks/useContextState";
import { handlePlaceBet } from "../../../utils/handlePlaceBet";
import Suspended from "../Suspended";

/* eslint-disable react/no-unknown-property */
const FancyOne = ({
  FancyOne,
  setOpenBetSlip,
  setPlaceBetValues,
  exposer,
  setShowLoginWarn,
}) => {
  /* exposure */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  const { token } = useContextState();

  return (
    <div
      _ngcontent-ng-c942213636=""
      className={`fancy-card card-outer ng-star-inserted ${
        FancyOne[0]?.maxLiabilityPerBet == "1" ? "disableMo" : ""
      }`}
    >
      <div _ngcontent-ng-c942213636="" className="head-wrap">
        <h2 _ngcontent-ng-c942213636="" className="card-heading">
          {/* {FancyOne[0]?.eventTypeId == 4 ? FancyOne[0]?.tabGroupName : FancyOne[0]?.name} */}
          {FancyOne?.[0]?.btype == "FANCY" ? "FANCY" : FancyOne?.[0]?.name}
        </h2>
      </div>
      <div _ngcontent-ng-c942213636="" className="fancybody-header">
        <h3 _ngcontent-ng-c942213636="" className="card-title">
          Min: 100 | Max: {FancyOne[0]?.maxLiabilityPerBet}
        </h3>
        <div _ngcontent-ng-c942213636="" className="fb-stitle">
          <h3 _ngcontent-ng-c942213636="" className="back-bg">
            Back
          </h3>
          <h3 _ngcontent-ng-c942213636="" className="lay-bg">
            Lay
          </h3>
        </div>
      </div>
      <div _ngcontent-ng-c942213636="" className="card-body">
        {FancyOne?.map((games, i) => {
          const pnl = pnlBySelection?.filter(
            (pnl) => pnl?.MarketId === games?.id
          );
          return (
            <div
              key={i}
              _ngcontent-ng-c942213636=""
              className="data-wrap ng-star-inserted"
              id="7OverDSG"
            >
              <div _ngcontent-ng-c942213636="" className="teamlist-info">
                <h3 _ngcontent-ng-c942213636="" className="team-title">
                  {games?.name}
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
                          {pnl > 0 && pnl}
                        </p>
                      );
                    })}
                </h3>
                <button
                  _ngcontent-ng-c942213636=""
                  mat-flat-button=""
                  className="bar-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                  mat-ripple-loader-uninitialized=""
                  mat-ripple-loader-class-name="mat-mdc-button-ripple"
                >
                  <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                  <span className="mdc-button__label"></span>
                  <span className="mat-mdc-focus-indicator"></span>
                  <span className="mat-mdc-button-touch-target"></span>
                </button>
              </div>
              <div
                _ngcontent-ng-c942213636=""
                className="ladder-datawrap dropdown-content"
              >
                <p _ngcontent-ng-c942213636="" className="fancy-head">
                  7 Over DSG
                </p>
                <div _ngcontent-ng-c942213636="" className="ld-header">
                  <div _ngcontent-ng-c942213636="" className="ld-data">
                    <h3 _ngcontent-ng-c942213636="">Figure</h3>
                    <h3 _ngcontent-ng-c942213636="">Win/Loss</h3>
                  </div>
                </div>
                <div _ngcontent-ng-c942213636="" className="ld-body"></div>
                <div
                  _ngcontent-ng-c942213636=""
                  className="fancy-loader ng-star-inserted"
                >
                  <div _ngcontent-ng-c942213636="" className="loader"></div>
                </div>
              </div>
              {games?.status === "OPEN" ? (
                <div
                  _ngcontent-ng-c942213636=""
                  className="count-v-wrap ng-star-inserted"
                >
                  <button
                    onClick={() =>
                      handlePlaceBet(
                        games,
                        games?.runners[0],
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
                    className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button count-value back-count mat-unthemed mat-mdc-button-base"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span className="mdc-button__label">
                      <h4 _ngcontent-ng-c942213636="">
                        {games?.runners?.[0]?.back[0]?.price}
                      </h4>
                      <p _ngcontent-ng-c942213636="">
                        {games?.runners?.[0]?.back[0]?.size}
                      </p>{" "}
                    </span>
                    <span className="mat-mdc-focus-indicator"></span>
                    <span className="mat-mdc-button-touch-target"></span>
                  </button>
                  <button
                    onClick={() =>
                      handlePlaceBet(
                        games,
                        games?.runners[0],
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
                    className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button lay-count count-value mat-unthemed mat-mdc-button-base"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span className="mdc-button__label">
                      <h4 _ngcontent-ng-c942213636="">
                        {games?.runners?.[0]?.lay[0]?.price}
                      </h4>
                      <p _ngcontent-ng-c942213636="">
                        {games?.runners?.[0]?.lay[0]?.size}
                      </p>{" "}
                    </span>
                    <span className="mat-mdc-focus-indicator"></span>
                    <span className="mat-mdc-button-touch-target"></span>
                  </button>
                </div>
              ) : (
                <Suspended statusLabel={games?.statusLabel} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FancyOne;
