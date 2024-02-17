import { useNavigate } from "react-router-dom";
// import { FaStar } from "react-icons/fa";
/* eslint-disable react/no-unknown-property */
const BetTable = ({ data, keys }) => {
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };
  // console.log(data);
  return (
    <>
      {data[keys]?.inPlay === 0 && (
        <div
        style={{cursor:'pointer'}} 
          onClick={() => navigateGameList(keys)}
          _ngcontent-ng-c943649379=""
          className="table-item ng-star-inserted"
        >
          <div _ngcontent-ng-c943649379="" className="teamlist-info">
            <div _ngcontent-ng-c943649379="" className="match-time">
              {/* {data[keys]?.inPlay === 1 ? (
            <span
              _ngcontent-ng-c943649379=""
              className="inplay ng-star-inserted"
            >
              In-play
            </span>
          ) : (
            <p _ngcontent-ng-c943649379="" className=" ng-star-inserted">
              {data[keys]?.date}
            </p>
          )} */}
              <p _ngcontent-ng-c943649379="" className=" ng-star-inserted">
                {data[keys]?.date}
              </p>
            </div>

            <h3 _ngcontent-ng-c943649379="" class="team-title">
              <p _ngcontent-ng-c943649379="" class="ng-star-inserted">
                <span
                  _ngcontent-ng-c943649379=""
                  className="team-name ng-star-inserted"
                >
                  {data[keys]?.eventName}
                </span>
              </p>
            </h3>

            {/* <div
          _ngcontent-ng-c943649379=""
          className="inplay-wrap ng-star-inserted"
        >
          <span
            _ngcontent-ng-c943649379=""
            role="img"
            className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
            aria-hidden="true"
            data-mat-icon-type="font"
          >
            play_arrow
          </span>
        </div> */}
          </div>
          {/* <div
            _ngcontent-ng-c943649379=""
            className="count-v-wrap ng-star-inserted"
          >
            <button
              _ngcontent-ng-c943649379=""
              mat-flat-button=""
              className="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
              mat-ripple-loader-uninitialized=""
              mat-ripple-loader-class-name="mat-mdc-button-ripple"
            >
              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
              <span className="mdc-button__label">
                <h4 _ngcontent-ng-c943649379="">
                  {data[keys]?.[0]?.ex?.availableToBack[0]?.price}
                </h4>
                <p _ngcontent-ng-c943649379="">
                  {data[keys]?.[0]?.ex?.availableToBack[0]?.size}
                </p>{" "}
              </span>
              <span className="mat-mdc-focus-indicator"></span>
              <span className="mat-mdc-button-touch-target"></span>
            </button>
            <button
              _ngcontent-ng-c943649379=""
              mat-flat-button=""
              className="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
              mat-ripple-loader-uninitialized=""
              mat-ripple-loader-class-name="mat-mdc-button-ripple"
            >
              <span className="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
              <span className="mdc-button__label">
                <h4 _ngcontent-ng-c943649379="">
                  {data[keys]?.[0]?.ex?.availableToLay[0]?.price}
                </h4>
                <p _ngcontent-ng-c943649379="">
                  {data[keys]?.[0]?.ex?.availableToLay[0]?.size}
                </p>{" "}
              </span>
              <span className="mat-mdc-focus-indicator"></span>
              <span className="mat-mdc-button-touch-target"></span>
            </button>
          </div> */}
        </div>
      )}
    </>
  );
};

export default BetTable;
