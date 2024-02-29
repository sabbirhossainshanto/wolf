import useContextState from "../../hooks/useContextState";
import { handleCopyToClipBoard } from "../../utils/handleCopyToClipBoard";

/* eslint-disable react/no-unknown-property */
const UPI = ({ depositData }) => {
  const {setCopyTextSuccess} = useContextState()

  return (
    <div
      _ngcontent-ng-c3816252360=""
      className="payment-type-details upi-details-section ng-star-inserted"
    >
      <ul _ngcontent-ng-c3816252360="">
        <li _ngcontent-ng-c3816252360="" className="list-heading">
          <div _ngcontent-ng-c3816252360="" className="list-left-side">
            <p _ngcontent-ng-c3816252360="" className="pay-mode">
              Mode
            </p>
            <p _ngcontent-ng-c3816252360="">Display name</p>
          </div>
          <p _ngcontent-ng-c3816252360="">UPI Details</p>
        </li>
        <li _ngcontent-ng-c3816252360="" className="ng-star-inserted">
          <div _ngcontent-ng-c3816252360="" className="list-left-side">
            <div _ngcontent-ng-c3816252360="" className="pay-mode img-wrap">
              <img
                _ngcontent-ng-c3816252360=""
                src="https://ss.manage63.com/south247/uploads/payment/phone_pe.png"
              />
            </div>
            <label _ngcontent-ng-c3816252360="">
              {depositData?.upiAccountName}
            </label>
          </div>
          <p _ngcontent-ng-c3816252360="">
            <span _ngcontent-ng-c3816252360="">{depositData?.upiId}</span>
            <a
              onClick={() => handleCopyToClipBoard(depositData?.upiId,setCopyTextSuccess)}
              _ngcontent-ng-c3816252360=""
            >
              <span
                _ngcontent-ng-c3816252360=""
                role="img"
                className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                aria-hidden="true"
                data-mat-icon-type="font"
              >
                content_copy
              </span>
            </a>
          </p>
        </li>
        <li
         onClick={() => handleCopyToClipBoard(depositData?.upiId,setCopyTextSuccess)}
        _ngcontent-ng-c3816252360="" className="ng-star-inserted">
              <div _ngcontent-ng-c3816252360="" className="list-left-side">
                <div _ngcontent-ng-c3816252360="" className="pay-mode img-wrap">
                  <img
                    _ngcontent-ng-c3816252360=""
                    src="https://ss.manage63.com/south247/uploads/payment/google_pay.png"
                  />
                </div>
                <label _ngcontent-ng-c3816252360=""> {depositData?.upiAccountName}</label>
              </div>
              <p _ngcontent-ng-c3816252360="">
                <span _ngcontent-ng-c3816252360="">{depositData?.upiId}</span>
                <a _ngcontent-ng-c3816252360="">
                  <span
                    _ngcontent-ng-c3816252360=""
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    content_copy
                  </span>
                </a>
              </p>
            </li>
            <li 
             onClick={() => handleCopyToClipBoard(depositData?.upiId,setCopyTextSuccess)}
            _ngcontent-ng-c3816252360="" className="ng-star-inserted">
              <div _ngcontent-ng-c3816252360="" className="list-left-side">
                <div _ngcontent-ng-c3816252360="" className="pay-mode img-wrap">
                  <img
                    _ngcontent-ng-c3816252360=""
                    src="https://ss.manage63.com/south247/uploads/payment/paytm_upi.png"
                  />
                </div>
                <label _ngcontent-ng-c3816252360=""> {depositData?.upiAccountName}</label>
              </div>
              <p _ngcontent-ng-c3816252360="">
                <span _ngcontent-ng-c3816252360="">{depositData?.upiId}</span>
                <a _ngcontent-ng-c3816252360="">
                  <span
                    _ngcontent-ng-c3816252360=""
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    content_copy
                  </span>
                </a>
              </p>
            </li>
      </ul>
    </div>
  );
};

export default UPI;
