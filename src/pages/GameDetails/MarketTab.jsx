import { useEffect, useState } from "react";
import useContextState from "../../hooks/useContextState";
import Bookmaker from "./GameType/Bookmaker";
import Bookmaker2 from "./GameType/Bookmaker2";
import Fancy from "./GameType/Fancy";
import FancyOne from "./GameType/FancyOne";
import MatchOdds from "./GameType/MatchOdds";

/* eslint-disable react/no-unknown-property */
const MarketTab = ({ data, iFrameUrl, exposer, setOpenBetSlip }) => {
  const [match_odds, setMatch_odds] = useState([]);
  const [bookmarker, setBookmarker] = useState([]);
  const [bookmarker2, setBookmarker2] = useState([]);
  const [normal, setNormal] = useState([]);
  const [fancy1, setFancy1] = useState([]);
  const { setPlaceBetValues } = useContextState();

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

    // const overByOverFilter = data?.filter(
    //   (overByOver) =>
    //     overByOver.btype === "FANCY" &&
    //     overByOver.tabGroupName === "Over By Over"
    // );
    // setOverByOver(overByOverFilter);
  }, [data]);
  return (
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
            <div _ngcontent-ng-c942213636="" className="mkt-tab-section">
              {match_odds && match_odds?.length > 0 && (
                <MatchOdds
                  match_odd={match_odds}
                  setOpenBetSlip={setOpenBetSlip}
                  setPlaceBetValues={setPlaceBetValues}
                  exposer={exposer}
                />
              )}

              {bookmarker && bookmarker?.length > 0 && (
                <Bookmaker
                  bookmarker={bookmarker}
                  setOpenBetSlip={setOpenBetSlip}
                  setPlaceBetValues={setPlaceBetValues}
                  exposer={exposer}
                />
              )}
              {bookmarker2 && bookmarker2?.length > 0 && (
                <Bookmaker2
                  bookmarker2={bookmarker2}
                  setOpenBetSlip={setOpenBetSlip}
                  setPlaceBetValues={setPlaceBetValues}
                  exposer={exposer}
                />
              )}
              {fancy1 && fancy1?.length > 0 && (
                <Fancy
                  normal={normal}
                  setOpenBetSlip={setOpenBetSlip}
                  setPlaceBetValues={setPlaceBetValues}
                  exposer={exposer}
                />
              )}

              {fancy1 && fancy1?.length > 0 && (
                <FancyOne
                  FancyOne={fancy1}
                  setOpenBetSlip={setOpenBetSlip}
                  setPlaceBetValues={setPlaceBetValues}
                  exposer={exposer}
                />
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
  );
};

export default MarketTab;
