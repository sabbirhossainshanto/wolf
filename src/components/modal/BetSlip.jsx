import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API } from "../../api";
import useContextState from "../../hooks/useContextState";
import useBalance from "../../hooks/useBalance";
import { FaSpinner } from "react-icons/fa";
/* eslint-disable react/no-unknown-property */
const BetSlip = ({
  setOpenBetSlip,
  placeBetValues,
  refetchExposure,
  setSuccessMessage,
  setErrorMessage,
  refetchCurrentBets
}) => {
  const { token } = useContextState();
  const betSlipRef = useRef();
  useCloseModalClickOutside(betSlipRef, () => {
    setOpenBetSlip(false);
  });
  const buttonGameValue = JSON.parse(localStorage.getItem("buttonValue"));
  const [totalSize, setTotalSize] = useState("");
  const [loader, setLoader] = useState(false);
  const { refetchBalance } = useBalance();
  const [stakeErr, setStakeErr] = useState("");

  /* Handle bets */
  const handleOrderBets = () => {
    if (totalSize < 100) {
      return setStakeErr("Min bet amount is 100");
    }
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData([
      {
        betDelay: placeBetValues?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: placeBetValues?.price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: totalSize,
        token: generatedToken,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
      },
    ]);
    setLoader(true);
    fetch(API.order, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(encryptedData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.success) {
          refetchExposure();
          refetchBalance();
          refetchCurrentBets()
          setLoader(false);
          setOpenBetSlip(false);
          setSuccessMessage("Bet Place Successfully !");
        } else {
          setErrorMessage(data?.error?.status[0]?.description);
          setLoader(false);
          setOpenBetSlip(false);
          refetchExposure();
          refetchBalance();
          refetchCurrentBets()
        }
      });
  };

  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-1"
          className="cdk-overlay-pane betslip-dialog"
          style={{
            width: "calc(100% - 30px)",
            maxWidth: "400px",
            position: "static",
            marginBottom: "10px",
          }}
          ref={betSlipRef}
        >
          <div
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
          <div
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-1"
            role="dialog"
            aria-modal="true"
            // style="--mat-dialog-transition-duration: 150ms;"
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div _nghost-ng-c2459892542="" className="ng-star-inserted">
                  <div
                    _ngcontent-ng-c2459892542=""
                    className={`betslip-modal ${
                      placeBetValues?.back ? "forback" : "forlay"
                    }`}
                  >
                    {/*  <!--forback // forlay --> */}
                    <div _ngcontent-ng-c2459892542="" className="modal-header">
                      <h2 _ngcontent-ng-c2459892542=""></h2>
                      <h2 _ngcontent-ng-c2459892542=""></h2>
                      <h2 _ngcontent-ng-c2459892542="">
                        Place Bet | {placeBetValues?.btype}
                      </h2>
                      <div _ngcontent-ng-c2459892542="" className="action-btns">
                        <button
                          onClick={() => setOpenBetSlip(false)}
                          _ngcontent-ng-c2459892542=""
                          mat-button=""
                          mat-dialog-close=""
                          className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                          type="button"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span
                            style={{ marginLeft: "7px" }}
                            _ngcontent-ng-c2459892542=""
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            close
                          </span>
                          <span className="mdc-button__label"></span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                      </div>
                    </div>
                    <div _ngcontent-ng-c2459892542="" className="modal-body">
                      <div
                        _ngcontent-ng-c2459892542=""
                        className={`betvalue-wrap ${
                          placeBetValues?.back ? "forback" : "forlay"
                        }`}
                      >
                        {loader && (
                          <div id="loader-section">
                            <div id="load-inner">
                              <FaSpinner size={20} />
                            </div>
                          </div>
                        )}{" "}
                        {/* <!--forback // forlay --> */}
                        <div
                          _ngcontent-ng-c2459892542=""
                          className="betslip-toprow"
                        >
                          <h2 _ngcontent-ng-c2459892542="">
                            {placeBetValues?.selectedBetName}{" "}
                          </h2>
                        </div>
                        <div
                          _ngcontent-ng-c2459892542=""
                          className="bet-action-grid"
                        >
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="bet-action-item"
                          >
                            <input
                              _ngcontent-ng-c2459892542=""
                              type="number"
                          
                              numbersonly=""
                              name=""
                              className="rate-inp"
                              defaultValue={placeBetValues?.price}
                            />
                          </div>
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="bet-action-item"
                          >
                            <input
                              onChange={(e) => setTotalSize(e.target.value)}
                              _ngcontent-ng-c2459892542=""
                              type="number"
                              numbersonly=""
                              name="betStake"
                              className="ng-untouched ng-pristine ng-valid"
                              defaultValue={totalSize}
                            />
                          </div>
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="bet-action-item"
                          >
                            <button
                              onClick={handleOrderBets}
                              _ngcontent-ng-c2459892542=""
                              mat-flat-button=""
                              className="slip-btn notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                              mat-ripple-loader-disabled=""
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">Submit</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                          </div>
                        </div>
                        <div
                          _ngcontent-ng-c2459892542=""
                          className="error-wrap"
                        >
                          <p
                            _ngcontent-ng-c2459892542=""
                            className="spacer"
                          ></p>
                          <p
                            _ngcontent-ng-c2459892542=""
                            className="error-msg ng-star-inserted"
                          >
                            {" "}
                            {stakeErr}
                          </p>
                        </div>
                        <div
                          _ngcontent-ng-c2459892542=""
                          className="amt-chip-grid"
                        >
                          {buttonGameValue?.slice(0, 8).map(({ value }, i) => {
                            return (
                              <button
                                onClick={() => setTotalSize(value)}
                                key={i}
                                _ngcontent-ng-c2459892542=""
                                mat-flat-button=""
                                className="chip-grid-item mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                                mat-ripple-loader-uninitialized=""
                                mat-ripple-loader-class-name="mat-mdc-button-ripple"
                              >
                                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                                <span className="mdc-button__label">
                                  {value}
                                </span>
                                <span className="mat-mdc-focus-indicator"></span>
                                <span className="mat-mdc-button-touch-target"></span>
                              </button>
                            );
                          })}
                        </div>
                        <div
                          _ngcontent-ng-c2459892542=""
                          className="range-text-row"
                        >
                          <h2
                            _ngcontent-ng-c2459892542=""
                            style={{ textTransform: "none" }}
                          >
                            Range: 100 to 5L
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BetSlip;
