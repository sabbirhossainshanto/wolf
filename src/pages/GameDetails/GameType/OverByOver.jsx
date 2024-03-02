import { useRef, useState } from "react";
import { API } from "../../../api";
import UseEncryptData from "../../../hooks/UseEncryptData";
import UseTokenGenerator from "../../../hooks/UseTokenGenerator";
import useContextState from "../../../hooks/useContextState";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import Suspended from "../Suspended";

/* eslint-disable react/no-unknown-property */
const OverByOver = ({
  normal,
  setOpenBetSlip,
  setPlaceBetValues,
  exposer,
  setShowLoginWarn,
}) => {
  const [showLadder, setShowLadder] = useState(false);
  const [ladderData, setLadderData] = useState([]);
  const { token } = useContextState();
  const [ladderTitle, setLadderTitle] = useState("");
  const [ladderMarketId, setLadderMarketId] = useState("");

  /* Handle place  bet */
  const handlePlaceBet = (item, runner, betType) => {
    if (token) {
      setOpenBetSlip(true);
      setPlaceBetValues({});
      setPlaceBetValues({
        price: betType === "back" ? runner?.back[0].line : runner?.lay[0].line,
        side: betType === "back" ? 0 : 1,
        selectionId: runner?.id,
        btype: item?.btype,
        eventTypeId: item?.eventTypeId,
        betDelay: item?.betDelay,
        marketId: item?.id,
        lay: betType === "lay",
        back: betType === "back",
        selectedBetName: runner?.name,
        name: item.runners.map((runner) => runner.name),
        runnerId: item.runners.map((runner) => runner.id),
        isWeak: item?.isWeak,
        maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
        isBettable: item?.isBettable,
        maxLiabilityPerBet: item?.maxLiabilityPerBet,
      });
    } else {
      setShowLoginWarn("Please log in to play.");
    }
  };
  /* exposure */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  /* Ladder api */
  const handleLadder = (marketId) => {
    setLadderTitle("");
    /* find game title for ladder modal */
    const games = normal?.find((item) => item?.id === marketId);
    setLadderTitle(games?.title);
    setLadderMarketId(marketId);
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData(generatedToken);
    setShowLadder(true);
    fetch(`${API.ladder}/${marketId}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setLadderData(data.result);
        }
      });
  };
  /* close ladder modal click outside */
  const ladderRef = useRef();
  useCloseModalClickOutside(ladderRef, () => {
    setShowLadder(false);
  });

  return (
    <>
      <div
        _ngcontent-ng-c942213636=""
        className={`fancy-card card-outer ng-star-inserted ${
          normal[0]?.maxLiabilityPerBet == "1" ? "disableMo" : ""
        }`}
      >
        <div _ngcontent-ng-c942213636="" className="head-wrap">
          <h2 _ngcontent-ng-c942213636="" className="card-heading">
          {normal[0]?.eventTypeId == 4 ? normal[0]?.tabGroupName : normal[0]?.name}
          </h2>
        </div>
        <div _ngcontent-ng-c942213636="" className="fancybody-header">
          <h3 _ngcontent-ng-c942213636="" className="card-title">
            Min: 100 | Max: {normal[0]?.maxLiabilityPerBet}
          </h3>
          <div _ngcontent-ng-c942213636="" className="fb-stitle">
            <h3 _ngcontent-ng-c942213636="" className="lay-bg">
              No
            </h3>
            <h3 _ngcontent-ng-c942213636="" className="back-bg">
              Yes
            </h3>
          </div>
        </div>
        <div _ngcontent-ng-c942213636="" className="card-body">
          {normal?.map((games, i) => {
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
                      pnl?.map(({ pnl, MarketId }, i) => {
                        return (
                          <p
                            onClick={() => handleLadder(MarketId)}
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
                  </h3>
                  {pnl &&
                    pnl?.map(({ MarketId }, i) => {
                      return (
                        <button
                          onClick={() => handleLadder(MarketId)}
                          key={i}
                          _ngcontent-ng-c942213636=""
                          mat-flat-button=""
                          className="bar-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span className="mdc-button__label">
                            <img
                              onClick={() => handleLadder(MarketId)}
                              key={i}
                              _ngcontent-ng-c942213636=""
                              alt=""
                              className="ladder-img"
                              src="https://ss.manage63.com/bmk-wl/commonAssets/ladder.svg"
                            />
                          </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                      );
                    })}
                </div>
                {/* ladder */}
                {pnl &&
                  showLadder &&
                  pnl?.map(({ MarketId }, i) => {
                    return (
                      <>
                        {ladderMarketId === MarketId && (
                          <div
                            ref={ladderRef}
                            key={i}
                            _ngcontent-ng-c3799324686=""
                            className="ladder-datawrap dropdown-content show"
                            style={{ bottom: "auto" }}
                          >
                            <p
                              _ngcontent-ng-c3799324686=""
                              className="fancy-head"
                            >
                              {ladderTitle}
                            </p>
                            <div
                              _ngcontent-ng-c3799324686=""
                              className="ld-header"
                            >
                              <div
                                _ngcontent-ng-c3799324686=""
                                className="ld-data"
                              >
                                <h3 _ngcontent-ng-c3799324686="">Score</h3>
                                <h3 _ngcontent-ng-c3799324686="">Win/Loss</h3>
                              </div>
                            </div>
                            <div
                              _ngcontent-ng-c3799324686=""
                              className="ld-body"
                            >
                              {ladderData?.map(
                                ({ exposure, start, end }, idx) => {
                                  return (
                                    <div
                                      key={idx}
                                      _ngcontent-ng-c3799324686=""
                                      className="ld-data ng-star-inserted"
                                    >
                                      <p _ngcontent-ng-c3799324686="">
                                        {" "}
                                        {start}-{end}
                                      </p>
                                      <p
                                        _ngcontent-ng-c3799324686=""
                                        className={`${
                                          exposure > 0
                                            ? "text-success"
                                            : "text-danger"
                                        }`}
                                      >
                                        {exposure}
                                      </p>
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    );
                  })}

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
                        handlePlaceBet(games, games?.runners[0], "lay")
                      }
                      _ngcontent-ng-c942213636=""
                      mat-flat-button=""
                      mat-ripple-loader-uninitialized=""
                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                      className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button count-value lay-count mat-unthemed mat-mdc-button-base"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                      <span className="mdc-button__label">
                        <h4 _ngcontent-ng-c942213636="">
                          {games?.runners?.[0]?.lay[0]?.line}
                        </h4>
                        <p _ngcontent-ng-c942213636="">
                          {games?.runners?.[0]?.lay[0]?.price}
                        </p>{" "}
                      </span>
                      <span className="mat-mdc-focus-indicator"></span>
                      <span className="mat-mdc-button-touch-target"></span>
                    </button>
                    <button
                      onClick={() =>
                        handlePlaceBet(games, games?.runners[0], "back")
                      }
                      _ngcontent-ng-c942213636=""
                      mat-flat-button=""
                      mat-ripple-loader-uninitialized=""
                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                      className="mdc-button mdc-button--unelevated mat-mdc-unelevated-button back-count count-value mat-unthemed mat-mdc-button-base"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                      <span className="mdc-button__label">
                        <h4 _ngcontent-ng-c942213636="">
                          {games?.runners?.[0]?.back[0]?.line}
                        </h4>
                        <p _ngcontent-ng-c942213636="">
                          {games?.runners?.[0]?.back[0]?.price}
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
    </>
  );
};

export default OverByOver;
