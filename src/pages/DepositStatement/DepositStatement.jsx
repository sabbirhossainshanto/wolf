import { useState } from "react";
import useDepositStatement from "../../hooks/useDepositStatement";
import AccountStatementModal from "../../components/modal/AccountStatementModal";

/* eslint-disable react/no-unknown-property */
const DepositStatement = () => {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState("");
  /* get deposit data */
  const { accountStatement } = useDepositStatement();

  return (
    <div
      _ngcontent-ng-c3622565476=""
      className="page-body"
      style={{ minHeight: "100vh" }}
    >
      {showModal && (
        <AccountStatementModal setShowModal={setShowModal} image={image} />
      )}
      <div _ngcontent-ng-c3622565476="" className="passbook-page-wrap">
        <div
          _ngcontent-ng-c3622565476=""
          ngskiphydration=""
          animationduration="0ms"
          className="mat-mdc-tab-group passbook-tabs-group mat-tab-group mat-primary mat-mdc-tab-group-stretch-tabs"
          // style="--mat-tab-animation-duration: 0ms;"
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
                  <div
                    _ngcontent-ng-c2945624842=""
                    className="hydrated"
                    //   style="--offset-top: 0px; --offset-bottom: 0px;"
                  >
                    <div
                      _ngcontent-ng-c2945624842=""
                      infinitescroll=""
                      className="transactions-wrap"
                    >
                      <div _ngcontent-ng-c2945624842="" className="title">
                        <h2 _ngcontent-ng-c2945624842="">Transactions</h2>
                      </div>
                      {accountStatement?.length > 0 ? (
                        accountStatement?.map((data, i) => {
                          return (
                            <div
                              key={i}
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
                                      Deposit{" "}
                                      <span _ngcontent-ng-c2945624842="">
                                        {data?.date}
                                      </span>
                                    </p>
                                    <p
                                      _ngcontent-ng-c2945624842=""
                                      className="amount"
                                    >
                                      <span
                                        _ngcontent-ng-c2945624842=""
                                        className="coins"
                                      >
                                        {data?.amount}
                                      </span>
                                      <span
                                        _ngcontent-ng-c2945624842=""
                                        className={`${
                                          data?.status === "APPROVED"
                                            ? "Approved status"
                                            : "Rejected status"
                                        }`}
                                      >
                                        {data?.status}
                                      </span>
                                    </p>
                                  </li>
                                </ul>
                                <span
                                  _ngcontent-ng-c2945624842=""
                                  role="img"
                                  className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color ng-star-inserted"
                                  aria-hidden="true"
                                  data-mat-icon-type="font"
                                >
                                  arrow_drop_down
                                </span>
                              </div>
                              <div
                                _ngcontent-ng-c2945624842=""
                                className="txn-detail ng-star-inserted"
                              >
                                <div
                                  _ngcontent-ng-c2945624842=""
                                  className="txn-detail-header"
                                >
                                  <p _ngcontent-ng-c2945624842="">
                                    <span _ngcontent-ng-c2945624842="">
                                      Reference no.
                                    </span>
                                    <span _ngcontent-ng-c2945624842="">
                                      {data?.referenceNo}
                                    </span>
                                  </p>
                                  <p
                                    _ngcontent-ng-c2945624842=""
                                    className="ng-star-inserted"
                                  >
                                    <span _ngcontent-ng-c2945624842="">
                                      Coins
                                    </span>
                                    <span _ngcontent-ng-c2945624842="">
                                      {data?.amount}
                                    </span>
                                  </p>
                                  <p
                                    _ngcontent-ng-c2945624842=""
                                    className="ng-star-inserted"
                                  >
                                    <span _ngcontent-ng-c2945624842="">
                                      Approved on
                                    </span>
                                    <span _ngcontent-ng-c2945624842="">
                                      {data?.date}
                                    </span>
                                  </p>
                                </div>
                                <div
                                  _ngcontent-ng-c2945624842=""
                                  className="txn-detail-body ng-star-inserted"
                                >
                                  <div
                                    _ngcontent-ng-c2945624842=""
                                    className="txn-screenshot ng-star-inserted"
                                  >
                                    <div
                                      _ngcontent-ng-c2945624842=""
                                      className="Approved img-wrap"
                                    >
                                      <img
                                        onClick={() => {
                                          setShowModal(true);
                                          setImage("");
                                          setImage(data?.image);
                                        }}
                                        _ngcontent-ng-c2945624842=""
                                        alt="Screenshot"
                                        src={data?.image}
                                      />
                                    </div>
                                    <p
                                      _ngcontent-ng-c2945624842=""
                                      className="status"
                                    >
                                      <span
                                        _ngcontent-ng-c2945624842=""
                                        className={` ${
                                          data?.status === "APPROVED"
                                            ? "Approved"
                                            : "Rejected"
                                        }`}
                                      >
                                        {data?.status}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <div
                          _ngcontent-ng-c3799324686=""
                          className="no-data ng-star-inserted"
                        >
                          <p _ngcontent-ng-c3799324686="">
                            No transaction yet!
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
  );
};

export default DepositStatement;
