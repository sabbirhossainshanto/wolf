/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import useContextState from "../../../hooks/useContextState";
import { handlePlaceBet } from "../../../utils/handlePlaceBet";
import Suspended from "../Suspended";
import Login from "../../../components/modal/Login";

const HorseGreyhound = ({
  data,
  setOpenBetSlip,
  setPlaceBetValues,
  exposer,
  setShowLoginWarn,
}) => {
  const [errorLogin, setErrorLogin] = useState("");
  const { token, showLogin, setShowLogin, setGetToken } = useContextState();
  /* exposure */
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }

  return (
    <>
      {data?.map((games, i) => {
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
                  {games?.eventTypeId == 4 ? games?.btype : games?.name}
                </h2>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                ></div>
              </div>
              <div _ngcontent-ng-c942213636="" className="card-header">
                <h3 _ngcontent-ng-c942213636="" className="card-title">
                  {/* Min: {games?.minLiabilityPerBet} | Max:{" "}
                  {games?.maxLiabilityPerBet} */}
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
                      key={runner?.selectionId}
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
                        {runner?.status === "WINNER" && (
                          <h3
                            _ngcontent-ng-c942213636=""
                            className="team-title"
                          >
                            {runner?.name}
                          </h3>
                        )}
                      </div>
                      {games?.status === "OPEN" &&
                      runner?.status === "ACTIVE" ? (
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
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                            <span className="mdc-button__label">
                              <h4 _ngcontent-ng-c942213636="">
                                {runner?.ex?.availableToBack?.[0]?.price}
                              </h4>
                              <p _ngcontent-ng-c942213636="">
                                {runner?.ex?.availableToBack?.[0]?.size}
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
                          >
                            <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                            <span className="mdc-button__label">
                              <h4 _ngcontent-ng-c942213636="">
                                {runner?.ex?.availableToLay?.[0]?.price}
                              </h4>
                              <p _ngcontent-ng-c942213636="">
                                {runner?.ex?.availableToLay?.[0]?.price}
                              </p>{" "}
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
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          errorLogin={errorLogin}
          setErrorLogin={setErrorLogin}
          setGetToken={setGetToken}
        />
      )}
    </>
  );
};

export default HorseGreyhound;
