/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import QRCode from "./QRCode";
import UPI from "./UPI";
import Bank from "./Bank";
import useBankAccount from "../../hooks/useBankAccount";
import { depositMethodsPost } from "../../constant/constant";
import axios from "axios";
import { API } from "../../api";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import useContextState from "../../hooks/useContextState";

const Deposit = () => {
  const { token } = useContextState();
  const paymentAmount = localStorage.getItem("paymentAmount");
  const [tabs, setTabs] = useState("");
  const [depositData, setDepositData] = useState({});
  const { bankData: depositMethods } = useBankAccount(depositMethodsPost);

  const handleVisibleBankMethod = async (method) => {
    setTabs(method?.type);
    const generatedToken = UseTokenGenerator();
    const depositDetail = {
      type: "depositDetails",
      paymentId: method?.paymentId,
      token: generatedToken,
    };
    const res = await axios.post(API.bankAccount, depositDetail, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res?.data;
    if (data?.success) {
      setDepositData(data?.result);
    }
  };

  return (
    <div _ngcontent-ng-c3816252360="" className="page-body"
    style={{minHeight:'100vh'}}
    >
      <div
        _ngcontent-ng-c3816252360=""
        className="select-method-wrap ng-star-inserted"
      >
        <div _ngcontent-ng-c3816252360="" className="title-bar">
          <h2 _ngcontent-ng-c3816252360="" className="title">
            Coins : {paymentAmount}
          </h2>
          <p _ngcontent-ng-c3816252360="" className="time-badge">
            5-10 minutes
          </p>
        </div>
        <div _ngcontent-ng-c3816252360="" className="select-method-card">
          {Array.isArray(depositMethods) &&
            depositMethods?.map((method) => {
              return (
                <div
                  key={method?.paymentId}
                  onClick={() => handleVisibleBankMethod(method)}
                  _ngcontent-ng-c3816252360=""
                  className={`method-type ng-star-inserted ${
                    tabs === method?.type ? "selected" : ""
                  }`}
                >
                  <div _ngcontent-ng-c3816252360="" className="img-wrap">
                    <img
                      _ngcontent-ng-c3816252360=""
                      alt="Payment Method"
                      src={`/assets/img/${method?.type}.${
                        method?.type === "qr" ? "svg" : "png"
                      }`}
                    />
                  </div>
                  <p _ngcontent-ng-c3816252360="">
                    {method?.type?.toUpperCase()}
                  </p>
                </div>
              );
            })}
        </div>


        {tabs === "qr" && <QRCode depositData={depositData} />}
        {tabs === "upi" && <UPI depositData={depositData} />}
        {tabs === "bank" && <Bank depositData={depositData} />}

        {
  tabs && (
    <>
    
    <div
          _ngcontent-ng-c3816252360=""
          className="mat-expansion-panel payment-confirm-panel ng-tns-c1859850774-3 ng-star-inserted mat-expanded"
        >
          <div
            _ngcontent-ng-c3816252360=""
            role="button"
            className="mat-expansion-panel-header mat-focus-indicator ng-tns-c2690051721-4 ng-tns-c1859850774-3 ng-star-inserted mat-expanded"
            id="mat-expansion-panel-header-1"
            aria-controls="cdk-accordion-child-1"
            aria-expanded="true"
            aria-disabled="false"
          >
            <span className="mat-content ng-tns-c2690051721-4">
              <div
                _ngcontent-ng-c3816252360=""
                className="mat-expansion-panel-header-title ng-tns-c2690051721-4"
              >
                {" "}
                Upload Payment Screenshot
              </div>
            </span>
          </div>
          <div
            role="region"
            className="mat-expansion-panel-content ng-tns-c1859850774-3 ng-trigger ng-trigger-bodyExpansion"
            id="cdk-accordion-child-1"
            aria-labelledby="mat-expansion-panel-header-1"
          >
            <div className="mat-expansion-panel-body ng-tns-c1859850774-3">
              <div
                _ngcontent-ng-c3816252360=""
                className="panel-content ng-tns-c1859850774-3"
              >
                <div
                  _ngcontent-ng-c3816252360=""
                  className="upload-screenshot-wrap ng-star-inserted"
                >
                  <div
                    _ngcontent-ng-c3816252360=""
                    className="screenshot-wrapper"
                  >
                    <div
                      _ngcontent-ng-c3816252360=""
                      className="upload-screenshot"
                    >
                      <label _ngcontent-ng-c3816252360="">
                        <input
                          _ngcontent-ng-c3816252360=""
                          type="file"
                          name="img"
                          accept="image/*"
                          id="upload_screenshot"
                          hidden=""
                          className="ng-untouched ng-pristine ng-valid"
                        />
                        <a
                          _ngcontent-ng-c3816252360=""
                          className="ng-star-inserted"
                        >
                          <span
                            _ngcontent-ng-c3816252360=""
                            role="img"
                            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                            aria-hidden="true"
                            data-mat-icon-type="font"
                          >
                            add_circle
                          </span>
                        </a>
                        <p
                          _ngcontent-ng-c3816252360=""
                          className="ng-star-inserted"
                        >
                          Click here to upload payment screenshot
                        </p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p _ngcontent-ng-c3816252360="" className="separator">
          OR
        </p>
        <div
          _ngcontent-ng-c3816252360=""
          className="mat-expansion-panel payment-confirm-panel ng-tns-c1859850774-1 ng-star-inserted"
        >
          <div
            _ngcontent-ng-c3816252360=""
            role="button"
            className="mat-expansion-panel-header mat-focus-indicator ng-tns-c2690051721-2 ng-tns-c1859850774-1 ng-star-inserted"
            id="mat-expansion-panel-header-0"
            aria-controls="cdk-accordion-child-0"
            aria-expanded="false"
            aria-disabled="false"
          >
            <span className="mat-content ng-tns-c2690051721-2">
              <div
                _ngcontent-ng-c3816252360=""
                className="mat-expansion-panel-header-title ng-tns-c2690051721-2"
              >
                {" "}
                Enter Payment UTR
              </div>
            </span>
          </div>
          <div
            role="region"
            className="mat-expansion-panel-content ng-tns-c1859850774-1 ng-trigger ng-trigger-bodyExpansion"
            id="cdk-accordion-child-0"
            aria-labelledby="mat-expansion-panel-header-0"
          >
            <div className="mat-expansion-panel-body ng-tns-c1859850774-1">
              <div
                _ngcontent-ng-c3816252360=""
                className="panel-content ng-tns-c1859850774-1"
              >
                <div _ngcontent-ng-c3816252360="" className="input-wrap">
                  <input
                    _ngcontent-ng-c3816252360=""
                    placeholder="Enter payment UTR here"
                    type="text"
                  />
                </div>
                <button
                  _ngcontent-ng-c3816252360=""
                  className="btn secondary-btn"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

      </div>
    </div>
  );
};

export default Deposit;
