import { motion } from "framer-motion";
import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";

const Warning = ({ setShowWarning, handleSubmit,buttonInnerText,title,description }) => {
  const warningRef = useRef();
  useCloseModalClickOutside(warningRef, () => {
    setShowWarning(false);
  });
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
        <div className="swal2-icon swal2-icon-show" style={{ display: "flex" }}>
          <div className="swal2-icon-content">
            <img src={`/assets/img/warning-yellow.svg`} />
          </div>
        </div>

        <h2
          className="swal2-title"
          id="swal2-title"
          style={{ display: "block" }}
        >
       {title}
        </h2>
        <div
          className="swal2-html-container"
          id="swal2-html-container"
          style={{ display: "block" }}
        >
        {description}
        </div>

        <div className="swal2-actions" style={{ display: "flex" }}>
          <div className="swal2-loader"></div>

          <button
          
            onClick={handleSubmit}
            type="button"
            className="swal2-confirm swal2-styled"
            aria-label=""
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor:'pointer'
            }}
          >
          {buttonInnerText}
          </button>
          <button
          style={{cursor:'pointer'}}
            onClick={() => setShowWarning(false)}
            type="button"
            className="swal2-cancel swal2-styled"
            aria-label=""
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Warning;
