/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import { motion } from "framer-motion";

const BonusRules = ({ setShowBonusRule }) => {
  const bonusRuleRef = useRef();
  useCloseModalClickOutside(bonusRuleRef, () => {
    setShowBonusRule(false);
  });
  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <motion.div
          id="cdk-overlay-2"
          className="cdk-overlay-pane bonus-rules-dialog"
          style={{
            width: "calc(100% - 30px)",
            minHeight: "360px",
            maxWidth: "500px",
            maxHeight: "80%",
            position: "static",
            marginBottom: "10px",
          }}
          ref={bonusRuleRef}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
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
            //   style="--mat-dialog-transition-duration: 150ms;"
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div _nghost-ng-c3621893735="" className="ng-star-inserted">
                  <div _ngcontent-ng-c3621893735="" className="add-bank-modal">
                    <div _ngcontent-ng-c3621893735="" className="modal-header">
                      <h2 _ngcontent-ng-c3621893735="">Bonus Rules</h2>
                      <button
                        onClick={() => setShowBonusRule(false)}
                        _ngcontent-ng-c3621893735=""
                        mat-button=""
                        mat-dialog-close=""
                        className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        mat-ripple-loader-class-name="mat-mdc-button-ripple"
                        type="button"
                      >
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                        <span
                          style={{
                            marginLeft: "4.5px",
                            color: "white",
                            fontWeight: "600",
                            marginTop: "1px",
                          }}
                          _ngcontent-ng-c3621893735=""
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
                    <div _ngcontent-ng-c3621893735="" className="modal-body">
                      <div
                        _ngcontent-ng-c3621893735=""
                        className="rules-page-wrap"
                      >
                        <div
                          _ngcontent-ng-c3621893735=""
                          className="content-setting"
                        >
                          <p>Bonus Rules w.e.f. 19th Feb 2024</p>

                          <p>
                            Bonus coins are valid for 15 days from the date of
                            issue
                          </p>

                          <p>
                            Bonus coins can only get matured by playing in any
                            of the cricket games
                          </p>

                          <p>Match Odds / Bookmaker</p>
                          <p>
                            0.5% of each bet value or Rs 100 which ever is lower
                            gets matured in the bonus wallet
                          </p>

                          <p>For Example:-</p>
                          <p>
                            You place 7 bets of Rs 20000, so 20000 X 0.5% = Rs
                            100 x 7 bets = Rs 700 can be claimed and taken to
                            main wallet
                          </p>

                          <p>
                            You place 5 bets of Rs 50000, so (50000 X 0.5%) = Rs
                            250 but because there is max capping of Rs 100 per
                            bet that can be matured in the bonus wallet, so Rs
                            100 X 5 bets = Rs 500 can be claimed and taken to
                            main wallet
                          </p>

                          <p>Fancy / Toss</p>
                          <p>
                            2% of each bet value or Rs 100 which ever is lower
                            gets matured in the bonus wallet
                          </p>

                          <p>For Example:-</p>
                          <p>
                            You place 7 bets of Rs 5000, so 5000 X 2% = Rs 100 x
                            7 bets = Rs 700 can be claimed and taken to main
                            wallet
                          </p>

                          <p>
                            You place 5 bets of Rs 10000, so (10000 X 2%) = Rs
                            200 but because there is max capping of Rs 100 per
                            bet that can be matured in the bonus wallet, so Rs
                            100 X 5 bets = Rs 500 can be claimed and taken to
                            main wallet
                          </p>

                          <p>
                            Matured coins can be claimed and transferred to main
                            wallet when the market exposure is cleared and
                            settled
                          </p>

                          <p>
                            Minimum Rs 100 can be claimed to main wallet from
                            the bonus wallet
                          </p>

                          <p>
                            In case of bonus abuse, company holds 100% rights to
                            confesticate your and your related accounts funds
                            without any explanation
                          </p>

                          <p>
                            For any confusions, please read the above rules
                            multiple times to avoid any disputes later.
                          </p>
                          <p></p>
                        </div>
                      </div>
                    </div>
                    <div
                      _ngcontent-ng-c3621893735=""
                      className="modal-footer"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
         
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default BonusRules;
