import { useEffect } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";

const Warning = ({ message, setMessage, warningRef }) => {
  /* Remove message after 3 second */
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [setMessage]);

  useCloseModalClickOutside(warningRef, () => {
    setMessage("");
  });

  return (
    <div
      onClick={() => setMessage("")}
      className="swal2-container swal2-bottom swal2-backdrop-show"
      style={{ overflowY: "auto" }}
    >
      <div
        ref={warningRef}
        aria-labelledby="swal2-title"
        aria-describedby="swal2-html-container"
        className="swal2-popup swal2-modal warning-alert alert-dialog"
        role="dialog"
        aria-live="assertive"
        aria-modal="true"
        style={{ display: "grid" }}
      >
        <div className="swal2-icon swal2-icon-show" style={{ display: "flex" }}>
          <div className="swal2-icon-content">
            <img src="/assets/img/warning-yellow.svg" />
          </div>
        </div>

        <h2
          className="swal2-title"
          id="swal2-title"
          style={{ display: "block" }}
        >
          Alert
        </h2>
        <div
          className="swal2-html-container"
          id="swal2-html-container"
          style={{ display: "block" }}
        >
          {message}
        </div>

        <div className="swal2-actions" style={{ display: "flex" }}>
          <div className="swal2-loader"></div>
        </div>
      </div>
    </div>
  );
};

export default Warning;
