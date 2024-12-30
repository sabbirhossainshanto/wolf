/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import useCloseModalClickOutside from "../../hooks/useCloseModalClickOutside";
import { motion } from "framer-motion";
import { useGetLanguage } from "../../hooks/language";
import { MdKeyboardArrowRight } from "react-icons/md";
import useLanguage from "../../hooks/useLanguage";
const Language = ({ setShowLanguage }) => {
  const { setLanguage } = useLanguage();
  const { data } = useGetLanguage();

  const loginRef = useRef();
  useCloseModalClickOutside(loginRef, () => {
    setShowLanguage(false);
  });

  const languages = data?.[0]?.CRICKET;

  const handleSetLanguage = (language) => {
    localStorage.setItem("language", language);
    setShowLanguage(false);
    setLanguage(language);
  };

  return (
    <div
      style={{
        width: "calc(100% - 30px)",
        minHeight: "100px",
        maxWidth: "200px",
        position: "absolute",
        marginBottom: "10px",
        top: "0px",
        right: "0",
        zIndex: "1001",
      }}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.1 }}
        id="cdk-overlay-0"
        className="cdk-overlay-pane login-dialog"
        style={{
          width: "calc(100% - 30px)",
          minHeight: "100px",
          maxWidth: "200px",
          position: "absolute",
          marginBottom: "10px",
          top: "58px",
          right: "0",
          zIndex: "1001",
        }}
        ref={loginRef}
      >
        <div
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
        <div
          style={{ zIndex: "1001" }}
          className="mat-mdc-dialog-container mdc-dialog cdk-dialog-container mdc-dialog--open"
          id="LoginComponent"
          role="dialog"
          aria-modal="true"
          // style="--mat-dialog-transition-duration: 150ms;"
        >
          <div className="mdc-dialog__container">
            <div
              className="mat-mdc-dialog-surface mdc-dialog__surface"
              style={{ borderRadius: "0px", background: "white" }}
            >
              <div _nghost-ng-c2806737617="" className="ng-star-inserted">
                <div _ngcontent-ng-c2806737617="" className="main">
                  <div
                    style={{ background: "white" }}
                    _ngcontent-ng-c2806737617=""
                    className="container login-section"
                  >
                    <div
                      _ngcontent-ng-c2806737617=""
                      className="body-section ng-star-inserted"
                      style={{
                        paddingBottom: "20px",
                        background: "white",
                      }}
                    >
                      <form
                        _ngcontent-ng-c2806737617=""
                        className="ng-untouched ng-pristine ng-invalid"
                      >
                        <div
                          _ngcontent-ng-c2806737617=""
                          className="login-form"
                        >
                          <h1
                            style={{
                              color: "black",
                              display: "flex",
                              alignItems: "center",
                              fontSize: "11px",
                            }}
                            _ngcontent-ng-c2806737617=""
                            className="form-title"
                          >
                            <MdKeyboardArrowRight />{" "}
                            <span>Select Language</span>
                          </h1>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "start",
                              width: "100%",
                              gap: "1px",
                              marginTop: "0px",
                              fontSize: "11px",
                            }}
                          >
                            {languages &&
                              Object.keys(languages)?.map((language, idx) => {
                                return (
                                  <button
                                    onClick={() => handleSetLanguage(language)}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "3px",
                                      border: "none",
                                      background: "transparent",
                                      textTransform: "capitalize",
                                      paddingLeft: "0px",
                                      color: "var(--primary-color)",
                                    }}
                                    key={idx}
                                  >
                                    <MdKeyboardArrowRight />
                                    <span>{language}</span>
                                  </button>
                                );
                              })}
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div
          className="cdk-visually-hidden cdk-focus-trap-anchor"
          aria-hidden="true"
        ></div>
      </motion.div>
    </div>
  );
};

export default Language;
