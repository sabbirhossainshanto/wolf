/* eslint-disable react/no-unknown-property */
import { API } from "../../api";
import useContextState from "../../hooks/useContextState";

const Withdraw = () => {
  const { token } = useContextState();
  if(!token){
    return
  }
  return (
    <div _ngcontent-ng-c943649379="" className="page-body demoID"
    style={{minHeight:'100vh'}}
    >
      <iframe
        allow="fullscreen;"
        src={`${API?.withdraw}/${API?.siteUrl}/${token}`}
        style={{ width: "100%", minHeight: "100vh", border: "0px" }}
      ></iframe>
      <div _ngcontent-ng-c943649379="" className="floating-btns">
        <div _ngcontent-ng-c943649379="" className="btn-item ng-star-inserted">
          <div _ngcontent-ng-c943649379="" className="btn-wrap whatsapp">
            <img
              _ngcontent-ng-c943649379=""
              alt="WhatsApp"
              src="https://ss.manage63.com/bmk-wl/commonAssets/whatsapp-icon.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
