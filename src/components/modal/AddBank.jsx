/* eslint-disable react/no-unknown-property */
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import axios from "axios";
import { API } from "../../api";
import useContextState from "../../hooks/useContextState";
const AddBank = ({
  setShowAddBank,
  setSuccessCrudMsg,
  refetchBankData,
  setErrCrudMsg,
}) => {
  const { token } = useContextState();
  const [addBank, setAddBank] = useState({
    accountName: "",
    ifsc: "",
    accountNumber: "",
  });
  const addBankRef = useRef();
  useCloseModalClickOutside(addBankRef, () => {
    setShowAddBank(false);
  });

  const handleBankCrud = async (e) => {
    e.preventDefault();
    const generatedToken = UseTokenGenerator();
    const bankData = {
      accountName: addBank.accountName,
      ifsc: addBank.ifsc,
      accountNumber: addBank.accountNumber,
      type: "addBankAccount",
      token: generatedToken,
    };

    const res = await axios.post(API.bankAccount, bankData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res?.data;
    if (data?.success) {
      setSuccessCrudMsg(data?.result?.message);
      refetchBankData();
      setShowAddBank(false);
    } else {
      setErrCrudMsg(data?.result?.message);
    }
  };
  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <motion.div
          ref={addBankRef}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          id="cdk-overlay-1"
          className="cdk-overlay-pane add-bank-dialog"
          style={{
            width: "calc(100% - 30px)",
            maxWidth: "500px",
            position: "static",
            marginBottom: "10px",
          }}
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
                <div _nghost-ng-c1372444345="" className="ng-star-inserted">
                  <div _ngcontent-ng-c1372444345="" className="add-bank-modal">
                    <div _ngcontent-ng-c1372444345="" className="modal-header">
                      <h2 _ngcontent-ng-c1372444345="">Add new bank account</h2>
                      <button
                        onClick={() => setShowAddBank(false)}
                        _ngcontent-ng-c1372444345=""
                        mat-button=""
                        mat-dialog-close=""
                        className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                        mat-ripple-loader-class-name="mat-mdc-button-ripple"
                        type="button"
                      >
                        <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                        <span
                          _ngcontent-ng-c1372444345=""
                          role="img"
                          className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                          aria-hidden="true"
                          data-mat-icon-type="font"
                          style={{
                            marginLeft: "4.5px",
                            color: "white",
                            fontWeight: "600",
                          }}
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
                    <form
                      onSubmit={handleBankCrud}
                      _ngcontent-ng-c1372444345=""
                      className="ng-untouched ng-pristine ng-invalid"
                    >
                      <div _ngcontent-ng-c1372444345="" className="modal-body">
                        <div _ngcontent-ng-c1372444345="" className="form-wrap">
                          <div
                            _ngcontent-ng-c1372444345=""
                            className="input-wrap"
                          >
                            <label _ngcontent-ng-c1372444345="">
                              Account holder name*
                            </label>
                            <input
                              onChange={(e) => {
                                setAddBank({
                                  ...addBank,
                                  accountName: e.target.value,
                                });
                              }}
                              _ngcontent-ng-c1372444345=""
                              placeholder="Enter account holder name"
                              type="text"
                              formcontrolname="accountHolderName"
                              className="ng-untouched ng-pristine ng-invalid"
                            />
                          </div>
                          <div
                            _ngcontent-ng-c1372444345=""
                            className="input-wrap"
                          >
                            <label _ngcontent-ng-c1372444345="">
                              Account number*
                            </label>
                            <input
                              onChange={(e) => {
                                setAddBank({
                                  ...addBank,
                                  accountNumber: e.target.value,
                                });
                              }}
                              _ngcontent-ng-c1372444345=""
                              placeholder="Enter Account Number"
                              type="number"
                              formcontrolname="accountNo"
                              className="ng-untouched ng-pristine ng-invalid"
                            />
                          </div>
                          <div
                            _ngcontent-ng-c1372444345=""
                            className="input-wrap"
                          >
                            <label _ngcontent-ng-c1372444345="">
                              IFSC code*
                            </label>{" "}
                            <input
                              onChange={(e) => {
                                setAddBank({
                                  ...addBank,
                                  ifsc: e.target.value,
                                });
                              }}
                              _ngcontent-ng-c1372444345=""
                              placeholder="Enter bank iFSC"
                              type="text"
                              formcontrolname="ifscCode"
                              className="ifsc-input ng-untouched ng-pristine ng-invalid"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        _ngcontent-ng-c1372444345=""
                        className="modal-footer"
                      >
                        <button
                          _ngcontent-ng-c1372444345=""
                          mat-button=""
                          type="submit"
                          className="btn secondary-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span className="mdc-button__label"> Submit </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                      </div>
                    </form>
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

export default AddBank;
