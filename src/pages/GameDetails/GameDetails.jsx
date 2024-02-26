import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BetSlip from "../../components/modal/BetSlip";
import useContextState from "../../hooks/useContextState";
import Success from "../../components/ui/Notification/Success";
import useCurrentBets from "../../hooks/useCurrentBets";
import useExposer from "../../hooks/useExposer";
import useIFrame from "../../hooks/useIFrame";
// import useGameDetails from "../../hooks/useGameDetails";
import Tabs from "./Tabs";
import OpenBetsTab from "./OpenBetsTab";
import MarketTab from "./MarketTab";
import Warning from "../../components/ui/Notification/Warning";
import axios from "axios";
import { API, Settings } from "../../api";
/* eslint-disable react/no-unknown-property */
const GameDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  /* get params */
  const { eventId, eventTypeId } = useParams();
  const [openBetSlip, setOpenBetSlip] = useState(false);
  const { placeBetValues, token } = useContextState();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [tabs, setTabs] = useState("market");
  /* get my bets */
  const { myBets, refetchCurrentBets } = useCurrentBets(eventId);
  /* get exposure */
  const { exposer, refetchExposure } = useExposer(eventId);

  // const { data} = useGameDetails(eventTypeId, eventId);
  const [showIFrame, setShowIFrame] = useState(true);
  const [showScore, setShowScore] = useState(false);
  const [match_odds, setMatch_odds] = useState([]);
  /* has video boolean for iframe api enable or not*/
  const hasVideo = match_odds?.length > 0 && match_odds[0]?.hasVideo;
  /* get iframe */
  const { iFrameUrl } = useIFrame(eventTypeId, eventId, hasVideo);
  const [showLoginWarn, setShowLoginWarn] = useState("");

  /* get game details */
  useEffect(() => {
    const getGameDetails = async () => {
      const res = await axios.get(`${API.odds}/${eventTypeId}/${eventId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.success) {
        setLoading(false);
        setData(data?.result);
      }
    };
    getGameDetails();
    /* refetch after some millisecond */
    const intervalId = setInterval(getGameDetails, Settings.interval);
    return () => clearInterval(intervalId);
  }, [eventId, eventTypeId, token]);


  if (loading) {
    return;
  }
 
  return (
    <>
      <div _ngcontent-ng-c942213636="" className="page-body">
        {/* Warning modal */}
        {showLoginWarn && (
          <Warning message={showLoginWarn} setMessage={setShowLoginWarn} />
        )}
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
            <Tabs
              myBets={myBets}
              setTabs={setTabs}
              tabs={tabs}
              setShowIFrame={setShowIFrame}
              showIFrame={showIFrame}
              showScore={showScore}
              setShowScore={setShowScore}
              match_odds={match_odds}
            />
            {tabs === "market" && (
              <MarketTab
                data={data}
                setOpenBetSlip={setOpenBetSlip}
                exposer={exposer}
                iFrameUrl={iFrameUrl}
                showIFrame={showIFrame}
                showScore={showScore}
                setShowScore={setShowScore}
                match_odds={match_odds}
                setMatch_odds={setMatch_odds}
                setShowLoginWarn={setShowLoginWarn}
              />
            )}
            {tabs === "openBets" && <OpenBetsTab myBets={myBets} />}
          </div>
        </div>
      </div>

      {/*  <!-- betslip start --> */}
      {openBetSlip && (
        <BetSlip
          setOpenBetSlip={setOpenBetSlip}
          placeBetValues={placeBetValues}
          refetchExposure={refetchExposure}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
          refetchCurrentBets={refetchCurrentBets}
        />
      )}
      {errorMessage && (
        <Success
          message={errorMessage}
          success={false}
          setMessage={setErrorMessage}
        />
      )}
      {successMessage && (
        <Success
          message={successMessage}
          success={true}
          setMessage={setSuccessMessage}
        />
      )}
      {/*   <!-- betslip end --> */}
    </>
  );
};

export default GameDetails;
