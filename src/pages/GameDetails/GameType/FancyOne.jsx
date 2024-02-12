/* eslint-disable react/no-unknown-property */
const FancyOne = ({ FancyOne,setOpenBetSlip, setPlaceBetValues  }) => {
  const handlePlaceBackBet = (item, runner) => {
    setOpenBetSlip(true);
    setPlaceBetValues({});
    setPlaceBetValues({
      price: runner?.back[0].price,
      side: 0,
      selectionId: runner?.id,
      btype: item?.btype,
      eventTypeId: item?.eventTypeId,
      betDelay: item?.betDelay,
      marketId: item?.id,
      back: true,
      name: item.runners.map((runner) => runner.name),
      runnerId: item.runners.map((runner) => runner.id),
      selectedBetName: runner?.name,
      // pnl: updatedPnl,
      isWeak: item?.isWeak,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      isBettable: item?.isBettable,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
    });
  };

  const handlePlaceLayBets = (item, runner) => {
    setOpenBetSlip(true);
    setPlaceBetValues({});
    setPlaceBetValues({
      price: runner?.lay[0].price,
      side: 1,
      selectionId: runner?.id,
      btype: item?.btype,
      eventTypeId: item?.eventTypeId,
      betDelay: item?.betDelay,
      marketId: item?.id,
      // pnl: updatedPnl,
      lay: true,
      selectedBetName: runner?.name,
      name: item.runners.map((runner) => runner.name),
      runnerId: item.runners.map((runner) => runner.id),
      isWeak: item?.isWeak,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      isBettable: item?.isBettable,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
    });
  };

  return (
    <div
      _ngcontent-ng-c942213636=""
      className={`fancy-card card-outer ng-star-inserted ${
        FancyOne[0]?.maxLiabilityPerBet == "1" ? "disableMo" : ""
      }`}
    >
      <div _ngcontent-ng-c942213636="" className="head-wrap">
        <h2 _ngcontent-ng-c942213636="" className="card-heading">
          {FancyOne[0]?.tabGroupName}
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
                </h3>
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
                  onClick={()=> handlePlaceBackBet(games,games?.runners[0])}
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
                  onClick={()=> handlePlaceLayBets(games,games?.runners[0])}
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
                <div
                  _ngcontent-ng-c942213636=""
                  className="suspended-wrap ng-star-inserted"
                >
                  <h4 _ngcontent-ng-c942213636="">SUSPENDED</h4>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FancyOne;
