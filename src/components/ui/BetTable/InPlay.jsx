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
          _ngcontent-ng-c943649379=""
          class="cricket-card notranslate ng-star-inserted"
        >
          <div _ngcontent-ng-c943649379="" class="card-header">
            <h3 _ngcontent-ng-c943649379="" class="card-title">
              <mat-icon
                _ngcontent-ng-c943649379=""
                role="img"
                class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                play_arrow
              </mat-icon>
              {data[keys]?.eventName}
            </h3>
            <div _ngcontent-ng-c943649379="" class="lay-back-wrap">
              <h3 _ngcontent-ng-c943649379="" class="back-bg">
                Back
              </h3>
              <h3 _ngcontent-ng-c943649379="" class="lay-bg">
                Lay
              </h3>
            </div>
          </div>
          <div _ngcontent-ng-c943649379="" class="card-body">
            {data[keys]?.[0] && (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigateGameList(keys)}
                _ngcontent-ng-c943649379=""
                class="data-wrap ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" class="teamlist-info">
                  <span _ngcontent-ng-c943649379=""></span>
                  <h3 _ngcontent-ng-c943649379="" class="team-title">
                    {data[keys]?.[0]?.teamName}
                  </h3>
                </div>
                <div
                  _ngcontent-ng-c943649379=""
                  class="count-v-wrap ng-star-inserted"
                >
                  <button
                    _ngcontent-ng-c943649379=""
                    mat-flat-button=""
                    class="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-uninitialized=""
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span class="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span class="mdc-button__label">
                      <h4 _ngcontent-ng-c943649379="">
                        {" "}
                        {data[keys]?.[0]?.ex?.availableToBack[0]?.price}
                      </h4>{" "}
                    </span>
                    <span class="mat-mdc-focus-indicator"></span>
                    <span class="mat-mdc-button-touch-target"></span>
                  </button>
                  <button
                    _ngcontent-ng-c943649379=""
                    mat-flat-button=""
                    class="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-uninitialized=""
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span class="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span class="mdc-button__label">
                      <h4 _ngcontent-ng-c943649379="">
                        {" "}
                        {data[keys]?.[0]?.ex?.availableToLay[0]?.price}
                      </h4>{" "}
                    </span>
                    <span class="mat-mdc-focus-indicator"></span>
                    <span class="mat-mdc-button-touch-target"></span>
                  </button>
                </div>
              </div>
            )}
            {data[keys]?.[1] && (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigateGameList(keys)}
                _ngcontent-ng-c943649379=""
                class="data-wrap ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" class="teamlist-info">
                  <span _ngcontent-ng-c943649379=""></span>
                  <h3 _ngcontent-ng-c943649379="" class="team-title">
                    {data[keys]?.[1]?.teamName}
                  </h3>
                </div>
                <div
                  _ngcontent-ng-c943649379=""
                  class="count-v-wrap ng-star-inserted"
                >
                  <button
                    _ngcontent-ng-c943649379=""
                    mat-flat-button=""
                    class="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-uninitialized=""
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span class="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span class="mdc-button__label">
                      <h4 _ngcontent-ng-c943649379="">
                        {" "}
                        {data[keys]?.[1]?.ex?.availableToBack[0]?.price}
                      </h4>{" "}
                    </span>
                    <span class="mat-mdc-focus-indicator"></span>
                    <span class="mat-mdc-button-touch-target"></span>
                  </button>
                  <button
                    _ngcontent-ng-c943649379=""
                    mat-flat-button=""
                    class="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-uninitialized=""
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span class="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span class="mdc-button__label">
                      <h4 _ngcontent-ng-c943649379="">
                        {" "}
                        {data[keys]?.[1]?.ex?.availableToLay[0]?.price}
                      </h4>{" "}
                    </span>
                    <span class="mat-mdc-focus-indicator"></span>
                    <span class="mat-mdc-button-touch-target"></span>
                  </button>
                </div>
              </div>
            )}
            {data[keys]?.[2] && (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => navigateGameList(keys)}
                _ngcontent-ng-c943649379=""
                class="data-wrap ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" class="teamlist-info">
                  <span _ngcontent-ng-c943649379=""></span>
                  <h3 _ngcontent-ng-c943649379="" class="team-title">
                    {data[keys]?.[2]?.teamName}
                  </h3>
                </div>
                <div
                  _ngcontent-ng-c943649379=""
                  class="count-v-wrap ng-star-inserted"
                >
                  <button
                    _ngcontent-ng-c943649379=""
                    mat-flat-button=""
                    class="count-value back-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-uninitialized=""
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span class="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span class="mdc-button__label">
                      <h4 _ngcontent-ng-c943649379="">
                        {" "}
                        {data[keys]?.[2]?.ex?.availableToBack[0]?.price}
                      </h4>{" "}
                    </span>
                    <span class="mat-mdc-focus-indicator"></span>
                    <span class="mat-mdc-button-touch-target"></span>
                  </button>
                  <button
                    _ngcontent-ng-c943649379=""
                    mat-flat-button=""
                    class="count-value lay-count mdc-button mdc-button--unelevated mat-mdc-unelevated-button mat-unthemed mat-mdc-button-base"
                    mat-ripple-loader-uninitialized=""
                    mat-ripple-loader-class-name="mat-mdc-button-ripple"
                  >
                    <span class="mat-mdc-button-persistent-ripple mdc-button__ripple"></span>
                    <span class="mdc-button__label">
                      <h4 _ngcontent-ng-c943649379="">
                        {" "}
                        {data[keys]?.[2]?.ex?.availableToLay[0]?.price}
                      </h4>{" "}
                    </span>
                    <span class="mat-mdc-focus-indicator"></span>
                    <span class="mat-mdc-button-touch-target"></span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InPlay;
