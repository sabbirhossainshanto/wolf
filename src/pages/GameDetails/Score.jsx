const Score = ({ score }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "10px",
          color: "white",
          margin: "0px",
          lineHeight: "0px",
        }}
      >
        <p style={{ color: "white", width: "150px" }}>{score?.player1}</p>
        {score?.set1?.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
        <span style={{ color: "#41b7fa" }}>{score?.team1Score}</span>
        <span
          className={`${
            score?.service == 1 ? "active_service" : "deActive_service"
          }`}
        ></span>
        <span
          style={{
            border: "1px solid white",
            padding: "6px 4px",
            borderRadius: "2px",
          }}
        >
          {score?.totalSet1}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          fontSize: "10px",
          color: "white",
          margin: "0px",
          lineHeight: "0px",
        }}
      >
        <p style={{ color: "white", width: "150px" }}>{score?.player2}</p>
        {score?.set2?.map((item, i) => {
          return <div key={i}>{item}</div>;
        })}
        <span style={{ color: "#41b7fa" }}>{score?.team2Score}</span>

        <span
          className={`${
            score?.service == 2 ? "active_service" : "deActive_service"
          }`}
        ></span>
        <span
          style={{
            border: "1px solid white",
            padding: "6px 4px",
            borderRadius: "2px",
          }}
        >
          {score?.totalSet2}
        </span>
      </div>
    </div>
  );
};

export default Score;
