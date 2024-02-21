import { useEffect, useState } from "react";
import Dropdown from "./Dropdown";
import Warning from "../../../components/modal/Warning";
import { API, Settings } from "../../../api";
import useContextState from "../../../hooks/useContextState";
import axios from "axios";
import UseTokenGenerator from "../../../hooks/UseTokenGenerator";
import UseEncryptData from "../../../hooks/UseEncryptData";
/* eslint-disable react/no-unknown-property */
const LiveCasinoTab = () => {
  const [showLeftDropdown, setShowLeftDropdown] = useState(false);
  const [showRightDropdown, setShowRightDropdown] = useState(false);
  const [gameList, setGameList] = useState("All");
  const [product, setProduct] = useState("All");
  const [showWarning, setShowWarning] = useState(false);
  const [gameId, setGameId] = useState("");
  const { token, sportsType } = useContextState();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  // const { data, refetchLiveCasino, isLoading } = useLiveCasino(
  //   gameList,
  //   product
  // );

  useEffect(() => {
    const apiMapping = {
      "live-casino": API.liveCasinoWolf,
      casino: API.slotWolf,
      aura: API.auraWolf,
    };
    const getGames = async () => {
      const res = await axios.post(
        apiMapping[sportsType],
        {
          gameList,
          product,
          ishome : false,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res?.status === 200) {
        const result = res?.data;
        setData(result);
        setLoading(false);
      }
    };
    getGames();
  }, [gameList, product, sportsType, token]);

  const handleOpenWarningModal = async (item) => {
    if (Settings.casinoCurrency !== "AED" || sportsType === "aura") {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        gameId: item?.game_id?.toString(),
        token: generatedToken,
        ishome : false,
      });

      const res = await axios.post(API.liveCasinoIFrame, encryptedData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res?.data;
      window.open(data?.gameUrl, "_blank");
    } else {
      setGameId("");
      setGameId(item?.game_id);
      setShowWarning(true);
    }
  };

  if (loading) {
    return "Loading";
  }

  return (
    <div _ngcontent-ng-c1965075897="" className="page-body">
      {showWarning && (
        <Warning gameId={gameId} setShowWarning={setShowWarning} />
      )}
      {sportsType !== "aura" && (
        <div _ngcontent-ng-c1965075897="" className="filter-wrapper">
          <Dropdown
            showLeftDropdown={showLeftDropdown}
            setShowLeftDropdown={setShowLeftDropdown}
            data={data}
            showRightDropdown={showRightDropdown}
            setShowRightDropdown={setShowRightDropdown}
            setProduct={setProduct}
            setGameList={setGameList}
            product={product}
            gameList={gameList}
          />
        </div>
      )}

      {sportsType !== "aura" &&
      data &&
      data?.gameList &&
      Object.values(data?.gameList) ? (
        Object.keys(data?.gameList).map((title, i) => {
          return (
            <div
              key={i}
              _ngcontent-ng-c1965075897=""
              className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
            >
              <div _ngcontent-ng-c1965075897="" className="game-play-heading">
                <h2 _ngcontent-ng-c1965075897="">{title}</h2>
              </div>
              <div
                _ngcontent-ng-c1965075897=""
                className="game-type-list ng-star-inserted"
              >
                <ul _ngcontent-ng-c1965075897="">
                  {Array.isArray(data.gameList[title]) ?
                    data?.gameList[title]?.map((item, i) => {
                      return (
                        <li
                          onClick={() => handleOpenWarningModal(item)}
                          key={i}
                          _ngcontent-ng-c1965075897=""
                          className="ng-star-inserted"
                        >
                          <a _ngcontent-ng-c1965075897="" className="active">
                            <img
                              _ngcontent-ng-c1965075897=""
                              alt=""
                              src={item?.url_thumb}
                            />
                          </a>
                          <p
                            _ngcontent-ng-c1965075897=""
                            className="total-players"
                          >
                            <span
                              _ngcontent-ng-c1965075897=""
                              role="img"
                              className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                              aria-hidden="true"
                              data-mat-icon-type="font"
                            >
                              group
                            </span>{" "}
                            {item?.active_players}
                          </p>
                          <div
                            _ngcontent-ng-c1965075897=""
                            className="game-detail"
                          >
                            <p
                              _ngcontent-ng-c1965075897=""
                              className="company-type"
                            >
                              {item?.product}
                            </p>
                            <p
                              _ngcontent-ng-c1965075897=""
                              className="game-name"
                            >
                              {item?.game_name}
                            </p>
                            <p
                              _ngcontent-ng-c1965075897=""
                              className="coins-limit ng-star-inserted"
                            >
                              {item?.text}
                            </p>
                          </div>
                        </li>
                      );
                    }):(
                      Object.values(data?.gameList[title]).map((item, i) => {
                        return (
                          <li
                            onClick={() => handleOpenWarningModal(item)}
                            key={i}
                            _ngcontent-ng-c1965075897=""
                            className="ng-star-inserted"
                          >
                            <a _ngcontent-ng-c1965075897="" className="active">
                              <img
                                _ngcontent-ng-c1965075897=""
                                alt=""
                                src={item?.url_thumb}
                              />
                            </a>
                            <p
                              _ngcontent-ng-c1965075897=""
                              className="total-players"
                            >
                              <span
                                _ngcontent-ng-c1965075897=""
                                role="img"
                                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                                aria-hidden="true"
                                data-mat-icon-type="font"
                              >
                                group
                              </span>{" "}
                              {item?.active_players}
                            </p>
                            <div
                              _ngcontent-ng-c1965075897=""
                              className="game-detail"
                            >
                              <p
                                _ngcontent-ng-c1965075897=""
                                className="company-type"
                              >
                                {item?.product}
                              </p>
                              <p
                                _ngcontent-ng-c1965075897=""
                                className="game-name"
                              >
                                {item?.game_name}
                              </p>
                              <p
                                _ngcontent-ng-c1965075897=""
                                className="coins-limit ng-star-inserted"
                              >
                                {item?.text}
                              </p>
                            </div>
                          </li>
                        );
                      })
                    )}
                </ul>
              </div>
            </div>
          );
        })
      ) : (
        <div
          _ngcontent-ng-c1965075897=""
          className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
        >
          {/* <div _ngcontent-ng-c1965075897="" className="game-play-heading">
                <h2 _ngcontent-ng-c1965075897="">{title}</h2>
              </div> */}
          <div
            _ngcontent-ng-c1965075897=""
            className="game-type-list ng-star-inserted"
          >
            <ul _ngcontent-ng-c1965075897="">
              {data?.data?.map((item, i) => {
                return (
                  <li
                    onClick={() => handleOpenWarningModal(item)}
                    key={i}
                    _ngcontent-ng-c1965075897=""
                    className="ng-star-inserted"
                  >
                    <a _ngcontent-ng-c1965075897="" className="active">
                      <img
                        _ngcontent-ng-c1965075897=""
                        alt=""
                        src={item?.img}
                      />
                    </a>
                    <p _ngcontent-ng-c1965075897="" className="total-players">
                      <span
                        _ngcontent-ng-c1965075897=""
                        role="img"
                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        group
                      </span>{" "}
                      {item?.active_players}
                    </p>
                    <div _ngcontent-ng-c1965075897="" className="game-detail">
                      <p _ngcontent-ng-c1965075897="" className="company-type">
                        {item?.provider_name}
                      </p>
                      <p _ngcontent-ng-c1965075897="" className="game-name">
                        {item?.game_name}
                      </p>
                      <p
                        _ngcontent-ng-c1965075897=""
                        className="coins-limit ng-star-inserted"
                      >
                        {item?.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveCasinoTab;
