import { useRef } from "react";
import { motion } from "framer-motion";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { API } from "../../../api";
import useContextState from "../../../hooks/useContextState";
import { AxiosSecure } from "../../../lib/AxiosSecure";
const ClaimWarning = ({
  setShowClaimWarn,
  bonusRefetchBalance,
  refetchBalance,
}) => {
  const warningRef = useRef();
  /*  close warning modal click out side*/
  useCloseModalClickOutside(warningRef, () => {
    setShowClaimWarn(false);
  });
  const { setSuccessClaimMsg, setErrClaimMsg } = useContextState();
  /* Handle bonus to main wallet */
  const handleBonusToMainWallet = async () => {
    const res = await AxiosSecure.post(API.bonusClaim);
    const result = res?.data;
    if (result?.success) {
      refetchBalance();
      bonusRefetchBalance();
      /* After success close claim warning modal */
      setShowClaimWarn(false);
      /* set success message  */
      setSuccessClaimMsg(result?.result?.message);
    } else {
      /* After failed close claim warning modal */
      setShowClaimWarn(false);
      /* set error message  */
      setErrClaimMsg(result?.error?.errorMessage);
    }
  };

  return (
    <div
      className="swal2-container swal2-bottom swal2-backdrop-show"
      style={{ overflowY: "auto" }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
        aria-labelledby="swal2-title"
        aria-describedby="swal2-html-container"
        className="swal2-popup swal2-modal success-alert alert-dialog"
        role="dialog"
        aria-live="assertive"
        aria-modal="true"
        style={{ display: "grid" }}
        ref={warningRef}
      >
        <button
          type="button"
          className="swal2-close"
          aria-label="Close this dialog"
          style={{ display: "none" }}
        >
          ×
        </button>
        <ul className="swal2-progress-steps" style={{ display: "none" }}></ul>
        <div className="swal2-icon swal2-icon-show" style={{ display: "flex" }}>
          <div className="swal2-icon-content">
            <img src={`/assets/img/warning-yellow.svg`} />
          </div>
        </div>
        <img className="swal2-image" style={{ display: "none" }} />
        <h2
          className="swal2-title"
          id="swal2-title"
          style={{ display: "none" }}
        >
          {"(1 Point = ₹ 100)"}
        </h2>
        <div
          className="swal2-html-container"
          id="swal2-html-container"
          style={{ display: "block" }}
        >
          Do you want to transfer Claimable bonus to Main Wallet. If u click OK,
          bonus will be transferred to main wallet.
        </div>
        <input
          id="swal2-input"
          className="swal2-input"
          style={{ display: "none" }}
        />
        <input type="file" className="swal2-file" style={{ display: "none" }} />
        <div className="swal2-range" style={{ display: "none" }}>
          <input type="range" />
          <output></output>
        </div>
        <select
          id="swal2-select"
          className="swal2-select"
          style={{ display: "none" }}
        ></select>
        <div className="swal2-radio" style={{ display: "none" }}></div>
        <label className="swal2-checkbox" style={{ display: "none" }}>
          <input type="checkbox" id="swal2-checkbox" />
          <span className="swal2-label"></span>
        </label>
        <textarea
          id="swal2-textarea"
          className="swal2-textarea"
          style={{ display: "none" }}
        ></textarea>
        <div
          className="swal2-validation-message"
          id="swal2-validation-message"
          style={{ display: "none" }}
        ></div>
        <div className="swal2-actions" style={{ display: "flex" }}>
          <div className="swal2-loader"></div>

          <button
            onClick={handleBonusToMainWallet}
            type="button"
            className="swal2-confirm swal2-styled"
            aria-label=""
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            OK
          </button>

          <button
            type="button"
            className="swal2-deny swal2-styled"
            aria-label=""
            style={{ display: "none" }}
          >
            No
          </button>
          <button
            onClick={() => setShowClaimWarn(false)}
            type="button"
            className="swal2-cancel swal2-styled"
            aria-label=""
          >
            Cancel
          </button>
        </div>
        <div className="swal2-footer" style={{ display: "none" }}></div>
        <div className="swal2-timer-progress-bar-container">
          <div
            className="swal2-timer-progress-bar"
            style={{ display: "none" }}
          ></div>
        </div>
      </motion.div>
    </div>
  );
};

export default ClaimWarning;
