/* eslint-disable react/no-unknown-property */
import { Outlet, useNavigate } from "react-router-dom";
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
  } = useContextState();
  const [successEditStake, setSuccessEditStake] = useState("");
  const navigate = useNavigate();
  const disabledDevtool = Settings.disabledDevtool;

  /* Disabled devtool based on settings */
  useEffect(() => {
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            handleLogOut();
            setGetToken((prev) => !prev);
            navigate("/");
          }
        },
      });
    }
  }, [navigate, disabledDevtool]);
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
          {/* Success message after edit stake */}
          {successEditStake && (
            <Success
              message={successEditStake}
              setMessage={setSuccessEditStake}
            />
          )}

          {showHelpModal && <Help />}

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
