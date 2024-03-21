import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import { useForm } from "react-hook-form";
import useContextState from "../../hooks/useContextState";
import { API } from "../../api";


/* eslint-disable react/no-unknown-property */
const EditStake = ({ setShowEditStake,setSuccessEditStake }) => {
  /* Close modal click out side */
  const stakeRef = useRef();
  useCloseModalClickOutside(stakeRef, () => {
    setShowEditStake(false);
  });
  /* Get button values from locale storage */
  const buttonGameValue = JSON.parse(localStorage.getItem("buttonValue"));
  const { register, handleSubmit } = useForm();
  const { token } = useContextState();
  
  const onSubmit = ({
    buttons0value,
    buttons1value,
    buttons2value,
    buttons3value,
    buttons4value,
    buttons5value,
    buttons6value,
    buttons7value,
  }) => {
    fetch(API.buttonValue, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        game: [
          {
            label: 100,
            value: buttons0value,
          },
          {
            label: 100,
            value: buttons1value,
          },
          {
            label: 100,
            value: buttons2value,
          },
          {
            label: 100,
            value: buttons3value,
          },
          {
            label: 100,
            value: buttons4value,
          },
          {
            label: 100,
            value: buttons5value,
          },
          {
            label: 100,
            value: buttons6value,
          },
          {
            label: 100,
            value: buttons7value,
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          /* Show success message after successfully edit stake */
          setSuccessEditStake(data?.result?.message);
          localStorage.removeItem("buttonValue");
          const gameButtonsValues = [
            {
              label: 100,
              value: buttons0value,
            },
            {
              label: 100,
              value: buttons1value,
            },
            {
              label: 100,
              value: buttons2value,
            },
            {
              label: 100,
              value: buttons3value,
            },
            {
              label: 100,
              value: buttons4value,
            },
            {
              label: 100,
              value: buttons5value,
            },
            {
              label: 100,
              value: buttons6value,
            },
            {
              label: 100,
              value: buttons7value,
            },
          ];
          /* set edited button values */
          localStorage.setItem(
            "buttonValue",
            JSON.stringify(gameButtonsValues)
          );
          setShowEditStake(false);
        }
      });
  };

  return (
    <div className="cdk-overlay-container">
      <div className="cdk-overlay-backdrop cdk-overlay-dark-backdrop cdk-overlay-backdrop-showing"></div>
      <div
        className="cdk-global-overlay-wrapper"
        dir="ltr"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div
          id="cdk-overlay-2"
          className="cdk-overlay-pane editstake-dialog"
          style={{
            width: "calc(100% - 30px)",
            maxWidth: "500px",
            position: "static",
            marginBottom: "10px",
          }}
          ref={stakeRef}
        >
          <div
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
          <div
            className="mat-mdc-dialog-container mat-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
            id="mat-mdc-dialog-2"
            role="dialog"
            aria-modal="true"
            //   style="--mat-dialog-transition-duration: 150ms"
          >
            <div className="mdc-dialog__container">
              <div className="mat-mdc-dialog-surface mdc-dialog__surface">
                <app-editstake-dialog
                  _nghost-ng-c2718167310=""
                  className="ng-star-inserted"
                >
                  <div _ngcontent-ng-c2718167310="" className="editstake-modal">
                    <div _ngcontent-ng-c2718167310="" className="modal-header">
                      <h2 _ngcontent-ng-c2718167310="">Edit Stake</h2>
                      <div _ngcontent-ng-c2718167310="" className="action-btns">
                        <button
                          onClick={() => setShowEditStake(false)}
                          _ngcontent-ng-c2718167310=""
                          mat-button=""
                          mat-dialog-close=""
                          className="modal-close-btn mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"
                          mat-ripple-loader-class-name="mat-mdc-button-ripple"
                          type="button"
                        >
                          <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                          <span
                            _ngcontent-ng-c2718167310=""
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                            style={{ marginLeft: "4px" }}
                          >
                            close
                          </span>
                          <span className="mdc-button__label"></span>
                          <span className="mat-mdc-focus-indicator"></span>
                          <span className="mat-mdc-button-touch-target"></span>
                          <span className="mat-ripple mat-mdc-button-ripple"></span>
                        </button>
                      </div>
                    </div>
                    <div _ngcontent-ng-c2718167310="" className="modal-body">
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        _ngcontent-ng-c2718167310=""
                      
                    
                        className="ng-untouched ng-pristine ng-valid"
                      >
                        <div
                          _ngcontent-ng-c2718167310=""
                          className="editvalue-wrap"
                        >
                          <p _ngcontent-ng-c2718167310="" className="input-msg">
                            Please fill all required fields (*)
                          </p>
                          <div
                            _ngcontent-ng-c2718167310=""
                            className="amt-chip-grid"
                          >
                            <input
                              {...register("buttons0value", {
                                required: true,
                              })}
                              defaultValue={buttonGameValue[0].value}
                              name="buttons0value"
                              _ngcontent-ng-c2718167310=""
                              type="number"
                              placeholder="Enter Value *"
                              numbersonly=""
                              className="chip-grid-item ng-untouched ng-pristine ng-valid"
                            />
                            <input
                              _ngcontent-ng-c2718167310=""
                              type="number"
                              placeholder="Enter Value *"
                              numbersonly=""
                              {...register("buttons1value", {
                                required: true,
                              })}
                              defaultValue={buttonGameValue[1].value}
                              name="buttons1value"
                              className="chip-grid-item ng-untouched ng-pristine ng-valid"
                            />
                            <input
                              _ngcontent-ng-c2718167310=""
                              type="number"
                              placeholder="Enter Value *"
                              numbersonly=""
                              {...register("buttons2value", {
                                required: true,
                              })}
                              defaultValue={buttonGameValue[2].value}
                              name="buttons2value"
                              className="chip-grid-item ng-untouched ng-pristine ng-valid"
                            />
                            <input
                              {...register("buttons3value", {
                                required: true,
                              })}
                              defaultValue={buttonGameValue[3].value}
                              name="buttons3value"
                              _ngcontent-ng-c2718167310=""
                              type="number"
                              placeholder="Enter Value *"
                              numbersonly=""
                              className="chip-grid-item ng-untouched ng-pristine ng-valid"
                              required=""
                            />
                          </div>
                          <div
                            _ngcontent-ng-c2718167310=""
                            className="amt-chip-grid"
                          >
                            <input
                              _ngcontent-ng-c2718167310=""
                              type="number"
                              placeholder="Enter Value *"
                              numbersonly=""
                              className="chip-grid-item ng-untouched ng-pristine ng-valid"
                              {...register("buttons4value", {
                                required: true,
                              })}
                              defaultValue={buttonGameValue[4].value}
                              name="buttons4value"
                            />
                            <input
                              _ngcontent-ng-c2718167310=""
                              type="number"
                              placeholder="Enter Value *"
                              numbersonly=""
                              className="chip-grid-item ng-untouched ng-pristine ng-valid"
                              {...register("buttons5value", {
                                required: true,
                              })}
                              defaultValue={buttonGameValue[5].value}
                              name="buttons5value"
                            />
                            <input
                              {...register("buttons6value", {
                                required: true,
                              })}
                              defaultValue={buttonGameValue[6].value}
                              name="buttons6value"
                              _ngcontent-ng-c2718167310=""
                              type="number"
                              placeholder="Enter Value *"
                              numbersonly=""
                              className="chip-grid-item ng-untouched ng-pristine ng-valid"
                            />
                            <input
                              _ngcontent-ng-c2718167310=""
                              type="number"
                              placeholder="Enter Value *"
                              numbersonly=""
                              {...register("buttons7value", {
                                required: true,
                              })}
                              defaultValue={buttonGameValue[7].value}
                              name="buttons7value"
                              className="chip-grid-item ng-untouched ng-pristine ng-valid"
                            />
                          </div>

                          <div
                            _ngcontent-ng-c2718167310=""
                            className="action-btns"
                          >
                            <button
                              onClick={() => setShowEditStake(false)}
                              _ngcontent-ng-c2718167310=""
                              mat-flat-button=""
                              className="cancel-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                              type="button"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">Cancel</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                            <button
                              _ngcontent-ng-c2718167310=""
                              mat-flat-button=""
                              type="submit"
                              className="save-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                              mat-ripple-loader-uninitialized=""
                              mat-ripple-loader-class-name="mat-mdc-button-ripple"
                            >
                              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                              <span className="mdc-button__label">Save</span>
                              <span className="mat-mdc-focus-indicator"></span>
                              <span className="mat-mdc-button-touch-target"></span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </app-editstake-dialog>
              </div>
            </div>
          </div>
          <div
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
        </div>
      </div>

    </div>
  );
};

export default EditStake;
