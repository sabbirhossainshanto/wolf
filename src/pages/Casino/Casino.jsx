/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import UseTokenGenerator from "../../hooks/UseTokenGenerator";
import UseEncryptData from "../../hooks/UseEncryptData";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../api";
import useContextState from "../../hooks/useContextState";

const Casino = () => {
  const [iFrame, setIFrame] = useState("");
  const { token } = useContextState();
  const { id } = useParams();
  useEffect(() => {
    const getCasinoVideo = async () => {
      const generatedToken = UseTokenGenerator();
      const encryptedData = UseEncryptData({
        gameId: id?.toString(),
        token: generatedToken,
        isHome: false,
        mobileOnly: true,
      });

      try {
        const res = await axios.post(API.liveCasinoIFrame, encryptedData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res?.data;
        setIFrame(data?.gameUrl);
        // window.open(data?.gameUrl, "_blank");
      } catch (error) {
        console.error("Error opening casino game:", error);
        // Handle error as needed
      }
    };
    getCasinoVideo();
  }, [id, token]);
  return (
    <div
      _ngcontent-ng-c943649379=""
      class="page-body"
      style={{ minHeight: "100vh" }}
    >
      <iframe
        allow="fullscreen;"
        src={iFrame}
        style={{
          // position: "fixed",
          // top: "0",
          // left: "0",
          // bottom: "0",
          // right: "0",
          width: "100%",
          height: "100vh",
          border: "none",
          margin: "0",
          padding: "0",
          overflow: "hidden",
          zIndex: "999999",
        }}
      ></iframe>
    </div>
  );
};

export default Casino;
