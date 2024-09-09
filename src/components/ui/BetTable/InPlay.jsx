/* eslint-disable react/no-unknown-property */
import { useNavigate } from "react-router-dom";
import { MdOutlineSmartDisplay } from "react-icons/md";
import useContextState from "../../../hooks/useContextState";
const InPlay = ({ keys, data }) => {
  const navigate = useNavigate();
  const { sportsType } = useContextState();
  /* Navigate game details page */
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  const defineGrid = (sportsType, score) => {
    if ((sportsType == 2 || sportsType == 1) && score) {
      return "2fr 2fr 2fr";
    } else {
      return "4fr 2fr";
    }
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
              <MdOutlineSmartDisplay size={15} color="#eb5050" />

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
                style={{
                  cursor: "pointer",
                  gridTemplateColumns: defineGrid(
                    sportsType,
                    data?.[keys]?.score
                  ),
                }}
                _ngcontent-ng-c943649379=""
                className="data-wrap ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" className="teamlist-info">
                  <span _ngcontent-ng-c943649379=""></span>
                  <h3 _ngcontent-ng-c943649379="" className="team-title">
                    {data[keys]?.[0]?.teamName}
                  </h3>
                </div>
                {sportsType == 2 && data?.[keys]?.score && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "12px",
                      margin: "0px",
                      lineHeight: "0px",
                      justifyContent: "end",
                    }}
                  >
                    {data[keys]?.score?.set1?.map((item, i) => {
                      return <div key={i}>{item}</div>;
                    })}
                    <span style={{ color: "#41b7fa" }}>
                      {data[keys]?.score?.team1Score}
                    </span>
                    <span
                      className={`${
                        data[keys]?.score?.service == 1
                          ? "active_service"
                          : "deActive_service"
                      }`}
                    ></span>
                    <span
                      style={{
                        border: `${
                          data[keys]?.score?.totalSet1
                            ? "1px solid gray"
                            : "none"
                        }`,
                        padding: "7px 4px",
                        borderRadius: "2px",
                      }}
                    >
                      {data[keys]?.score?.totalSet1}
                    </span>
                  </div>
                )}
                {sportsType == 1 && data?.[keys]?.score && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "12px",
                      margin: "0px",
                      lineHeight: "0px",
                      justifyContent: "end",
                    }}
                  >
                    <span
                      style={{
                        border: `${
                          data[keys]?.score?.total_1 ? "1px solid gray" : "none"
                        }`,
                        padding: "7px 4px",
                        borderRadius: "2px",
                      }}
                    >
                      {data[keys]?.score?.total_1}
                    </span>
                  </div>
                )}
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
                    className="suspended-wrap ng-star-inserted"
                  >
                    <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                  </div>
                )}
              </div>
            )}
            {data[keys]?.[1] && (
              <div
                style={{
                  cursor: "pointer",
                  gridTemplateColumns: defineGrid(
                    sportsType,
                    data?.[keys]?.score
                  ),
                }}
                _ngcontent-ng-c943649379=""
                className="data-wrap ng-star-inserted"
              >
                <div _ngcontent-ng-c943649379="" className="teamlist-info">
                  <span _ngcontent-ng-c943649379=""></span>
                  <h3 _ngcontent-ng-c943649379="" className="team-title">
                    {data[keys]?.[1]?.teamName}
                  </h3>
                </div>
                {sportsType == 2 && data?.[keys]?.score && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "12px",
                      margin: "0px",
                      lineHeight: "0px",
                      justifyContent: "end",
                    }}
                  >
                    {data[keys]?.score?.set2?.map((item, i) => {
                      return <div key={i}>{item}</div>;
                    })}
                    <span style={{ color: "#41b7fa" }}>
                      {data[keys]?.score?.team2Score}
                    </span>
                    <span
                      className={`${
                        data[keys]?.score?.service == 2
                          ? "active_service"
                          : "deActive_service"
                      }`}
                    ></span>
                    <span
                      style={{
                        border: `${
                          data[keys]?.score?.totalSet1
                            ? "1px solid gray"
                            : "none"
                        }`,
                        padding: "7px 4px",
                        borderRadius: "2px",
                      }}
                    >
                      {data[keys]?.score?.totalSet2}
                    </span>
                  </div>
                )}
                {sportsType == 1 && data?.[keys]?.score && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "12px",
                      margin: "0px",
                      lineHeight: "0px",
                      justifyContent: "end",
                    }}
                  >
                    <span
                      style={{
                        border: `${
                          data[keys]?.score?.total_2 ? "1px solid gray" : "none"
                        }`,
                        padding: "7px 4px",
                        borderRadius: "2px",
                      }}
                    >
                      {data[keys]?.score?.total_2}
                    </span>
                  </div>
                )}
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
                    className="suspended-wrap ng-star-inserted"
                  >
                    <h4 _ngcontent-ng-c943649379="">Suspended</h4>
                  </div>
                )}
              </div>
            )}
            {data[keys]?.[2] && (
              <div
                style={{
                  cursor: "pointer",
                  gridAutoColumns: defineGrid(sportsType, data?.[keys]?.score),
                }}
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
                    className="suspended-wrap ng-star-inserted"
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
