import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import { motion } from "framer-motion";
import useMyMarket from "../../hooks/useMyMarket";
import { useNavigate } from "react-router-dom";
/* eslint-disable react/no-unknown-property */
const MyMarket = ({ setShowMyMarket }) => {
  /* Close modal click out side */
  const marketRef = useRef();
  useCloseModalClickOutside(marketRef, () => {
    setShowMyMarket(false);
  });
  const navigate = useNavigate();
  /* Get my market data */
  const { myMarket } = useMyMarket();
  return (
    <div className="cdk-overlay-container" style={{ zIndex: "5000" }}>
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          id="cdk-overlay-0"
          className="cdk-overlay-pane market-dialog"
          style={{
            width: "calc(100% - 30px)",
            minHeight: "calc(var(--vh, 1vh) * 50)",
            maxHeight: "calc(var(--vh, 1vh) * 80)",
            position: "static",
            marginBottom: "10px",
          }}
          ref={marketRef}
        >
          <div
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
          <div
            className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-0"
            role="dialog"
            aria-modal="true"
            // style="--mat-dialog-transition-duration: 150ms;"
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div _nghost-ng-c2482505616="" className="ng-star-inserted">
                  <div _ngcontent-ng-c2482505616="" className="modal-header">
                    <h2 _ngcontent-ng-c2482505616="">
                      My Markets (Active Bets)
                    </h2>
                    <button
                      onClick={() => setShowMyMarket(false)}
                      _ngcontent-ng-c2482505616=""
                      mat-button=""
                      mat-dialog-close=""
                      className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                      mat-ripple-loader-class-name="mat-mdc-button-ripple"
                      type="button"
                    >
                      <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                      <span
                        style={{
                          color: "white",
                          marginLeft: "4px",
                          marginTop: "1px",
                        }}
                        _ngcontent-ng-c2482505616=""
                        role="img"
                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        {" "}
                        close{" "}
                      </span>
                      <span className="mdc-button__label"></span>
                      <span className="mat-mdc-focus-indicator"></span>
                      <span className="mat-mdc-button-touch-target"></span>
                      <span className="mat-ripple mat-mdc-button-ripple"></span>
                    </button>
                  </div>
                  <div _ngcontent-ng-c2482505616="" className="modal-body">
                    <div
                      _ngcontent-ng-c2482505616=""
                      className="mat-accordion bet-history-accordion"
                    >
                      {myMarket && myMarket?.length > 0 ? (
                        myMarket?.map(
                          ({ eventId, eventName, eventTypeId }, i) => {
                            return (
                              <div
                                key={i}
                                onClick={() => {
                                  setShowMyMarket(false);
                                  navigate(
                                    `/game-details/${eventTypeId}/${eventId}`
                                  );
                                }}
                                _ngcontent-ng-c2482505616=""
                                hidetoggle="true"
                                className="mat-expansion-panel ng-tns-c1859850774-23 ng-star-inserted"
                              >
                                <div
                                  _ngcontent-ng-c2482505616=""
                                  role="button"
                                  className="mat-expansion-panel-header mat-focus-indicator ng-tns-c2690051721-24 ng-tns-c1859850774-23 mat-expansion-toggle-indicator-after ng-star-inserted"
                                  id="mat-expansion-panel-header-2"
                                  aria-controls="cdk-accordion-child-2"
                                  aria-expanded="false"
                                  aria-disabled="false"
                                >
                                  <span className="mat-content ng-tns-c2690051721-24 mat-content-hide-toggle">
                                    <div
                                      _ngcontent-ng-c2482505616=""
                                      className="mat-expansion-panel-header-title ng-tns-c2690051721-24"
                                    >
                                      <h3 _ngcontent-ng-c2482505616="">
                                        {eventName}
                                      </h3>
                                    </div>
                                  </span>
                                </div>
                              </div>
                            );
                          }
                        )
                      ) : (
                        <div
                          _ngcontent-ng-c2482505616=""
                          className="no-data ng-star-inserted"
                        >
                          <p _ngcontent-ng-c2482505616="">
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
        </motion.div>
        <div
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </div>
    </div>
  );
};

export default MyMarket;
