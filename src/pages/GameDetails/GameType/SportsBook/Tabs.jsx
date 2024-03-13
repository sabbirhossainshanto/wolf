const Tabs = ({ sportsBook, tabs, setTabs }) => {
  return (
    <div className="asb-pos-wide _asb_items-tabs-header">
      <div className="asb-cut asb-pos-wide _asb_items-scroller">
        <div className="_asb_content-scroller">
          <div className="" style={{ overFlow: "hidden" }}>
            <div className="asb-scrollable asb-flex-cc _asb_content-scroller-wrapper-scrollable">
              <div
                onClick={() => setTabs("ALL")}
                className={`asb-flex-cc asb-pos-tall asb-nowrap _asb_simple-button _asb_simple-button-container-block _asb_simple-button-pointer _asb_items-tabs-tab asb-uncut
                      
                      ${
                        tabs === "ALL"
                          ? "_asb_items-tabs-tab--simple-button-selected"
                          : ""
                      }
                      `}
                title="All"
              >
                <div className="" style={{ overFlow: "hidden" }}></div>
                <span className="_asb_event-details-markets-tab-label">
                  ALL
                </span>

                <div className="_asb_items-tabs-indicator"></div>
              </div>
              {sportsBook?.map((group, i) => {
                return (
                  <div
                    onClick={() => setTabs(group?.Name)}
                    key={i}
                    className={`asb-flex-cc asb-pos-tall asb-nowrap _asb_simple-button _asb_simple-button-container-block _asb_simple-button-pointer _asb_items-tabs-tab asb-uncut
                      
                      ${
                        tabs === group?.Name
                          ? "_asb_items-tabs-tab--simple-button-selected"
                          : ""
                      }
                      `}
                    title="All"
                  >
                    <div className="" style={{ overFlow: "hidden" }}></div>
                    <span className="_asb_event-details-markets-tab-label">
                      {group?.Name}
                    </span>

                    <div className="_asb_items-tabs-indicator"></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="asb-flex-cc _asb_simple-button _asb_simple-button-pointer _asb_content-scroller-arrow"
            style={{ right: "0", display: "none" }}
          >
            <div className="" style={{ overFlow: "hidden" }}></div>
            <i className="_asb_ui-icon _asb_ui-icon---arrow-right asb-icon-arrow-right _asb_content-scroller-arrow-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
