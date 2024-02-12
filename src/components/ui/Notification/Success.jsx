/* eslint-disable react/no-unknown-property */
const Success = ({message, setMessage }) => {
    setTimeout(() => {
        setMessage("");
      }, 3000);
  return (
    <div className="cdk-overlay-container">
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "flex-end" }}
      >
        <div
          id="cdk-overlay-3"
          className="cdk-overlay-pane mat-mdc-snack-bar-handset"
          style={{ position: "static", marginBottom: "0px" }}
        >
          <div
            className="mdc-snackbar mat-mdc-snack-bar-container mdc-snackbar--open ng-tns-c3293340843-2 ng-trigger ng-trigger-state success-snackbar ng-star-inserted"
            style={{ transform: "scale(1)", opacity: 1 }}
          >
            <div className="mdc-snackbar__surface ng-tns-c3293340843-2">
              <div className="mat-mdc-snack-bar-label ng-tns-c3293340843-2">
                <div
                  className="ng-tns-c3293340843-2"
                  aria-live="assertive"
                  id="mat-snack-bar-container-live-1"
                >
                  <div className="ng-tns-c3293340843-2">
                    <div className="mat-mdc-simple-snack-bar simple-snack-bar ng-star-inserted">
                      <div
                        matsnackbarlabel=""
                        className="mat-mdc-snack-bar-label mdc-snackbar__label"
                      >
                        {" "}
                      {message}
                      </div>
                      <div
                        matsnackbaractions=""
                        className="mat-mdc-snack-bar-actions mdc-snackbar__actions ng-star-inserted"
                      >
                        <button
                          mat-button=""
                          matsnackbaraction=""
                          className="mat-mdc-snack-bar-action mdc-snackbar__action mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          mat-ripple-loader-uninitialized=""
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span className="mdc-button__label"> x </span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
