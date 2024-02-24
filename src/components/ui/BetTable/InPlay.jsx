/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";

const InPlay = ({ keys, data }) => {
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };
  return (
    <>
      {data[keys]?.inPlay === 1 && (
        <div
          onClick={() => navigateGameList(keys)}
          style={{ cursor: "pointer" }}
          _ngcontent-ng-c943649379=""
          className="cricket-card notranslate ng-star-inserted"
        >
          <div _ngcontent-ng-c943649379="" className="card-header">
            <h3 _ngcontent-ng-c943649379="" className="card-title">
              <span
                _ngcontent-ng-c943649379=""
                role="img"
                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                play_arrow
              </span>
              {data[keys]?.eventName}
            </h3>
            <div _ngcontent-ng-c943649379="" className="lay-back-wrap">
              <h3 _ngcontent-ng-c943649379="" className="back-bg">
                Back
              </h3>
              <h3 _ngcontent-ng-c943649379="" className="lay-bg">
                Lay
              </h3>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" className="card-body">
            {data[keys]?.[0] && (
              <div
                style={{ cursor: "pointer" }}
                _ngcontent-ng-c943649379=""
                className="data-wrap ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" className="teamlist-info">
                  <span _ngcontent-ng-c943649379=""></span>
                  <h3 _ngcontent-ng-c943649379="" className="team-title">
                    {data[keys]?.[0]?.teamName}
                  </h3>
                </div>
                {data[keys]?.status === "OPEN" ? (
                  <div
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
                          {" "}
                          {data[keys]?.[0]?.ex?.availableToBack[0]?.price}
                        </h4>{" "}
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
                          {" "}
                          {data[keys]?.[0]?.ex?.availableToLay[0]?.price}
                        </h4>{" "}
                      </span>
                      <span className="mat-mdc-focus-indicator"></span>
                      <span className="mat-mdc-button-touch-target"></span>
                    </button>
                  </div>
                ) : (
                  <div
                    _ngcontent-ng-c943649379=""
                    class="suspended-wrap ng-star-inserted"
                  >
                    <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                  </div>
                )}
              </div>
            )}
            {data[keys]?.[1] && (
              <div
                style={{ cursor: "pointer" }}
                _ngcontent-ng-c943649379=""
                className="data-wrap ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" className="teamlist-info">
                  <span _ngcontent-ng-c943649379=""></span>
                  <h3 _ngcontent-ng-c943649379="" className="team-title">
                    {data[keys]?.[1]?.teamName}
                  </h3>
                </div>
                {data[keys]?.status === "OPEN" ? (
                  <div
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
                          {" "}
                          {data[keys]?.[1]?.ex?.availableToBack[0]?.price}
                        </h4>{" "}
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
                          {" "}
                          {data[keys]?.[1]?.ex?.availableToLay[0]?.price}
                        </h4>{" "}
                      </span>
                      <span className="mat-mdc-focus-indicator"></span>
                      <span className="mat-mdc-button-touch-target"></span>
                    </button>
                  </div>
                ) : (
                  <div
                    _ngcontent-ng-c943649379=""
                    class="suspended-wrap ng-star-inserted"
                  >
                    <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                  </div>
                )}
              </div>
            )}
            {data[keys]?.[2] && (
              <div
                style={{ cursor: "pointer" }}
                _ngcontent-ng-c943649379=""
                className="data-wrap ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" className="teamlist-info">
                  <span _ngcontent-ng-c943649379=""></span>
                  <h3 _ngcontent-ng-c943649379="" className="team-title">
                    {data[keys]?.[2]?.teamName}
                  </h3>
                </div>
                {data[keys]?.status === "OPEN" ? (
                  <div
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
                          {" "}
                          {data[keys]?.[2]?.ex?.availableToBack[0]?.price}
                        </h4>{" "}
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
                          {" "}
                          {data[keys]?.[2]?.ex?.availableToLay[0]?.price}
                        </h4>{" "}
                      </span>
                      <span className="mat-mdc-focus-indicator"></span>
                      <span className="mat-mdc-button-touch-target"></span>
                    </button>
                  </div>
                ) : (
                  <div
                    _ngcontent-ng-c943649379=""
                    class="suspended-wrap ng-star-inserted"
                  >
                    <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InPlay;
