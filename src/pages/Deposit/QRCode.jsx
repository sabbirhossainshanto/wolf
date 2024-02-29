/* eslint-disable react/no-unknown-property */

const QRCode = ({ depositData }) => {
  return (
    <div
      _ngcontent-ng-c3816252360=""
      className="payment-type-details qr-code-payment ng-star-inserted"
    >
      <h4 _ngcontent-ng-c3816252360="">QR code for payment</h4>
      <ul _ngcontent-ng-c3816252360="">
        <li _ngcontent-ng-c3816252360="" className="qr-img">
          <img _ngcontent-ng-c3816252360="" src={depositData?.qrCodeLink} />
        </li>
        <li _ngcontent-ng-c3816252360="">
          <div _ngcontent-ng-c3816252360="" className="qr-details">
            <label _ngcontent-ng-c3816252360="">Display Name</label>
            <p _ngcontent-ng-c3816252360="">{depositData?.qrDisplayName}</p>
          </div>
          <button
            _ngcontent-ng-c3816252360=""
            className="btn secondary-btn mb-2"
          >
            {" "}
            Download QR
          </button>
          <button _ngcontent-ng-c3816252360="" className="btn secondary-btn">
            {" "}
            Open QR{" "}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default QRCode;
