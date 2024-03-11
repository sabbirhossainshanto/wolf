const ColumnTwo = ({ columnThree }) => {
console.log(columnThree);
  return (
    <>
      {columnThree?.map((item, i) => {
        const leftColumn = item?.items?.filter(
          (column) => column?.MobileColumnNum === 1
        );
        const middleColumn = item?.items?.filter(
          (column) => column?.MobileColumnNum === 2
        );
        const rightColumn = item?.items?.filter(
          (column) => column?.MobileColumnNum === 3
        );
        return (
          <div
            key={i}
            className="_asb_expansion-panel _asb_event-details-market"
          >
            <div className="asb-flex-sc _asb_simple-button _asb_simple-button-pointer _asb_event-details-market--expansion-panel-header _asb_expansion-panel-header _asb_event-details-market--expansion-panel-title _asb_expansion-panel-title">
              <div className="" style={{ overFlow: "hidden" }}></div>

              <div className="asb-pos-wide">
                <div className="asb-flex-sc">
                  <div className="asb-flex-cc _asb_simple-button _asb_simple-button-pointer _asb_event-details-markets--favorite-market-indicator _asb_event-details-market--favorite-market-indicator">
                    <div className="" style={{ overFlow: "visible" }}></div>
                    <i className="_asb_ui-icon _asb_ui-icon---star asb-icon-star"></i>
                  </div>
                  <span className="_asb_ui-spacer"></span>
                  <div title="Handicap" className="asb-pos-wide">
                    <span className="">{item?.name}</span>
                  </div>
                </div>
              </div>
              <i className="_asb_ui-icon asb-icon-arrow-up"></i>
            </div>
            <div
              className="asb-flex-col _asb_expansion-panel-content"
              style={{ transformOrigin: "center top" }}
            >
              <div className="asb-flex _asb_event-details-market--prices-columns asb-flex">
                <div className="asb-pos-wide asb-flex">
                  <div className="asb-flex-col asb-full-width asb-shrink asb-cut _asb_prices-column">
                    {leftColumn?.map((column, idx) => {
                      return (
                        <div
                          key={idx}
                          className="asb-pos-tall _asb_prices-column-item"
                        >
                          <div className="asb-full-width">
                            <div className="asb-pos-wide asb-full-width _asb_price-block">
                              <div className="asb-flex-cc asb-cut _asb_simple-button _asb_simple-button-pointer">
                                <div
                                  className=""
                                  style={{ overFlow: "hidden" }}
                                ></div>
                                <div className="asb-flex-cc asb-cut asb-pos-stretch _asb_price-block-content">
                                  <div className="asb-flex-sc asb-text _asb_price-block-content-label">
                                    <div className="asb-text _asb_price-block-content-label-text">
                                      {column?.Name}
                                    </div>
                                  </div>
                                  <div className="asb-flex-cc asb-unshrink _asb_price-block-content-price">
                                    <span className="">{column?.Price}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="asb-flex-col asb-full-width asb-shrink asb-cut _asb_prices-column">
                    {middleColumn?.map((column, idx) => {
                      return (
                        <div
                          key={idx}
                          className="asb-pos-tall _asb_prices-column-item"
                        >
                          <div className="asb-full-width">
                            <div className="asb-pos-wide asb-full-width _asb_price-block">
                              <div className="asb-flex-cc asb-cut _asb_simple-button _asb_simple-button-pointer">
                                <div
                                  className=""
                                  style={{ overFlow: "hidden" }}
                                ></div>
                                <div className="asb-flex-cc asb-cut asb-pos-stretch _asb_price-block-content">
                                  <div className="asb-flex-sc asb-text _asb_price-block-content-label">
                                    <div className="asb-text _asb_price-block-content-label-text">
                                      {column?.Name}
                                    </div>
                                  </div>
                                  <div className="asb-flex-cc asb-unshrink _asb_price-block-content-price">
                                    <span className="">{column?.Price}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="asb-flex-col asb-full-width asb-shrink asb-cut _asb_prices-column">
                    {rightColumn?.map((column, idx) => {
                      return (
                        <div
                          key={idx}
                          className="asb-pos-tall _asb_prices-column-item"
                        >
                          <div className="asb-full-width">
                            <div className="asb-pos-wide asb-full-width _asb_price-block">
                              <div className="asb-flex-cc asb-cut _asb_simple-button _asb_simple-button-pointer">
                                <div
                                  className=""
                                  style={{ overFlow: "hidden" }}
                                ></div>
                                <div className="asb-flex-cc asb-cut asb-pos-stretch _asb_price-block-content">
                                  <div className="asb-flex-sc asb-text _asb_price-block-content-label">
                                    <div className="asb-text _asb_price-block-content-label-text">
                                      {column?.Name}
                                    </div>
                                  </div>
                                  <div className="asb-flex-cc asb-unshrink _asb_price-block-content-price">
                                    <span className="">{column?.Price}</span>
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
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ColumnTwo;
