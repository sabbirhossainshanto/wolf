/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import useContextState from "../../hooks/useContextState";
import handleOpenWarningModal from "../../utils/handleOpenWarningModal";
import useLiveCasino from "../../hooks/useLiveCasino";
import Warning from "../../components/modal/Warning";

const LiveCasino = () => {
  const { data } = useLiveCasino();
  const { setSportsType, token } = useContextState();
  const [showWarning, setShowWarning] = useState(false);
  const [gameId, setGameId] = useState("");
  return (
    <div
      _ngcontent-ng-c943649379=""
      className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
    >
      {showWarning && (
        <Warning gameId={gameId} setShowWarning={setShowWarning} />
      )}
      <div _ngcontent-ng-c943649379="" className="game-play-heading">
        <h2 _ngcontent-ng-c943649379="">Live Casino</h2>
        <a
          _ngcontent-ng-c943649379=""
          routerlink="/live-casino-lobby/live_casino"
          routerlinkactive="active-link"
          className="view-all-link ng-star-inserted"
          onClick={() => setSportsType("live-casino")}
        >
          View All
        </a>
      </div>
      <div
        _ngcontent-ng-c943649379=""
        className="game-type-list ng-star-inserted"
      >
        <ul _ngcontent-ng-c943649379="">
          {data?.map((item, i) => {
            return (
              <li
                onClick={() =>
                  handleOpenWarningModal(
                    "live-casino",
                    item?.game_code,
                    token,
                    setGameId,
                    setShowWarning
                  )
                }
                key={i}
                _ngcontent-ng-c943649379=""
                className="ng-star-inserted"
              >
                <p _ngcontent-ng-c943649379="" className="total-players">
                  <span
                    _ngcontent-ng-c943649379=""
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    group
                  </span>
                  {item?.active_players}
                </p>
                <a _ngcontent-ng-c943649379="" className="active">
                  <img _ngcontent-ng-c943649379="" alt="" src={item?.img} />
                </a>
                <div _ngcontent-ng-c943649379="" className="game-detail">
                  <p _ngcontent-ng-c943649379="" className="company-type">
                    {item?.provider_name}
                  </p>
                  <p _ngcontent-ng-c943649379="" className="game-name">
                    {item?.game_name}
                  </p>
                  <p
                    _ngcontent-ng-c943649379=""
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
  );
};

export default LiveCasino;
