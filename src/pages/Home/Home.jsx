import { useQuery } from "@tanstack/react-query";
import Casino from "./Casino";
import GoCasino from "./GoCasino";
import LiveCasino from "./LiveCasino";
import Sports from "./Sports";
import Tabs from "./Tabs";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { API } from "../../api";
import axios from "axios";
import useContextState from "../../hooks/useContextState";
import LiveCasinoTab from "./LiveCasinoTab/LiveCasinoTab";
import { useEffect } from "react";

/* eslint-disable react/no-unknown-property */
const Home = () => {
  const { sportsType } = useContextState();
  /* get whats app link */
  const { data: whatsAppLink } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      /* random token function */
      const generatedToken = UseTokenGenerator();
      /* Encryption post data */
      const encryptedVideoData = UseEncryptData({
        site: API.siteUrl,
        token: generatedToken,
      });
      const res = await axios.post(API.whatsApp, encryptedVideoData);
      const data = res.data;
      if (data?.success) {
        return data?.result?.link;
      }
    },
  });

  /* on click whats app navigate in new tab */
  const navigateWhatsApp = () => {
    window.open(whatsAppLink, "_blank");
  };
  /* Reset scroll */
  useEffect(()=> {
    window.scrollTo(0,0)
  },[sportsType])

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
          {sportsType === "live-casino" ||
          sportsType === "casino" ||
          sportsType === "aura" ? (
            <LiveCasinoTab />
          ) : (
            <div _ngcontent-ng-c943649379="" className="pagetab-content">
              <Sports />
            {(sportsType !== 4 && sportsType !== 2 && sportsType !== 1) ? (
                <>
                <GoCasino />
                <LiveCasino />
                <Casino />
                </>
            ):null}
            </div>
          )}
        </div>
      </div>
      {whatsAppLink && (
        <div
          onClick={navigateWhatsApp}
          _ngcontent-ng-c943649379=""
          className="floating-btns"
        >
          <div
            _ngcontent-ng-c943649379=""
            className="btn-item ng-star-inserted"
          >
            <div _ngcontent-ng-c943649379="" className="btn-wrap whatsapp">
              <img
                _ngcontent-ng-c943649379=""
                alt="WhatsApp"
                src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
