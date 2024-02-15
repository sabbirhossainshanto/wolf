import { useState } from "react";
import { useParams } from "react-router-dom";
import BetSlip from "../../components/modal/BetSlip";
import useContextState from "../../hooks/useContextState";
import Success from "../../components/ui/Notification/Success";
import useCurrentBets from "../../hooks/useCurrentBets";
import useExposer from "../../hooks/useExposer";
import useIFrame from "../../hooks/useIFrame";
import useGameDetails from "../../hooks/useGameDetails";
import Tabs from "./Tabs";
import OpenBetsTab from "./OpenBetsTab";
import MarketTab from "./MarketTab";

/* eslint-disable react/no-unknown-property */
const GameDetails = () => {
  const { eventId, eventTypeId } = useParams();
  const [openBetSlip, setOpenBetSlip] = useState(false);
  const { placeBetValues } = useContextState();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [tabs, setTabs] = useState("market");
  const { myBets, refetchCurrentBets } = useCurrentBets(eventId);
  const { exposer, refetchExposure } = useExposer(eventId);
  const { iFrameUrl } = useIFrame(eventTypeId, eventId);
  const { data } = useGameDetails(eventTypeId, eventId);

  return (
    <>
      <div _ngcontent-ng-c942213636="" className="page-body">
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
            <Tabs myBets={myBets} setTabs={setTabs} tabs={tabs} />
            {tabs === "market" && (
              <MarketTab
                data={data}
                setOpenBetSlip={setOpenBetSlip}
                exposer={exposer}
                iFrameUrl={iFrameUrl}
              />
            )}
            {tabs === "openBets" && <OpenBetsTab 
            myBets={myBets}
            />}
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
