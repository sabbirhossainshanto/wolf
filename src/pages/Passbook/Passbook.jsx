import { useNavigate } from "react-router-dom";
import usePassbook from "../../hooks/usePassbook";
import useContextState from "../../hooks/useContextState";

/* eslint-disable react/no-unknown-property */
const Passbook = () => {
  /* get passbook data */
  const { passbook } = usePassbook();
  const navigate = useNavigate();
  const { token } = useContextState();

  return (
    <div
      _ngcontent-ng-c3622565476=""
      className="page-body"
      style={{ minHeight: "100vh" }}
    >
      <div _ngcontent-ng-c3622565476="" className="passbook-page-wrap">
        <div
          _ngcontent-ng-c3622565476=""
          ngskiphydration=""
          animationduration="0ms"
          className="mat-mdc-tab-group mat-tab-group passbook-tabs-group mat-primary mat-mdc-tab-group-stretch-tabs"
          //   style="--mat-tab-animation-duration: 0ms;"
        >
          <div className="mat-mdc-tab-body-wrapper mobileMarginBottom">
            <div
              role="tabpanel"
              className="mat-mdc-tab-body ng-tns-c737557735-66 mat-tab-body ng-star-inserted mat-mdc-tab-body-active"
              id="mat-tab-content-10-1"
              aria-labelledby="mat-tab-label-10-1"
            >
              <div
                cdkscrollable=""
                className="mat-mdc-tab-body-content ng-tns-c737557735-66 ng-trigger ng-trigger-translateTab"
                style={{ transform: "none" }}
              >
                <div
                  _ngcontent-ng-c3622565476=""
                  _nghost-ng-c773751984=""
                  className="ng-star-inserted"
                >
                  <div
                    _ngcontent-ng-c773751984=""
                    className="hydrated"
                    // style="--offset-top: 0px; --offset-bottom: 0px;"
                  >
                    <div
                      _ngcontent-ng-c773751984=""
                      className="cricket-bets-wrap"
                    >
                      <div
                        _ngcontent-ng-c773751984=""
                        ngskiphydration=""
                        mat-stretch-tabs="true"
                        animationduration="0ms"
                        disablepagination="true"
                        className="mat-mdc-tab-group mat-tab-group betstatement-tabs mat-primary mat-mdc-tab-group-stretch-tabs"
                        // style="--mat-tab-animation-duration: 0ms;"
                      >
                        <div className="mat-mdc-tab-body-wrapper">
                          <div
                            role="tabpanel"
                            className="mat-mdc-tab-body ng-tns-c737557735-71 mat-tab-body mat-mdc-tab-body-active ng-star-inserted"
                            id="mat-tab-content-11-0"
                            aria-labelledby="mat-tab-label-11-0"
                          >
                            <div
                              cdkscrollable=""
                              className="mat-mdc-tab-body-content ng-tns-c737557735-71 ng-trigger ng-trigger-translateTab"
                              style={{ transform: "none" }}
                            >
                              <div
                                _ngcontent-ng-c773751984=""
                                className="mat-accordion bet-history-accordion ng-star-inserted"
                              >
                                {token ? (
                                  passbook?.map((item, i) => {
                                    return (
                                      <div
                                        onClick={() => {
                                          navigate(
                                            `/passbook/${item?.marketId}`
                                          );
                                        }}
                                        key={i}
                                        _ngcontent-ng-c773751984=""
                                        hidetoggle="true"
                                        className="mat-expansion-panel ng-tns-c1859850774-77 ng-star-inserted mat-expanded mat-expansion-panel-spacing"
                                      >
                                        <div
                                          _ngcontent-ng-c773751984=""
                                          role="button"
                                          className="mat-expansion-panel-header mat-focus-indicator ng-tns-c2690051721-78 ng-tns-c1859850774-77 mat-expansion-toggle-indicator-after ng-star-inserted mat-expanded"
                                          id="mat-expansion-panel-header-8"
                                          aria-controls="cdk-accordion-child-8"
                                          aria-expanded="true"
                                          aria-disabled="false"
                                        >
                                          <span className="mat-content ng-tns-c2690051721-78 mat-content-hide-toggle">
                                            <div
                                              _ngcontent-ng-c773751984=""
                                              className="mat-expansion-panel-header-title ng-tns-c2690051721-78"
                                            >
                                              <h3 _ngcontent-ng-c773751984="">
                                                {item?.narration}
                                              </h3>
                                              <p _ngcontent-ng-c773751984="">
                                                {item?.settledTime}
                                              </p>
                                            </div>
                                            <div
                                              _ngcontent-ng-c773751984=""
                                              className="mat-expansion-panel-header-description ng-tns-c2690051721-78"
                                            >
                                              <span
                                                _ngcontent-ng-c773751984=""
                                                className={`${
                                                  item?.memberWin > 0
                                                    ? "Won"
                                                    : "Lost"
                                                }`}
                                              >
                                                {item?.memberWin}
                                              </span>
                                            </div>
                                          </span>
                                        </div>
                                        <div
                                          role="region"
                                          className="mat-expansion-panel-content ng-tns-c1859850774-77 ng-trigger ng-trigger-bodyExpansion"
                                          id="cdk-accordion-child-8"
                                          aria-labelledby="mat-expansion-panel-header-8"
                                        ></div>
                                      </div>
                                    );
                                  })
                                ) : (
                                  <div
                                    _ngcontent-ng-c2482505616=""
                                    className="no-data ng-star-inserted"
                                  >
                                    <p _ngcontent-ng-c2482505616="">
                                      Please login to view your passbook entries
                                    </p>
                                  </div>
                                )}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passbook;
