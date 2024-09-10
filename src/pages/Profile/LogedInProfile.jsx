import { Link } from "react-router-dom";
import useContextState from "../../hooks/useContextState";
import { API, Settings } from "../../api";
import useGetSocialLink from "../../hooks/useGetSocialLink";
import { useEffect, useState } from "react";
import Withdraw from "../../components/modal/Withdraw";
import Success from "../../components/ui/Notification/Success";
import AddBank from "../../components/modal/AddBank";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import axios from "axios";
import UseEncryptData from "../../hooks/UseEncryptData";

/* eslint-disable react/no-unknown-property */
const LoggedInProfile = ({
  loginName,
  setShowChangePassModal,
  balanceData,
}) => {
  const { isCheckedBonusToken, setSHowDeposit, setShowBonusRule, token } =
    useContextState();
  const { socialLink } = useGetSocialLink();
  const [showWithdraw, setSHowWithdraw] = useState(false);
  const [withdrawCoinSuccess, setWithdrawCoinSuccess] = useState("");
  const [withdrawCoinErr, setWithdrawCoinErr] = useState("");
  const [withdrawData, setWithdrawData] = useState([]);
  /* Handle navigate in new tab */
  const handleNavigateSocialLink = (link) => {
    window.open(link, "_blank");
  };
  const [bankId, setBankId] = useState(null);

  /* Set default bank account id */
  useEffect(() => {
    setBankId(withdrawData?.defaultBank?.bankId);
  }, [withdrawData]);

  /* Handle Withdraw data */
  const handleWithdrawData = async () => {
    const generatedToken = UseTokenGenerator();
    const bankData = {
      bankId,
      type: "withdrawForm",
      token: generatedToken,
    };
    const encryptedData = UseEncryptData(bankData)
    const res = await axios.post(API.bankAccount, encryptedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = res?.data;
    if (data?.success) {
      setWithdrawData(data?.result);
      setSHowWithdraw(true);
    }
  };

  return (
    <>
      {/* Withdraw modal */}
      {showWithdraw && withdrawData?.allBanks?.length > 0 && (
        <Withdraw
          setSHowWithdraw={setSHowWithdraw}
          setWithdrawCoinErr={setWithdrawCoinErr}
          setWithdrawCoinSuccess={setWithdrawCoinSuccess}
          bankId={bankId}
          refetchWithdrawData={handleWithdrawData}
          setBankId={setBankId}
          withdrawData={withdrawData}
        />
      )}
      {/* Add bank modal */}
      {showWithdraw && withdrawData?.allBanks?.length < 1 && (
        <AddBank
          setErrCrudMsg={setWithdrawCoinErr}
          setShowAddBank={setSHowWithdraw}
          setSuccessCrudMsg={setWithdrawCoinSuccess}
        />
      )}

      {/* Withdraw and add bank state */}
      {withdrawCoinSuccess && (
        <Success
          message={withdrawCoinSuccess}
          setMessage={setWithdrawCoinSuccess}
          success={true}
        />
      )}
      {/* Withdraw and add bank state */}
      {withdrawCoinErr && (
        <Success
          message={withdrawCoinErr}
          setMessage={setWithdrawCoinErr}
          success={false}
        />
      )}
      <div _ngcontent-ng-c2865632707="" className="user-details-wrap">
        <div
          _ngcontent-ng-c2865632707=""
          className="user-details ng-star-inserted"
        >
          <div _ngcontent-ng-c2865632707="" className="contact-info">
            <p _ngcontent-ng-c2865632707="" className="notranslate">
              {loginName}
            </p>

            <p
              _ngcontent-ng-c2865632707=""
              className="notranslate ng-star-inserted"
            >
              {" "}
              -{" "}
            </p>
          </div>
          <div _ngcontent-ng-c2865632707="" className="actions-wrap">
            {!isCheckedBonusToken && (
              <button
                onClick={() => setShowChangePassModal(true)}
                _ngcontent-ng-c2865632707=""
                mat-flat-button=""
                className="chng-psw-btn mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base ng-star-inserted"
                mat-ripple-loader-class-name="mat-mdc-button-ripple"
              >
                <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                <span className="mdc-button__label">Change Password</span>
                <span className="mat-mdc-focus-indicator"></span>
                <span className="mat-mdc-button-touch-target"></span>
                <span className="mat-ripple mat-mdc-button-ripple"></span>
              </button>
            )}
          </div>
        </div>

        <div
          _ngcontent-ng-c2865632707=""
          className="user-bal-info ng-star-inserted"
        >
          <div _ngcontent-ng-c2865632707="" className="card-wrapper">
            <div _ngcontent-ng-c2865632707="" className="bal-cont">
              <div _ngcontent-ng-c2865632707="" className="avl-bal show-bal">
                <mat-label _ngcontent-ng-c2865632707="">Balance</mat-label>
                <p _ngcontent-ng-c2865632707=""> {balanceData?.creditLimit}</p>
              </div>
            </div>
            {!isCheckedBonusToken && (
              <div _ngcontent-ng-c2865632707="" className="d-w-btn">
                {Settings.deposit && (
                  <button
                    onClick={() => {
                      setSHowDeposit(true);
                    }}
                    _ngcontent-ng-c2865632707=""
                    mat-flat-button=""
                    className="notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span className="mdc-button__label">Deposit</span>
                    <span className="mat-mdc-focus-indicator"></span>
                    <span className="mat-mdc-button-touch-target"></span>
                    <span className="mat-ripple mat-mdc-button-ripple"></span>
                  </button>
                )}
                {Settings.withdraw && (
                  <button
                    onClick={handleWithdrawData}
                    _ngcontent-ng-c2865632707=""
                    mat-flat-button=""
                    className="notranslate mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-uninitialized=""
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span className="mdc-button__label">Withdraw</span>
                    <span className="mat-mdc-focus-indicator"></span>
                    <span className="mat-mdc-button-touch-target"></span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c2865632707="" className="menu-items-wrap">
        <ul _ngcontent-ng-c2865632707="" className="smenu-wrap">
          {/* <li
            _ngcontent-ng-c2865632707=""
            className="smenu-item ng-star-inserted"
          >
            <a _ngcontent-ng-c2865632707="" className="smenu-link">
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_alternate _no.svg"
                />
                <span _ngcontent-ng-c2865632707="">Alternate Number</span>
              </div>
            </a>
          </li>
          <li
            _ngcontent-ng-c2865632707=""
            className="smenu-item ng-star-inserted"
          >
            <a _ngcontent-ng-c2865632707="" className="smenu-link">
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_email.svg"
                />
                <span _ngcontent-ng-c2865632707="">Add Email</span>
              </div>
            </a>
          </li>
          <li
            _ngcontent-ng-c2865632707=""
            className="smenu-item ng-star-inserted"
          >
            <a _ngcontent-ng-c2865632707="" className="smenu-link">
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_profile.svg"
                />
                <span _ngcontent-ng-c2865632707="">Complete Profile</span>
              </div>
            </a>
          </li> */}
          <li _ngcontent-ng-c2865632707="" className="smenu-item">
            <Link
              to="/active-bets"
              _ngcontent-ng-c2865632707=""
              className="smenu-link"
            >
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_activebets.svg"
                />
                <span _ngcontent-ng-c2865632707="">Active Bets</span>
              </div>
            </Link>
          </li>
          <li
            _ngcontent-ng-c2865632707=""
            routerlinkactive="active-link"
            className="smenu-item"
          >
            <Link
              to="/deposit-statement"
              _ngcontent-ng-c2865632707=""
              className="smenu-link"
            >
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav__ac_statement.svg"
                />
                <span _ngcontent-ng-c2865632707="">Deposit Statement</span>
              </div>
            </Link>
          </li>
          
          <li
            _ngcontent-ng-c2865632707=""
            routerlinkactive="active-link"
            className="smenu-item"
          >
            <Link
              to="/my-bank-details"
              _ngcontent-ng-c2865632707=""
              className="smenu-link"
            >
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bank.svg"
                />
                <span _ngcontent-ng-c2865632707="">My Bank Details</span>
              </div>
            </Link>
          </li>

          <li
            _ngcontent-ng-c2865632707=""
            routerlinkactive="active-link"
            className="smenu-item casino-hidden"
          >
            <a _ngcontent-ng-c2865632707="" className="smenu-link">
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/dice.svg"
                />
                <span _ngcontent-ng-c2865632707="">Casino Result</span>
              </div>
            </a>
          </li>
          <li
            _ngcontent-ng-c2865632707=""
            routerlink="/rules"
            routerlinkactive="active-link"
            className="smenu-item"
          >
            <Link
              to="/rules"
              _ngcontent-ng-c2865632707=""
              className="smenu-link"
            >
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                />
                <span _ngcontent-ng-c2865632707="">Rules</span>
              </div>
            </Link>
          </li>
          {Settings.bonus && (
            <li
              _ngcontent-ng-c2865632707=""
              routerlink="/rules"
              routerlinkactive="active-link"
              className="smenu-item"
            >
              <a
                onClick={() => setShowBonusRule(true)}
                _ngcontent-ng-c2865632707=""
                className="smenu-link"
              >
                <div _ngcontent-ng-c2865632707="" className="label-wrap">
                  <img
                    _ngcontent-ng-c2865632707=""
                    alt="Menu Icon"
                    src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                  />
                  <span _ngcontent-ng-c2865632707="">Bonus Rules</span>
                </div>
              </a>
            </li>
          )}
          {/* <li
            _ngcontent-ng-c2865632707=""
            routerlinkactive="active-link"
            className="smenu-item"
          >
            <a _ngcontent-ng-c2865632707="" className="smenu-link">
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_bank.svg"
                />
                <span _ngcontent-ng-c2865632707="">Banking</span>
              </div>
            </a>
          </li> */}
        </ul>
        {socialLink?.instagramLink || socialLink?.telegramLink ? (
          <div
            _ngcontent-ng-c2865632707=""
            className="social-links-wrap ng-star-inserted"
          >
            <label _ngcontent-ng-c2865632707="">Join us Now</label>
            <div _ngcontent-ng-c2865632707="" className="social-links">
              {/* <a _ngcontent-ng-c2865632707="" className="ng-star-inserted">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt=""
                  src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_facebook.svg"
                />
              </a> */}
              {socialLink?.instagramLink && (
                <a
                  onClick={() =>
                    handleNavigateSocialLink(socialLink?.instagramLink)
                  }
                  _ngcontent-ng-c2865632707=""
                  className="ng-star-inserted"
                >
                  <img
                    _ngcontent-ng-c2865632707=""
                    alt=""
                    src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_instagram.svg"
                  />
                </a>
              )}

              {socialLink?.telegramLink && (
                <a
                  onClick={() =>
                    handleNavigateSocialLink(socialLink?.telegramLink)
                  }
                  _ngcontent-ng-c2865632707=""
                  className="ng-star-inserted"
                >
                  <img
                    _ngcontent-ng-c2865632707=""
                    alt=""
                    src="https://ss.manage63.com/bmk-wl/commonAssets/icon_dark_telegram.svg"
                  />
                </a>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default LoggedInProfile;
