/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import QRCode from "./QRCode";
import UPI from "./UPI";
import Bank from "./Bank";
import useBankAccount from "../../hooks/useBankAccount";
import axios from "axios";
import { API } from "../../api";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import useContextState from "../../hooks/useContextState";
import Success from "../../components/ui/Notification/Success";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import UseEncryptData from "../../hooks/UseEncryptData";

const Deposit = () => {
  const { token, copyTextSuccess, setCopyTextSuccess } = useContextState();
  const paymentAmount = localStorage.getItem("paymentAmount");
  const [tabs, setTabs] = useState("");
  const [paymentId, setPaymentId] = useState("");
  const [utr, setUtr] = useState(null);
  const [depositData, setDepositData] = useState({});
  const { bankData: depositMethods } = useBankAccount({
    type: "depositMethods",
    amount: paymentAmount,
  });

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [depositRequestSuccess, setDepositRequestSuccess] = useState("");
  const [depositRequestErr, setDepositRequestErr] = useState("");
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [filePath, setFilePath] = useState("");

  const handleVisibleBankMethod = async (method) => {
    setTabs(method?.type);
    setPaymentId(method?.paymentId);
    const generatedToken = UseTokenGenerator();
    const depositDetail = {
      type: "depositDetails",
      paymentId: method?.paymentId,
      token: generatedToken,
    };
    const encryptedData = UseEncryptData(depositDetail);
    const res = await axios.post(API.bankAccount, encryptedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res?.data;
    if (data?.success) {
      setDepositData(data?.result);
    }
  };

  useEffect(() => {
    if (image) {
      setLoading(true);
      const handleSubmitImage = async () => {
        const formData = new FormData();
        formData.append("image", image);
        const res = await axios.post(API.uploadScreenshot, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = res.data;
        console.log(data);
        if (data?.success) {
          setLoading(false);
          setUtr(data?.utr);
          setUploadedImage(data?.fileName);
          setFilePath(data?.filePath);
          setImage(null);
        } else {
          setLoading(false);
          setUtr(null);
          setImage(null);
          setFilePath("");
          setUploadedImage(null);
          setDepositRequestErr(data?.error);
        }
      };
      handleSubmitImage();
    }
  }, [image, token]);

  const handleDepositSubmit = async () => {
    if (uploadedImage || utr) {
      const generatedToken = UseTokenGenerator();
      const screenshotPostData = {
        type: "depositSubmit",
        paymentId,
        amount: paymentAmount,
        fileName: uploadedImage,
        utr: parseFloat(utr),
        token: generatedToken,
      };
      const encryptedData = UseEncryptData(screenshotPostData);
      const res = await axios.post(API.bankAccount, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = res?.data;
      if (result?.success) {
        setUtr(null);
        setImage(null);
        setDepositRequestSuccess(result?.result?.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        // setUtr(null);
        // setImage(null);
        // setFilePath("");
        // setUploadedImage(null);
        setDepositRequestErr(result?.result?.message);
      }
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    e.target.value = null;
  };

  return (
    <div
      _ngcontent-ng-c3816252360=""
      className="page-body"
      style={{ minHeight: "100vh" }}
    >
      {/* Copy to clipboard notification */}
      {copyTextSuccess && (
        <Success
          message={copyTextSuccess}
          setMessage={setCopyTextSuccess}
          success={true}
        />
      )}

      {/* Deposit request notification */}
      {depositRequestSuccess && (
        <Success
          message={depositRequestSuccess}
          setMessage={setDepositRequestSuccess}
          success={true}
        />
      )}
      {depositRequestErr && (
        <Success
          message={depositRequestErr}
          setMessage={setDepositRequestErr}
          success={false}
        />
      )}

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
        {Array.isArray(depositMethods) && depositMethods?.length > 0 ? (
          <div _ngcontent-ng-c3816252360="" className="select-method-card">
            {depositMethods?.map((method) => {
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
        ) : (
          <div style={{ textAlign: "center" }}>
            No deposit methods available right now.
          </div>
        )}

        {tabs === "qr" && <QRCode depositData={depositData} />}
        {tabs === "upi" && <UPI depositData={depositData} />}
        {tabs === "bank" && <Bank depositData={depositData} />}

        {tabs && (
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
                class="mat-expansion-panel-content ng-tns-c1859850774-3 ng-trigger ng-trigger-bodyExpansion"
                id="cdk-accordion-child-1"
                aria-labelledby="mat-expansion-panel-header-1"
              >
                <div class="mat-expansion-panel-body ng-tns-c1859850774-3">
                  <div
                    _ngcontent-ng-c3816252360=""
                    class="panel-content ng-tns-c1859850774-3"
                  >
                    <div
                      _ngcontent-ng-c3816252360=""
                      class="upload-screenshot-wrap ng-star-inserted"
                    >
                      <div
                        _ngcontent-ng-c3816252360=""
                        class="screenshot-wrapper"
                      >
                        {!filePath && !loading && (
                          <div
                            _ngcontent-ng-c3816252360=""
                            class="upload-screenshot"
                          >
                            <label
                              _ngcontent-ng-c3816252360=""
                              for="upload_screenshot"
                            >
                              <input
                                onChange={(e) => handleImageChange(e)}
                                _ngcontent-ng-c3816252360=""
                                type="file"
                                name="img"
                                accept="image/*"
                                id="upload_screenshot"
                                hidden
                                class="ng-untouched ng-pristine ng-valid"
                              />
                              <a
                                _ngcontent-ng-c3816252360=""
                                class="ng-star-inserted"
                              >
                                <span
                                  _ngcontent-ng-c3816252360=""
                                  role="img"
                                  class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="font"
                                >
                                  add_circle
                                </span>
                              </a>
                              <p
                                _ngcontent-ng-c3816252360=""
                                class="ng-star-inserted"
                              >
                                Click here to upload payment screenshot
                              </p>
                            </label>
                          </div>
                        )}
                        {filePath && !loading && (
                          <div
                            _ngcontent-ng-c3816252360=""
                            class="upload-screenshot"
                          >
                            <label
                              _ngcontent-ng-c3816252360=""
                              for="upload_screenshot"
                            >
                              <input
                                hidden
                                _ngcontent-ng-c3816252360=""
                                type="file"
                                name="img"
                                accept="image/*"
                                id="upload_screenshot"
                                class="ng-untouched ng-valid ng-dirty"
                              />
                            </label>
                            <div
                              _ngcontent-ng-c3816252360=""
                              class="image-container ng-star-inserted"
                            >
                              <img
                                _ngcontent-ng-c3816252360=""
                                class="fit-image"
                                src={filePath}
                              />
                              <a
                                onClick={() => {
                                  setFilePath("");
                                  setUploadedImage(null);
                                  setImage(null);
                                }}
                                _ngcontent-ng-c3816252360=""
                              >
                                <span
                                  _ngcontent-ng-c3816252360=""
                                  role="img"
                                  class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                  aria-hidden="true"
                                  data-mat-icon-type="font"
                                >
                                  close
                                </span>
                              </a>
                            </div>
                          </div>
                        )}
                        {loading && (
                          <div
                            _ngcontent-ng-c3816252360=""
                            class="upload-screenshot"
                          >
                            <FaSpinner
                              style={{
                                width: "100%",
                              }}
                              className="animate-spin"
                              size={30}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p _ngcontent-ng-c3816252360="" className="separator">
              And
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
                        onChange={(e) => setUtr(e.target.value)}
                        _ngcontent-ng-c3816252360=""
                        placeholder="Enter payment UTR here"
                        type="number"
                        value={utr}
                      />
                    </div>
                    <button
                      onClick={handleDepositSubmit}
                      disabled={!filePath || !utr}
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
        )}
      </div>
    </div>
  );
};

export default Deposit;
