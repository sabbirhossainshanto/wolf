import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import { motion } from "framer-motion";
import useContextState from "../../hooks/useContextState";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import axios from "axios";
import { API } from "../../api";
const Warning = ({ setShowWarning, gameId }) => {
  const warningRef = useRef();
  useCloseModalClickOutside(warningRef, () => {
    setShowWarning(false);
  });
  const { token } = useContextState();
  const handleNavigateNewTab = async () => {
    const generatedToken = UseTokenGenerator();
    const encryptedData = UseEncryptData({
      gameId: gameId?.toString(),
      token: generatedToken,
    });

    const res = await axios.post(API.liveCasinoIFrame, encryptedData, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res?.data;
    window.open(data?.gameUrl, "_blank");
    setShowWarning(false);
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
            <img src="assets/img/default_notification.svg" />
          </div>
        </div>
        <img className="swal2-image" style={{ display: "none" }} />
        <h2
          className="swal2-title"
          id="swal2-title"
          style={{ display: "block" }}
        >
          (1 Point = ₹ 100)
        </h2>
        <div
          className="swal2-html-container"
          id="swal2-html-container"
          style={{ display: "block" }}
        >
          Immerse yourself in the excitement of live casino action, an array of
          captivating slots, and a diverse range of games.{" "}
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
            onClick={handleNavigateNewTab}
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
            onClick={() => setShowWarning(false)}
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

export default Warning;