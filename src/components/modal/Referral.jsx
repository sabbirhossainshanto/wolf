/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import useBankAccount from "../../hooks/useBankAccount";
import { myReferralCodePost } from "../../constant/constant";
import useContextState from "../../hooks/useContextState";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";
import Success from "../ui/Notification/Success";
const Referral = ({ setShowReferral }) => {
  const [successCopy,setSuccessCopy] = useState('')
  const {logo} = useContextState()
  const referralRef = useRef();
  useCloseModalClickOutside(referralRef, () => {
    setShowReferral(false);
  });
  const { bankData: myReferralCode } = useBankAccount(myReferralCodePost,true);

  return (
    <div className="cdk-overlay-container">
   {successCopy && (
       <Success message={successCopy} setMessage={setSuccessCopy} success={true}/>
   )}
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <motion.div
          id="cdk-overlay-4"
          className="cdk-overlay-pane referral-dialog"
          style={{
            width: "calc(100% - 30px)",
            maxWidth: "500px",
            position: "static",
            marginBottom: "10px",
          }}
          ref={referralRef}
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
            id="mat-mdc-dialog-3"
            role="dialog"
            aria-modal="true"
            // style="--mat-dialog-transition-duration: 150ms;"
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div _nghost-ng-c526813732="" className="ng-star-inserted">
                  <div _ngcontent-ng-c526813732="" className="referral-modal">
                    <div _ngcontent-ng-c526813732="" className="modal-header">
                      <div _ngcontent-ng-c526813732="" className="img-wrap">
                        <img
                          _ngcontent-ng-c526813732=""
                     
                          alt="logo"
                          src={logo}
                          className="ng-star-inserted"
                        />
                      </div>
                      <button
                        onClick={() => setShowReferral(false)}
                        _ngcontent-ng-c526813732=""
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

                            fontWeight: "600",
                          }}
                          _ngcontent-ng-c526813732=""
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
                    <div _ngcontent-ng-c526813732="" className="modal-body">
                      <h3 _ngcontent-ng-c526813732="">Refer and earn</h3>
                      <p _ngcontent-ng-c526813732="">
                        Be our brand hero, refer your friend using your refer
                        code, you get 500 on your friend’s first deposit and
                        your friend gets 1500 bonus after registration.
                      </p>
                      <div
                        _ngcontent-ng-c526813732=""
                        className="referral-code"
                      >
                        <p
                          _ngcontent-ng-c526813732=""
                          className="refer-code-text"
                        >
                          {myReferralCode?.code}
                        </p>
                        <button
                        onClick={()=> handleCopyToClipBoard(myReferralCode?.code,setSuccessCopy)}
                          _ngcontent-ng-c526813732=""
                          className="btn secondary-btn"
                        >
                          Copy
                        </button>
                      </div>
                      <div _ngcontent-ng-c526813732="" className="sharing">
                        <div _ngcontent-ng-c526813732="" className="icon-list">
                          <div
                            _ngcontent-ng-c526813732=""
                            className="icon-item ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c526813732=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c526813732=""
                             
                                alt="WhatsApp"
                                src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
                              />
                            </div>
                            <p _ngcontent-ng-c526813732="">WhatsApp</p>
                          </div>
                          <div
                            _ngcontent-ng-c526813732=""
                            className="icon-item ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c526813732=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c526813732=""
                           
                                alt="WhatsApp"
                                src="https://ss.manage63.com/bmk-wl/commonAssets/wa_business.svg"
                              />
                            </div>
                            <p _ngcontent-ng-c526813732="">WA Business</p>
                          </div>
                          <div
                            _ngcontent-ng-c526813732=""
                            className="icon-item ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c526813732=""
                              className="icon-wrap"
                            >
                              <img
                                _ngcontent-ng-c526813732=""
                            
                                alt="WhatsApp"
                                src="https://ss.manage63.com/bmk-wl/commonAssets/telegram.svg"
                              />
                            </div>
                            <p _ngcontent-ng-c526813732="">Telegram</p>
                          </div>
                          <div
                            _ngcontent-ng-c526813732=""
                            className="icon-item"
                          >
                            <div
                              _ngcontent-ng-c526813732=""
                              className="icon-wrap more"
                            >
                              <span
                                _ngcontent-ng-c526813732=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                content_copy
                              </span>
                            </div>
                            <p _ngcontent-ng-c526813732="">Copy Text</p>
                          </div>
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
        </motion.div>
      </div>
    </div>
  );
};

export default Referral;
