/* eslint-disable react/no-unknown-property */
import { DatePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import { useState } from "react";
import useGetReferralStatement from "../../hooks/useGetReferralStatement";

const ReferralStatement = () => {
  const [fetchData, setFetchData] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 7))
  );
  const [endDate, setEndDate] = useState(new Date());
  const { data } = useGetReferralStatement(
    startDate,
    endDate,
    fetchData,
    setFetchData
  );

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
          className="mat-mdc-tab-group passbook-tabs-group mat-tab-group mat-primary mat-mdc-tab-group-stretch-tabs"
          //   style="--mat-tab-animation-duration: 0ms;"
        >
          <div className="mat-mdc-tab-body-wrapper">
            <div
              role="tabpanel"
              className="mat-mdc-tab-body mat-tab-body ng-tns-c737557735-10 ng-star-inserted mat-mdc-tab-body-active"
              id="mat-tab-content-1-0"
              aria-labelledby="mat-tab-label-1-0"
            >
              <div
                cdkscrollable=""
                className="mat-mdc-tab-body-content ng-tns-c737557735-10 ng-trigger ng-trigger-translateTab"
                style={{ transform: "none" }}
              >
                <div
                  _ngcontent-ng-c3622565476=""
                  _nghost-ng-c2945624842=""
                  className="ng-star-inserted"
                >
                  <div _ngcontent-ng-c2945624842="" className="hydrated">
                    <div
                      _ngcontent-ng-c2945624842=""
                      infinitescroll=""
                      className="transactions-wrap"
                    >
                      <div _ngcontent-ng-c2945624842="" className="title">
                        <h2 _ngcontent-ng-c2945624842="">Referral Date</h2>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                        }}
                      >
                        <div>
                          <p style={{ marginBottom: "0px" }}>From Date</p>
                          <DatePicker
                            onChange={(date) => setStartDate(date)}
                            defaultValue={startDate}
                          />
                        </div>
                        <div>
                          <p style={{ marginBottom: "0px" }}>To Date</p>
                          <DatePicker
                            onChange={(date) => setEndDate(date)}
                            defaultValue={endDate}
                          />
                        </div>

                        <button
                          onClick={() => setFetchData(true)}
                          style={{
                            backgroundColor: "var(--primary-color)",
                            border: "none",
                            padding: "10px 20px",
                            color: "white",
                            borderRadius: "4px",
                            cursor: "pointer",
                            height: "34px",
                            marginTop: "auto",
                          }}
                        >
                          Submit
                        </button>
                      </div>
                      {data && (
                        <div style={{ marginTop: "20px" }}>
                          <div
                            _ngcontent-ng-c2945624842=""
                            className="transaction-item ng-star-inserted"
                          >
                            <div
                              _ngcontent-ng-c2945624842=""
                              className="wrapper"
                            >
                              <ul _ngcontent-ng-c2945624842="">
                                <li _ngcontent-ng-c2945624842="">
                                  <p
                                    _ngcontent-ng-c2945624842=""
                                    className="txn-type"
                                  >
                                    {" "}
                                    Total Clients{" "}
                                    <span _ngcontent-ng-c2945624842="">
                                      {data?.total_clients}
                                    </span>
                                  </p>
                                  <p
                                    _ngcontent-ng-c2945624842=""
                                    className="txn-type"
                                  >
                                    {" "}
                                    Total Deposit{" "}
                                    <span _ngcontent-ng-c2945624842="">
                                      {data?.total_deposit}
                                    </span>
                                  </p>
                                  <p
                                    _ngcontent-ng-c2945624842=""
                                    className="amount"
                                  >
                                    <span
                                      _ngcontent-ng-c2945624842=""
                                      //   className="coins"
                                    >
                                      Total Withdraw
                                    </span>
                                    <span
                                      _ngcontent-ng-c2945624842=""
                                      className={` status
                         
                             
                             `}
                                    >
                                      {data?.total_withdraw}
                                    </span>
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
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
  );
};

export default ReferralStatement;
