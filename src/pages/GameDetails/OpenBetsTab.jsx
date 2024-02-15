/* eslint-disable react/no-unknown-property */
const OpenBetsTab = ({ myBets }) => {
  return (
    <div className="mat-mdc-tab-body-wrapper">
      <div
        role="tabpanel"
        className="mat-mdc-tab-body mat-tab-body ng-tns-c737557735-111 ng-star-inserted mat-mdc-tab-body-active"
        id="mat-tab-content-20-1"
        aria-labelledby="mat-tab-label-20-1"
      >
        <div
          cdkscrollable=""
          className="mat-mdc-tab-body-content ng-tns-c737557735-111 ng-trigger ng-trigger-translateTab"
          style={{ transform: "none" }}
        >
          <div
            _ngcontent-ng-c942213636=""
            ngskiphydration=""
            mat-stretch-tabs="true"
            mat-align-tabs="center"
            disablepagination="true"
            className="mat-mdc-tab-group mat-tab-group bethistory-tabs mat-primary mat-mdc-tab-group-stretch-tabs ng-star-inserted"
            // style="--mat-tab-animation-duration: 500ms;"
          >
            <div className="mat-mdc-tab-body-wrapper">
              <div
                role="tabpanel"
                className="mat-mdc-tab-body mat-tab-body ng-tns-c737557735-107 ng-star-inserted mat-mdc-tab-body-active"
                id="mat-tab-content-21-0"
                aria-labelledby="mat-tab-label-21-0"
              >
                <div
                  cdkscrollable=""
                  className="mat-mdc-tab-body-content ng-tns-c737557735-107 ng-trigger ng-trigger-translateTab"
                  style={{ transform: "none" }}
                >
                  {myBets?.length > 0 ? (
                    <div
                      _ngcontent-ng-c942213636=""
                      id="betSlipAcc"
                      className="card-accordion card-outer betslip-card ng-star-inserted"
                    >
                      <div _ngcontent-ng-c942213636="" className="card-body">
                        <div
                          _ngcontent-ng-c942213636=""
                          className="betslip-data-wrap"
                        >
                          <div
                            _ngcontent-ng-c942213636=""
                            className="betslip-title"
                          >
                            <h3 _ngcontent-ng-c942213636="">Bet History</h3>
                            <div
                              _ngcontent-ng-c942213636=""
                              className="odds-stake-wrap"
                            >
                              <h3 _ngcontent-ng-c942213636="">Odds</h3>
                              <h3 _ngcontent-ng-c942213636="">Stake</h3>
                            </div>
                          </div>
                          <div
                            _ngcontent-ng-c942213636=""
                            className="betslip-databody"
                          >
                            {myBets?.map((bet, i) => {
                              console.log(bet);
                              return (
                                <div
                                  key={i}
                                  _ngcontent-ng-c942213636=""
                                  className={`betslip-datalist  ng-star-inserted ${
                                    bet?.betType === "Back"
                                      ? "back-list-row"
                                      : "lay-list-row"
                                  }`}
                                >
                                  <div
                                    _ngcontent-ng-c942213636=""
                                    className="bs-gameinfo"
                                  >
                                    <div
                                      _ngcontent-ng-c942213636=""
                                      className="game-type"
                                    >
                                      <p
                                        _ngcontent-ng-c942213636=""
                                        className="icon-bookmaker"
                                      >
                                        B{" "}
                                      </p>
                                    </div>
                                    <div
                                      _ngcontent-ng-c942213636=""
                                      className="bs-content"
                                    >
                                      <h3 _ngcontent-ng-c942213636="">
                                        {bet?.eventName}
                                      </h3>
                                      <p _ngcontent-ng-c942213636="">
                                        {bet?.placeDate}
                                      </p>
                                      <p _ngcontent-ng-c942213636=""></p>
                                    </div>
                                  </div>
                                  <div
                                    _ngcontent-ng-c942213636=""
                                    className="odds-stake-wrap"
                                  >
                                    <h3 _ngcontent-ng-c942213636="">
                                      {bet?.userRate}
                                    </h3>
                                    <h3 _ngcontent-ng-c942213636="">
                                      {bet?.amount}
                                    </h3>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      _ngcontent-ng-c3799324686=""
                      className="no-data ng-star-inserted"
                    >
                      <p _ngcontent-ng-c3799324686="">
                        No bets placed yet, Place your bet now!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenBetsTab;
