import { FaLock } from "react-icons/fa";
import { isRunnerSuspended } from "../../../../../utils/isRunnerSuspended";

const ColumnOne = ({ item, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="asb-pos-wide asb-flex">
          <div className="asb-flex-col asb-full-width asb-shrink asb-cut _asb_prices-column">
            {item?.Items?.map((column, idx) => {
              return (
                <div key={idx} className="asb-pos-tall _asb_prices-column-item">
                  <div className="asb-full-width">
                    <div className="asb-pos-wide asb-full-width _asb_price-block">
                      <div className="asb-flex-cc asb-cut _asb_simple-button _asb_simple-button-pointer">
                        <div className="" style={{ overFlow: "hidden" }}></div>
                        <div className="asb-flex-cc asb-cut asb-pos-stretch _asb_price-block-content">
                          <div className="asb-flex-sc asb-text _asb_price-block-content-label">
                            <div className="asb-text _asb_price-block-content-label-text">
                              {column?.Name}
                            </div>
                          </div>
                          <div className="asb-flex-cc asb-unshrink _asb_price-block-content-price">
                            <span className="">
                              {" "}
                              {isRunnerSuspended(item, column) ? (
                                <FaLock />
                              ) : (
                                column?.Price?.toFixed(2)
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ColumnOne;
