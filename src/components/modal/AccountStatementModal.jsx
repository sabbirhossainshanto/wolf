/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";

const AccountStatementModal = ({ setShowModal,image }) => {
  /* Close modal click outside */
  const modalRef = useRef();
  useCloseModalClickOutside(modalRef, () => {
    setShowModal(false);
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
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          id="cdk-overlay-0"
          className="cdk-overlay-pane image-dialog"
          style={{
            width: "calc(100% - 20px)",
            height: "calc(var(--vh, 1vh) * 100 - 75px)",
            maxWidth: "500px",
            position: "static",
            marginBottom: "10px",
          }}
          ref={modalRef}
        >
          <div
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
          <div
            className="mat-mdc-dialog-container mat-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-0"
            role="dialog"
            aria-modal="true"
            //   style="--mat-dialog-transition-duration: 150ms;"
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <div _nghost-ng-c3542444880="" className="ng-star-inserted">
                  <div
                    _ngcontent-ng-c3542444880=""
                    className="img-preview-modal"
                  >
                    <div _ngcontent-ng-c3542444880="" className="modal-header">
                      <h2 _ngcontent-ng-c3542444880="">Image Preview</h2>
                      <button
                        onClick={() => setShowModal(false)}
                        _ngcontent-ng-c3542444880=""
                        mat-button=""
                        mat-dialog-close=""
                        className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        mat-ripple-loader-class-name="mat-mdc-button-ripple"
                        type="button"
                      >
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                        <span
                          style={{ color: "white", marginLeft: "4px" }}
                          _ngcontent-ng-c3542444880=""
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
                    <div _ngcontent-ng-c3542444880="" className="modal-body">
                      <div _ngcontent-ng-c3542444880="" className="img-wrap">
                        <img
                          _ngcontent-ng-c3542444880=""
                          alt="Preview"
                          src={image}
                        />
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

export default AccountStatementModal;
