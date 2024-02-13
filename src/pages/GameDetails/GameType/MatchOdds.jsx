/* eslint-disable react/no-unknown-property */
import { handlePlaceBet } from "../../../utils/handlePlaceBet";
const MatchOdds = ({ match_odd, setOpenBetSlip, setPlaceBetValues }) => {
  // const handlePlaceBet = (item, runner, betType) => {
  //   setOpenBetSlip(true);
  //   setPlaceBetValues({});
  //   setPlaceBetValues({
  //     price: betType === "back" ? runner?.back[0].price : runner?.lay[0].price,
  //     side: betType === "back" ? 0 : 1,
  //     selectionId: runner?.id,
  //     btype: item?.btype,
  //     eventTypeId: item?.eventTypeId,
  //     betDelay: item?.betDelay,
  //     marketId: item?.id,
  //     lay: betType === "lay",
  //     back: betType === "back",
  //     selectedBetName: runner?.name,
  //     name: item.runners.map((runner) => runner.name),
  //     runnerId: item.runners.map((runner) => runner.id),
  //     isWeak: item?.isWeak,
  //     maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
  //     isBettable: item?.isBettable,
  //     maxLiabilityPerBet: item?.maxLiabilityPerBet,
  //   });
  // };

  return (
    <>
      {match_odd?.map((games, i) => {
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
                <button
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
                </button>
              </div>
              <div _ngcontent-ng-c942213636="" className="card-header">
                <h3 _ngcontent-ng-c942213636="" className="card-title">
                  Min: 0 | Max: {games?.maxLiabilityPerBet}
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
                        <p
                          _ngcontent-ng-c942213636=""
                          class="text-success ng-star-inserted"
                        >
                          -48
                        </p>
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
                              setPlaceBetValues
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
                              setPlaceBetValues
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
