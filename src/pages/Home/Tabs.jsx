/* eslint-disable react/no-unknown-property */

import { useNavigate } from "react-router-dom";
import useContextState from "../../hooks/useContextState";
import useLatestEvent from "../../hooks/useLatestEvent";

const Tabs = () => {
  const { setSportsType, sportsType } = useContextState();
  const { latestEvents } = useLatestEvent();
  const navigate = useNavigate();
  return (
    <div
      _ngcontent-ng-c943649379=""
      _nghost-ng-c2582205232=""
      className="ng-star-inserted"
    >
      <div _ngcontent-ng-c2582205232="" className="pagetab-wrapper">
        {latestEvents?.length > 0 && (
          <div
            _ngcontent-ng-c2582205232=""
            className="latest-events ng-star-inserted"
          >
            {latestEvents?.map((item, i) => {
              return (
                <div
                  onClick={() => {
                    navigate(
                      `/game-details/${item?.eventTypeId}/${item?.eventId}`
                    );
                  }}
                  key={i}
                  _ngcontent-ng-c2582205232=""
                  className="le-item ng-star-inserted"
                >
                  <h2 _ngcontent-ng-c2582205232="" className="ng-star-inserted">
                    <span _ngcontent-ng-c2582205232="" className="blink-it">
                      {item?.eventName}
                    </span>
                  </h2>
                </div>
              );
            })}
          </div>
        )}

        <div _ngcontent-ng-c2582205232="" className="pagetab-header">
          <div
            onClick={() => setSportsType(4)}
            _ngcontent-ng-c2582205232=""
            routerlinkactive="active-link"
            className={`pagetab-item ng-star-inserted   ${
              sportsType === 4 ? "active-link" : ""
            }`}
          >
            <div
              _ngcontent-ng-c2582205232=""
              className={`icon-wrap ${
                sportsType === 4 ? "rotate-animation" : ""
              }`}
            >
              <img
                _ngcontent-ng-c2582205232=""
                alt="Tab Icon"
                src="/assets/img/ball.svg"
              />
            </div>
            <div _ngcontent-ng-c2582205232="" className="tab-label">
              Cricket
            </div>
          </div>
          <div
            onClick={() => setSportsType(1)}
            _ngcontent-ng-c2582205232=""
            routerlinkactive="active-link"
            className={`pagetab-item ng-star-inserted   ${
              sportsType === 1 ? "active-link" : ""
            }`}
          >
            <div
              _ngcontent-ng-c2582205232=""
              className={`icon-wrap ${
                sportsType === 1 ? "rotate-animation" : ""
              }`}
            >
              <img
                _ngcontent-ng-c2582205232=""
                alt="Tab Icon"
                src="/assets/img/soccer.svg"
              />
            </div>
            <div _ngcontent-ng-c2582205232="" className="tab-label">
              Soccer
            </div>
          </div>
          <div
            onClick={() => setSportsType(2)}
            _ngcontent-ng-c2582205232=""
            routerlinkactive="active-link"
            className={`pagetab-item ng-star-inserted   ${
              sportsType === 2 ? "active-link" : ""
            }`}
          >
            {/* <p
              _ngcontent-ng-c2582205232=""
              className="newgame ng-star-inserted"
            >
              Started
            </p> */}
            <div
              _ngcontent-ng-c2582205232=""
              className={`icon-wrap ${
                sportsType === 2 ? "rotate-animation" : ""
              }`}
            >
              <img
                _ngcontent-ng-c2582205232=""
                alt="Tab Icon"
                src="/assets/img/tennis.svg"
              />
            </div>
            <div _ngcontent-ng-c2582205232="" className="tab-label">
              Tennis
            </div>
          </div>
          <div
            onClick={() => setSportsType(5)}
            _ngcontent-ng-c2582205232=""
            routerlinkactive="active-link"
            className={`pagetab-item ng-star-inserted   ${
              sportsType === 5 ? "active-link" : ""
            }`}
          >
            {/* <p
              _ngcontent-ng-c2582205232=""
              className="newgame ng-star-inserted"
            >
              Started
            </p> */}
            <div
              _ngcontent-ng-c2582205232=""
              className={`icon-wrap ${
                sportsType === 5 ? "rotate-animation" : ""
              }`}
            >
              <img
                _ngcontent-ng-c2582205232=""
                alt="Tab Icon"
                src="/public/assets/img/kabbadi.svg"
              />
            </div>
            <div _ngcontent-ng-c2582205232="" className="tab-label">
              Kabbadi
            </div>
          </div>
          <div
            onClick={() => setSportsType("aura")}
            _ngcontent-ng-c2582205232=""
            routerlink="/casino-bmk-lobby"
            routerlinkactive="active-link"
            className={`pagetab-item ng-star-inserted   ${
              sportsType === "aura" ? "active-link" : ""
            }`}
          >
            <div
              _ngcontent-ng-c2582205232=""
              className={`icon-wrap ${
                sportsType === "aura" ? "rotate-animation" : ""
              }`}
            >
              <img
                _ngcontent-ng-c2582205232=""
                alt="Tab Icon"
                src="/assets/img/cards-header-icon.svg"
              />
            </div>
            <div _ngcontent-ng-c2582205232="" className="tab-label">
              Card Games
            </div>
          </div>

          <div
            onClick={() => setSportsType("live-casino")}
            _ngcontent-ng-c2582205232=""
            routerlink="/live-casino-lobby/live_casino"
            routerlinkactive="active-link"
            className={`pagetab-item ng-star-inserted   ${
              sportsType === "live-casino" ? "active-link" : ""
            }`}
          >
            <div
              _ngcontent-ng-c2582205232=""
              className={`icon-wrap ${
                sportsType === "live-casino" ? "rotate-animation" : ""
              }`}
            >
              <img
                _ngcontent-ng-c2582205232=""
                alt="Tab Icon"
                src="/assets/img/chips-header-icon.svg"
              />
            </div>
            <div _ngcontent-ng-c2582205232="" className="tab-label">
              Live Casino
            </div>
          </div>

          <div
            onClick={() => setSportsType("casino")}
            _ngcontent-ng-c2582205232=""
            routerlink="/casino-lobby/casino"
            routerlinkactive="active-link"
            className={`pagetab-item ng-star-inserted ${
              sportsType === "casino" ? "active-link" : ""
            }`}
          >
            <div
              _ngcontent-ng-c2582205232=""
              className={`icon-wrap ${
                sportsType === "casino" ? "rotate-animation" : ""
              }`}
            >
              <img
                _ngcontent-ng-c2582205232=""
                alt="Tab Icon"
                src="/assets/img/dice-header-icon.svg"
              />
            </div>
            <div _ngcontent-ng-c2582205232="" className="tab-label">
              Casino
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
