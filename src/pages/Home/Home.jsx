import Casino from "./Casino";
import GoCasino from "./GoCasino";
import LiveCasino from "./LiveCasino";
import Sports from "./Sports";
import Tabs from "./Tabs";

/* eslint-disable react/no-unknown-property */
const Home = () => {
  return (
    <div
      _ngcontent-ng-c943649379=""
      className="page-body demoID"
      style={{ minHeight: "100vh" }}
    >
      <Tabs />

      <div
        _ngcontent-ng-c943649379=""
        className="hydrated"
        // style="--offset-top: 0px; --offset-bottom: 0px"
      >
        <div
          _ngcontent-ng-c943649379=""
          slot="fixed"
          className="refresher refresher-md hydrated"
        >
          <div _ngcontent-ng-c943649379="" className="hydrated">
            <div className="refresher-pulling">
              <div className="refresher-pulling-icon">
                <ion-icon
                  role="img"
                  className="hydrated"
                  aria-label="arrow down"
                ></ion-icon>
              </div>
            </div>
            <div className="refresher-refreshing">
              <div className="refresher-refreshing-icon">
                <ion-spinner className="spinner-lines hydrated"></ion-spinner>
              </div>
            </div>{" "}
          </div>
        </div>
        <div _ngcontent-ng-c943649379="" className="pagetab-body">
          <div _ngcontent-ng-c943649379="" className="pagetab-content">
            <Sports />
            <GoCasino />
            <LiveCasino />
            <Casino />
          </div>
        </div>
      </div>
      <div _ngcontent-ng-c943649379="" className="floating-btns">
        <div _ngcontent-ng-c943649379="" className="btn-item ng-star-inserted">
          <div _ngcontent-ng-c943649379="" className="btn-wrap whatsapp">
            <img
              _ngcontent-ng-c943649379=""
              alt="WhatsApp"
              src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
