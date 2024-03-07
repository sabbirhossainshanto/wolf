import { useEffect, useRef, useState } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API } from "../../api";
import useContextState from "../../hooks/useContextState";
import useBalance from "../../hooks/useBalance";
import { FaSpinner } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
/* eslint-disable react/no-unknown-property */
const BetSlip = ({
  setOpenBetSlip,
  placeBetValues,
  refetchExposure,
  setSuccessMessage,
  setErrorMessage,
  refetchCurrentBets,
}) => {
  const { token } = useContextState();
  /* Close modal click outside */
  const betSlipRef = useRef();
  useCloseModalClickOutside(betSlipRef, () => {
    setOpenBetSlip(false);
  });
  /* Button values from locale storage */
  const buttonGameValue = JSON.parse(localStorage.getItem("buttonValue"));
  const [totalSize, setTotalSize] = useState("");
  const [loader, setLoader] = useState(false);
  const { refetchBalance } = useBalance();
  const [stakeErr, setStakeErr] = useState("");
  const [price, setPrice] = useState(null);
  const [oddStake, setOddStake] = useState(null);
  const [oddStakeLay1, setOddStakeLay1] = useState(null);
  const [oddStakeLay2, setOddStakeLay2] = useState(null);

  /* Set price */
  useEffect(() => {
    setPrice(placeBetValues?.price);
  }, [placeBetValues]);
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
        price: price,
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
        if (data?.success) {
          refetchExposure();
          refetchBalance();
          refetchCurrentBets();
          setLoader(false);
          setOpenBetSlip(false);
          setSuccessMessage("Bet Place Successfully !");
        } else {
          setErrorMessage(data?.error?.status?.[0]?.description || data?.error?.errorMessage);
          setLoader(false);
          setOpenBetSlip(false);
          refetchExposure();
          refetchBalance();
          refetchCurrentBets();
        }
      });
  };

  /* Increase price bets */
  const handleIncreasePrice = () => {
    if (price == 1000 || placeBetValues?.isWeak === true) {
      return;
    } else if (price > 1.0 && price < 2) {
      setPrice((parseFloat(price) + 0.01).toFixed(2));
    } else if (price > 1.99 && price < 3) {
      setPrice((parseFloat(price) + 0.02).toFixed(2));
    } else if (price > 2.99 && price < 4) {
      setPrice((parseFloat(price) + 0.05).toFixed(2));
    } else if (price > 3.99 && price < 6) {
      setPrice((parseFloat(price) + 0.1).toFixed(1));
    } else if (price > 5.99 && price < 10) {
      setPrice((parseFloat(price) + 0.2).toFixed(1));
    } else if (price > 9.99 && price < 20) {
      setPrice((parseFloat(price) + 0.5).toFixed(1));
    } else {
      setPrice(parseFloat(price) + 1);
    }
  };

  /* Decrease price bets */
  const handleDecreasePrice = () => {
    if (price < 1.02 || placeBetValues?.isWeak === true) {
      return;
    } else if (price < 2) {
      setPrice((parseFloat(price) - 0.01).toFixed(2));
    } else if (price > 1.99 && price < 3) {
      setPrice((parseFloat(price) - 0.02).toFixed(2));
    } else if (price > 2.99 && price < 4) {
      setPrice((parseFloat(price) - 0.05).toFixed(2));
    } else if (price > 3.99 && price < 6) {
      setPrice((parseFloat(price) - 0.1).toFixed(1));
    } else if (price > 5.99 && price < 10) {
      setPrice((parseFloat(price) - 0.2).toFixed(1));
    } else if (price > 9.99 && price < 20) {
      setPrice((parseFloat(price) - 0.5).toFixed(1));
    } else {
      setPrice(parseFloat(price) - 1);
    }
  };

  /* Place bet calculate */
  const pnl1 =
    placeBetValues?.pnl && placeBetValues?.pnl[0] ? placeBetValues?.pnl[0] : 0;
  const pnl2 =
    placeBetValues?.pnl && placeBetValues?.pnl[1] ? placeBetValues?.pnl[1] : 0;
  const pnl3 =
    placeBetValues?.pnl && placeBetValues?.pnl[2] ? placeBetValues?.pnl[2] : 0;
  const selectionId = placeBetValues?.selectionId?.toString();

  useEffect(() => {
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        let total;

        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * totalSize - totalSize;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * totalSize - totalSize;
        }

        if (selectionId && selectionId.includes(".1")) {
          setOddStake(formatNumber(total + pnl1));
          setOddStakeLay1(formatNumber(pnl2 + -1 * totalSize));
          setOddStakeLay2(formatNumber(pnl3 + -1 * totalSize));
        } else if (selectionId && selectionId.includes(".2")) {
          setOddStake(formatNumber(total + pnl2));
          setOddStakeLay1(formatNumber(pnl3 + -1 * totalSize));
          setOddStakeLay2(formatNumber(pnl2 + -1 * totalSize));
        } else {
          setOddStake(formatNumber(total + pnl3));
          setOddStakeLay1(formatNumber(pnl1 + -1 * totalSize));
          setOddStakeLay2(formatNumber(pnl2 + -1 * totalSize));
        }
      } else if (placeBetValues?.lay) {
        let total;
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * totalSize - totalSize);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / totalSize;
          total = -1 * (bookmaker * totalSize - totalSize);
        }

        if (selectionId && selectionId.includes(".1")) {
          setOddStake(formatNumber(total + pnl1));
          setOddStakeLay1(formatNumber(1 * pnl2 + 1 * totalSize));
          setOddStakeLay2(formatNumber(1 * pnl3 + 1 * totalSize));
        } else if (selectionId && selectionId.includes(".2")) {
          setOddStake(formatNumber(total + pnl2));
          setOddStakeLay1(formatNumber(1 * pnl3 + 1 * totalSize));
          setOddStakeLay2(formatNumber(1 * pnl1 + 1 * totalSize));
        } else {
          setOddStake(formatNumber(total + pnl3));
          setOddStakeLay1(formatNumber(1 * pnl1 + 1 * totalSize));
          setOddStakeLay2(formatNumber(1 * pnl2 + 1 * totalSize));
        }
      }
    }
  }, [price, totalSize, placeBetValues, pnl1, pnl2, pnl3, selectionId]);

  /* Format number */
  const formatNumber = (value) => {
    const hasDecimal = value % 1 !== 0;
    return hasDecimal ? value.toFixed(2) : value;
  };
  /* Adding red or green color on odd */
  const updateElementClass = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      if (parseFloat(element.innerText) > 0) {
        element.removeAttribute("class");
        element.classList.add("text-success");
      } else {
        element.removeAttribute("class");
        element.classList.add("text-danger");
      }
    }
  };
  useEffect(() => {
    updateElementClass("oddOne");
    updateElementClass("oddTwo");
    updateElementClass("oddThree");
  }, [oddStake, oddStakeLay1, oddStakeLay2]);

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
                            style={{ marginLeft: "4px" }}
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
                            style={{ position: "relative", overflow: "hidden" }}
                          >
                            <input
                              _ngcontent-ng-c2459892542=""
                              type="number"
                              numbersonly=""
                              name=""
                              className="rate-inp"
                              defaultValue={price}
                            />
                            <div
                              style={{
                                position: "absolute",
                                top: 3,
                                right: 5,
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <MdKeyboardArrowUp
                                onClick={handleIncreasePrice}
                                style={{ cursor: "pointer" }}
                                size={15}
                              />
                              <MdKeyboardArrowDown
                                onClick={handleDecreasePrice}
                                style={{ cursor: "pointer" }}
                                size={15}
                              />
                            </div>
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
                        {placeBetValues?.btype === "FANCY" && (
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="range-text-row"
                          >
                            <h2
                              _ngcontent-ng-c2459892542=""
                              style={{ textTransform: "none" }}
                            >
                              Range: {placeBetValues?.minLiabilityPerBet} to{" "}
                              {placeBetValues?.maxLiabilityPerBet}
                              <span _ngcontent-ng-c2459892542="">
                                Max Market: 20K
                              </span>
                            </h2>
                          </div>
                        )}
                        {placeBetValues?.btype === "MATCH_ODDS" ||
                        placeBetValues?.btype === "BOOKMAKER" ||
                        placeBetValues?.btype === "BOOKMAKER2" ? (
                          <div
                            _ngcontent-ng-c2459892542=""
                            className="pred-pl-wrap"
                          >
                            <p
                              _ngcontent-ng-c2459892542=""
                              className="pred-pl-row ng-star-inserted"
                            >
                              <strong _ngcontent-ng-c2459892542="">
                                {placeBetValues?.name[0]}
                              </strong>
                              <span
                                style={{ fontSize: "10px", textAlign: "right" }}
                                _ngcontent-ng-c2459892542=""
                                className={`${
                                  placeBetValues?.pnl &&
                                  placeBetValues?.pnl[0] > 0
                                    ? "text-success"
                                    : "text-danger"
                                }`}
                              >
                                {placeBetValues?.pnl[0]}
                              </span>
                              <span
                                style={{ fontSize: "10px", textAlign: "right" }}
                                id="oddOne"
                              >
                                {placeBetValues?.back &&
                                  oddStake != 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".1") &&
                                  oddStake}

                                {placeBetValues?.back &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".2") &&
                                  oddStakeLay2}

                                {placeBetValues?.back &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".3") &&
                                  oddStakeLay1}
                                {placeBetValues?.lay &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".1") &&
                                  oddStake}

                                {placeBetValues?.lay &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".2") &&
                                  oddStakeLay2}

                                {placeBetValues?.lay &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".3") &&
                                  oddStakeLay1}
                              </span>
                            </p>

                            <p
                              _ngcontent-ng-c2459892542=""
                              className="pred-pl-row ng-star-inserted"
                            >
                              <strong _ngcontent-ng-c2459892542="">
                                {placeBetValues?.name?.length > 0
                                  ? placeBetValues?.name[1]
                                  : null}
                              </strong>

                              <span
                                style={{ fontSize: "10px", textAlign: "right" }}
                                className={`${
                                  placeBetValues?.pnl &&
                                  placeBetValues?.pnl[1] > 0
                                    ? "text-success"
                                    : "text-danger"
                                }`}
                              >
                                {placeBetValues?.pnl?.length > 1 &&
                                  placeBetValues?.pnl[1]}
                              </span>

                              <span
                                style={{ fontSize: "10px", textAlign: "right" }}
                                id="oddTwo"
                              >
                                {placeBetValues?.back &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".1") &&
                                  oddStakeLay1}

                                {placeBetValues?.back &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".2") &&
                                  oddStake}

                                {placeBetValues?.back &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".3") &&
                                  oddStakeLay2}

                                {placeBetValues?.lay &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".1") &&
                                  oddStakeLay1}

                                {placeBetValues?.lay &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".2") &&
                                  oddStake}

                                {placeBetValues?.lay &&
                                  oddStake !== 0 &&
                                  totalSize?.toString().length > 0 &&
                                  selectionId.includes(".3") &&
                                  oddStakeLay2}
                              </span>
                            </p>
                            {placeBetValues?.name?.length > 2 && (
                              <p
                                _ngcontent-ng-c2459892542=""
                                className="pred-pl-row ng-star-inserted"
                              >
                                <strong _ngcontent-ng-c2459892542="">
                                  {placeBetValues?.name?.length > 2
                                    ? placeBetValues?.name[2]
                                    : null}
                                </strong>

                                <span
                                  style={{
                                    fontSize: "10px",
                                    textAlign: "right",
                                  }}
                                  className={`${
                                    placeBetValues?.pnl &&
                                    placeBetValues?.pnl[1] > 0
                                      ? "text-success"
                                      : "text-danger"
                                  }`}
                                >
                                  {placeBetValues?.pnl?.length > 2 &&
                                    placeBetValues?.pnl[2]}
                                </span>

                                <span
                                  style={{
                                    fontSize: "10px",
                                    textAlign: "right",
                                  }}
                                  id="oddThree"
                                >
                                  {placeBetValues?.back &&
                                    oddStake !== 0 &&
                                    totalSize?.toString().length > 0 &&
                                    selectionId.includes(".1") &&
                                    oddStakeLay2}

                                  {placeBetValues?.back &&
                                    oddStake !== 0 &&
                                    totalSize?.toString().length > 0 &&
                                    selectionId.includes(".2") &&
                                    oddStakeLay1}

                                  {placeBetValues?.back &&
                                    oddStake !== 0 &&
                                    totalSize?.toString().length > 0 &&
                                    selectionId.includes(".3") &&
                                    oddStake}
                                  {placeBetValues?.lay &&
                                    oddStake !== 0 &&
                                    totalSize?.toString().length > 0 &&
                                    selectionId.includes(".1") &&
                                    oddStakeLay2}

                                  {placeBetValues?.lay &&
                                    oddStake !== 0 &&
                                    totalSize?.toString().length > 0 &&
                                    selectionId.includes(".2") &&
                                    oddStakeLay1}

                                  {placeBetValues?.lay &&
                                    oddStake !== 0 &&
                                    totalSize?.toString().length > 0 &&
                                    selectionId.includes(".3") &&
                                    oddStake}
                                </span>
                              </p>
                            )}
                          </div>
                        ) : (
                          <div></div>
                        )}
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
