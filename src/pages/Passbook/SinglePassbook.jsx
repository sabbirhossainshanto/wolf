import { useParams } from "react-router-dom";
import useSinglePassbook from "../../hooks/useSinglePassbook";
import moment from "moment";

/* eslint-disable react/no-unknown-property */
const SinglePassbook = () => {
  const { marketId } = useParams();
  const { singlePassbook } = useSinglePassbook(marketId);

  if (!singlePassbook) {
    return;
  }
  let total = 0;
  for (const item of singlePassbook) {
    total = total + item.win;
  }
  console.log(singlePassbook);
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
          <div className="mat-mdc-tab-body-wrapper">
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
                                <div
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
                                          {singlePassbook[0]?.eventName}
                                        </h3>
                                        <p _ngcontent-ng-c773751984="">
                                          {singlePassbook[0]?.placeDate}
                                        </p>
                                      </div>
                                      <div
                                        _ngcontent-ng-c773751984=""
                                        className="mat-expansion-panel-header-description ng-tns-c2690051721-78"
                                      >
                                        <span
                                          _ngcontent-ng-c773751984=""
                                          className={` ${
                                            total > 0 ? "Win" : "Lost"
                                          }`}
                                        >
                                          {total}
                                        </span>
                                      </div>
                                    </span>
                                  </div>
                                  <div
                                    role="region"
                                    className="mat-expansion-panel-content ng-tns-c1859850774-77 ng-trigger ng-trigger-bodyExpansion"
                                    id="cdk-accordion-child-8"
                                    aria-labelledby="mat-expansion-panel-header-8"
                                  >
                                    <div className="mat-expansion-panel-body ng-tns-c1859850774-77">
                                      <div
                                        _ngcontent-ng-c773751984=""
                                        className="child-accordion ng-tns-c1859850774-77"
                                      >
                                        <div
                                          _ngcontent-ng-c773751984=""
                                          className="mat-accordion bet-history-accordion bookmaker-accordion ng-star-inserted"
                                        >
                                          <div
                                            _ngcontent-ng-c773751984=""
                                            hidetoggle="true"
                                            className="mat-expansion-panel ng-tns-c1859850774-81 ng-star-inserted mat-expanded mat-expansion-panel-spacing"
                                          >
                                            <div
                                              _ngcontent-ng-c773751984=""
                                              role="button"
                                              className="mat-expansion-panel-header mat-focus-indicator ng-tns-c2690051721-82 ng-tns-c1859850774-81 mat-expansion-toggle-indicator-after ng-star-inserted mat-expanded"
                                              id="mat-expansion-panel-header-10"
                                              aria-controls="cdk-accordion-child-10"
                                              aria-expanded="true"
                                              aria-disabled="false"
                                            >
                                              <span className="mat-content ng-tns-c2690051721-82 mat-content-hide-toggle">
                                                <div
                                                  _ngcontent-ng-c773751984=""
                                                  className="mat-expansion-panel-header-title ng-tns-c2690051721-82"
                                                >
                                                  <p
                                                    _ngcontent-ng-c773751984=""
                                                    className="win-team ng-star-inserted"
                                                  >
                                                    <label _ngcontent-ng-c773751984="">
                                                      Result:
                                                    </label>
                                                    <span _ngcontent-ng-c773751984="">
                                                      {
                                                        singlePassbook[0]
                                                          ?.winner
                                                      }
                                                    </span>
                                                  </p>
                                                </div>
                                                <div
                                                  _ngcontent-ng-c773751984=""
                                                  className="mat-expansion-panel-header-description ng-tns-c2690051721-82"
                                                ></div>
                                              </span>
                                            </div>
                                            <div
                                              role="region"
                                              className="mat-expansion-panel-content ng-tns-c1859850774-81 ng-trigger ng-trigger-bodyExpansion"
                                              id="cdk-accordion-child-10"
                                              aria-labelledby="mat-expansion-panel-header-10"
                                            >
                                              <div className="mat-expansion-panel-body ng-tns-c1859850774-81">
                                                <div
                                                  _ngcontent-ng-c773751984=""
                                                  className="allbet-datawrap ng-tns-c1859850774-81"
                                                >
                                                  <div
                                                    _ngcontent-ng-c773751984=""
                                                    className="allbet-header"
                                                  >
                                                    <div
                                                      _ngcontent-ng-c773751984=""
                                                      className="allbet-title"
                                                    >
                                                      <h3 _ngcontent-ng-c773751984="">
                                                        Selection
                                                      </h3>
                                                    </div>
                                                    <div
                                                      _ngcontent-ng-c773751984=""
                                                      className="allbet-headcol"
                                                    >
                                                      <h3 _ngcontent-ng-c773751984="">
                                                        Odds
                                                      </h3>
                                                      <h3 _ngcontent-ng-c773751984="">
                                                        Stake
                                                      </h3>
                                                      <h3 _ngcontent-ng-c773751984="">
                                                        Amt
                                                      </h3>
                                                      <h3 _ngcontent-ng-c773751984="">
                                                        P/L
                                                      </h3>
                                                    </div>
                                                  </div>
                                                  {singlePassbook?.map(
                                                    (item, i) => {
                                                      return (
                                                        <div
                                                          key={i}
                                                          _ngcontent-ng-c773751984=""
                                                          className={`allbet-datalist ${
                                                            item?.betType ===
                                                            "Back"
                                                              ? "forback"
                                                              : "forlay"
                                                          } ng-star-inserted`}
                                                        >
                                                          <div
                                                            _ngcontent-ng-c773751984=""
                                                            className="allbet-gameinfo"
                                                          >
                                                            <div
                                                              _ngcontent-ng-c773751984=""
                                                              className="allbet-content"
                                                            >
                                                              <h3 _ngcontent-ng-c773751984="">
                                                                {item?.nation}
                                                              </h3>
                                                              <p _ngcontent-ng-c773751984="">
                                                                {item?.betType}{" "}
                                                                |{" "}
                                                                {moment(
                                                                  item?.placeDate
                                                                ).format(
                                                                  "LT"
                                                                )}{" "}
                                                                |{" "}
                                                                <span
                                                                  _ngcontent-ng-c773751984=""
                                                                  className={` ${
                                                                    item?.win >
                                                                    0
                                                                      ? "WON"
                                                                      : "LOSS"
                                                                  }`}
                                                                >
                                                                  {item?.win > 0
                                                                    ? "  WON"
                                                                    : "  LOSS"}
                                                                </span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                          <div
                                                            _ngcontent-ng-c773751984=""
                                                            className="allbet-odds-stake-wrap"
                                                          >
                                                            <h3 _ngcontent-ng-c773751984="">
                                                              {item?.userRate}
                                                            </h3>
                                                            <h3 _ngcontent-ng-c773751984="">
                                                              {item?.amount}
                                                            </h3>
                                                            <h3 _ngcontent-ng-c773751984="">
                                                              {item?.amount}
                                                            </h3>
                                                            <h3
                                                              _ngcontent-ng-c773751984=""
                                                              className={`
                                                             ${
                                                               item?.win > 0
                                                                 ? "Won "
                                                                 : "Lost"
                                                             }    
                                                               ng-star-inserted`}
                                                            >
                                                              {item?.win}
                                                            </h3>
                                                          </div>
                                                        </div>
                                                      );
                                                    }
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

export default SinglePassbook;
