import Casino from "./Casino";
import GoCasino from "./GoCasino";
import LiveCasino from "./LiveCasino";
import Sports from "./Sports";
import Tabs from "./Tabs";
import useContextState from "../../hooks/useContextState";
import LiveCasinoTab from "./LiveCasinoTab/LiveCasinoTab";
import { useEffect } from "react";
import SliderImage from "./SliderImage";
import useBannerImage from "../../hooks/useBannerImage";
import { useLocation } from "react-router-dom";
import Banner from "./Banner";
// import MyMatches from "./MyMatches";

/* eslint-disable react/no-unknown-property */
const Home = () => {
  const { sportsType } = useContextState();
  const { bannerImage } = useBannerImage();
  const location = useLocation();
  /* Reset scroll */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sportsType]);

  useEffect(() => {
    const leftArrow = document.getElementsByClassName("swiper-button-prev");
    Array?.from(leftArrow)?.forEach((item) => {
      item?.remove();
    });
    const rightArrow = document.getElementsByClassName("swiper-button-next");
    Array?.from(rightArrow)?.forEach((item) => {
      item?.remove();
    });
  }, [bannerImage]);
  return (
    <>
      <div
        _ngcontent-ng-c943649379=""
        className="page-body demoID"
        style={{
          minHeight: "100vh",
        }}
      >
        <Tabs />

        <div
          _ngcontent-ng-c943649379=""
          className="hydrated"
          // style="--offset-top: 0px; --offset-bottom: 0px"
        >
          <div
            style={{
              margin: "10px 0px 10px 0px",
              padding: "0px 10px",
            }}
          >
            {sportsType === 0 && bannerImage?.banner?.length > 0 && (
              <SliderImage bannerImage={bannerImage?.banner} />
            )}
          </div>
          <div
            style={{
              margin: "10px 0px 10px 0px",
              padding: "0px 10px",
            }}
          >
            {sportsType === 0 && bannerImage?.card?.length > 0 && (
              <Banner card={bannerImage?.card} />
            )}
          </div>
          <div
            style={{
              margin: "10px 0px 10px 0px",
              padding: "0px 10px 0px 10px",
            }}
          >
            {/* <MyMatches /> */}
          </div>
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
                {sportsType !== 4 && sportsType !== 2 && sportsType !== 1 ? (
                  <>
                    <GoCasino />
                    <LiveCasino />
                    <Casino />
                  </>
                ) : null}
              </div>
            )}
          </div>
        </div>

        {/* {location.pathname === "/" && (
          <div style={{ backgroundColor: "#323232", textAlign: "center" }}>
            <img
              className="paymentTypesPadding"
              src="/assets/img/payment_types.png"
            />
          </div>
        )} */}
      </div>
      {location.pathname === "/" && (
        <div
          style={{
            backgroundColor: "#323232",
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          <img
            className="paymentTypesPadding"
            src="/assets/img/payment_types.png"
          />
        </div>
      )}
    </>
  );
};

export default Home;
