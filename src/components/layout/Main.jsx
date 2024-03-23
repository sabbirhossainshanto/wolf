/* eslint-disable react/no-unknown-property */
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "../ui/Footer/Footer";
import Navbar from "../ui/Navbar/Navbar";
import Sidebar from "../ui/Sidebar/Sidebar";
import useContextState from "../../hooks/useContextState";
import EditStake from "../modal/EditStake";
import { useEffect, useState } from "react";
import Success from "../ui/Notification/Success";
import disableDevtool from "disable-devtool";
import { Settings } from "../../api";
import { handleLogOut } from "../../utils/handleLogOut";
import Deposit from "../modal/Deposit";
import Help from "../modal/Help";
import Referral from "../modal/Referral";
import BonusRules from "../modal/BonusRules";
import handleDepositMethod from "../../utils/handleDepositMethod";
import Warning from "../ui/Notification/Warning";
import ChangePassword from "../modal/ChangePassword";

const Main = () => {
  const {
    showEditStake,
    setShowEditStake,
    successClaimMsg,
    setSuccessClaimMsg,
    errClaimMsg,
    setErrClaimMsg,
    promoSuccessMsg,
    setPromoSuccessMsg,
    promoErrMsg,
    setPromoErrMgs,
    setGetToken,
    showDeposit,
    setSHowDeposit,
    showHelpModal,
    showReferral,
    setShowReferral,
    showBonusRule,
    setShowBonusRule,
    token,
    tokenLoading,
    isCheckedBonusToken,
    setTokenLoading,
  } = useContextState();
  const [showChangePassModal, setShowChangePassModal] = useState("");
  const [successEditStake, setSuccessEditStake] = useState("");
  const navigate = useNavigate();
  const disabledDevtool = Settings.disabledDevtool;
  const [verifyDeposit, setVerifyDeposit] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const location = useLocation();
  /* Disabled devtool based on settings */
  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            handleLogOut();
            setTokenLoading(true);
            setGetToken((prev) => !prev);
            navigate("/");
          }
        },
      });
    }
  }, [navigate, disabledDevtool]);

  useEffect(() => {
    if (Settings.deposit && !tokenLoading && !isCheckedBonusToken) {
      const checkDepositMethodSimilarity = async () => {
        const storedMethods = localStorage.getItem("depositMethod");
        const depositMethod = handleDepositMethod(token);
        const res = await depositMethod();
        if (res?.success) {
          const currentMethods = JSON.stringify(res?.result);
          if (storedMethods !== currentMethods) {
            setVerifyDeposit(
              "Our deposit bank details are updated. Please verify our bank accounts before depositing money."
            );
            localStorage.setItem("depositMethod", currentMethods);
          }
        }
      };
      checkDepositMethodSimilarity();
      const intervalId = setInterval(checkDepositMethodSimilarity, 1000 * 60);
      return () => clearInterval(intervalId);
    }
  }, [tokenLoading, token]);

  useEffect(() => {
    if (window.location.hostname != "localhost") {
      if (window.location.protocol !== "https:") {
        window.location.replace(
          `https://${window.location.hostname}${window.location.pathname}`
        );
      }
    }
  }, [location]);

  useEffect(() => {
    if (Settings?.metaPixelCode) {
      const script = document.createElement("script");
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${Settings?.metaPixelCode});
        fbq('track', 'PageView');
      `;
      document.body.appendChild(script);
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.setAttribute("height", "1");
      img.setAttribute("width", "1");
      img.setAttribute("style", "display:none");
      img.setAttribute(
        "src",
        `https://www.facebook.com/tr?id=${Settings?.metaPixelCode}&ev=PageView&noscript=1`
      );
      noscript.appendChild(img);
      document.body.appendChild(noscript);
      return () => {
        document.body.removeChild(script);
        document.body.removeChild(noscript);
      };
    }
  }, []);

  return (
    <>
      <div
        className="translator-wrap"
        style={{ display: "block", overflow: "hidden" }}
      ></div>
      <div _nghost-ng-c967272132="" ng-version="16.2.0">
        <div
          _ngcontent-ng-c967272132=""
          ngskiphydration=""
          className="mat-drawer-container mat-sidenav-container sidenav-container"
        >
          {/* Show deposit */}
          {showDeposit && <Deposit setSHowDeposit={setSHowDeposit} />}
          {/*   <!-- mennu start--> */}
          {/* After successfully transfer claim bonus to main wallet success message */}
          {successClaimMsg && (
            <Success
              message={successClaimMsg}
              setMessage={setSuccessClaimMsg}
              success={true}
            />
          )}
          {/* Error message during transfer claim bonus to main wallet*/}
          {errClaimMsg && (
            <Success
              message={errClaimMsg}
              setMessage={setErrClaimMsg}
              success={false}
            />
          )}

          {promoSuccessMsg && (
            <Success
              message={promoSuccessMsg}
              setMessage={setPromoSuccessMsg}
              success={true}
            />
          )}
          {promoErrMsg && (
            <Success
              message={promoErrMsg}
              setMessage={setPromoErrMgs}
              success={false}
            />
          )}

          <Sidebar />
          {/*   <!-- header start--> */}
          {/* Edit stake modal */}
          {showEditStake && (
            <EditStake
              setShowEditStake={setShowEditStake}
              setSuccessEditStake={setSuccessEditStake}
            />
          )}
          {showReferral && <Referral setShowReferral={setShowReferral} />}
          {/* Success message after edit stake */}
          {successEditStake && (
            <Success
              success={true}
              message={successEditStake}
              setMessage={setSuccessEditStake}
            />
          )}

          {showHelpModal && <Help />}
          {showBonusRule && Settings.bonus && (
            <BonusRules setShowBonusRule={setShowBonusRule} />
          )}
          {verifyDeposit && (
            <Warning message={verifyDeposit} setMessage={setVerifyDeposit} />
          )}
          {showChangePassModal && (
            <ChangePassword
              setShowChangePassModal={setShowChangePassModal}
              setErrorMessage={setErrorMessage}
              setSuccessMessage={setSuccessMessage}
            />
          )}
          {successMessage && (
            <Success
              message={successMessage}
              setMessage={setSuccessMessage}
              success={true}
            />
          )}
          {errorMessage && (
            <Warning message={errorMessage} setMessage={setErrorMessage} />
          )}
          <div
            className="cdk-visually-hidden cdk-focus-trap-anchor"
            aria-hidden="true"
          ></div>
          <div
            _ngcontent-ng-c967272132=""
            ngskiphydration=""
            className="mat-drawer-content mat-sidenav-content"
          >
            <div _ngcontent-ng-c967272132=""></div>
            <div _nghost-ng-c943649379="" className="ng-star-inserted">
              <div _ngcontent-ng-c943649379="" className="main">
                <div
                  _ngcontent-ng-c943649379=""
                  className="container notranslate"
                >
                  <Navbar />
                  <Outlet />
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
