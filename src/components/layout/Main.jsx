/* eslint-disable react/no-unknown-property */
import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer/Footer";
import Navbar from "../ui/Navbar/Navbar";
import Sidebar from "../ui/Sidebar/Sidebar";
import useContextState from "../../hooks/useContextState";
import EditStake from "../modal/EditStake";
import { useState } from "react";
import Success from "../ui/Notification/Success";

const Main = () => {
  const { showEditStake, setShowEditStake } = useContextState();
  const [successEditStake, setSuccessEditStake] = useState("");

  return (
    <>
      <div className="translator-wrap" style={{ display: "block" }}></div>
      <div _nghost-ng-c967272132="" ng-version="16.2.0">
        <div
          _ngcontent-ng-c967272132=""
          ngskiphydration=""
          className="mat-drawer-container mat-sidenav-container sidenav-container"
        >
      

          {/*   <!-- mennu start--> */}

          <Sidebar />
          {/*   <!-- header start--> */}
          {showEditStake && (
            <EditStake
              setShowEditStake={setShowEditStake}
              setSuccessEditStake={setSuccessEditStake}
            />
          )}
          {successEditStake && (
            <Success
              message={successEditStake}
              setMessage={setSuccessEditStake}
            />
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
