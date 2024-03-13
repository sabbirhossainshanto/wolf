import { useEffect, useState } from "react";
import ColumnOne from "./Column/ColumnOne";
import ColumnThree from "./Column/ColumnThree";
import ColumnTwo from "./Column/ColumnTwo";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const SportsColumn = ({ sports, tabs, sportsBook }) => {
  const itemsLengthArray = sports?.map((group) => group?.Items?.length) || [];
  const [openItems, setOpenItems] = useState(
    new Array(itemsLengthArray[0] || 0).fill(false).map((_, index) => index < 5)
  );

  const toggleItem = (index) => {
    const newOpenItems = [...openItems];
    newOpenItems[index] = !newOpenItems[index];
    setOpenItems(newOpenItems);
  };

  useEffect(() => {
    setOpenItems(
      new Array(itemsLengthArray[0] || 0)
        .fill(false)
        .map((_, index) => index < 5)
    );
  }, [tabs]);
  return (
    <>
      {sports?.map((group) =>
        group?.Items?.map((item, iIdx) => {
          const isOpen = openItems[iIdx];
          return (
            <div
              key={iIdx}
              className="_asb_expansion-panel _asb_event-details-market"
            >
              <div
                onClick={() => toggleItem(iIdx)}
                className="asb-flex-sc _asb_simple-button _asb_simple-button-pointer _asb_event-details-market--expansion-panel-header _asb_expansion-panel-header _asb_event-details-market--expansion-panel-title _asb_expansion-panel-title"
              >
                <div className="" style={{ overFlow: "hidden" }}></div>

                <div className="asb-pos-wide">
                  <div className="asb-flex-sc">
                    <div className="asb-flex-cc _asb_simple-button _asb_simple-button-pointer _asb_event-details-markets--favorite-market-indicator _asb_event-details-market--favorite-market-indicator">
                      <div className="" style={{ overFlow: "visible" }}></div>
                      <i className="_asb_ui-icon _asb_ui-icon---star asb-icon-star"></i>
                    </div>
                    <span className="_asb_ui-spacer"></span>
                    <div
                      title="Handicap"
                      className="asb-pos-wide"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="">{item?.Name} </span>
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
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
                  {item?.MColumnCount === 3 && (
                    <ColumnThree
                      item={item}
                      isOpen={isOpen}
                      sportsBook={sportsBook}
                    />
                  )}
                  {item?.MColumnCount === 2 && (
                    <ColumnTwo
                      item={item}
                      isOpen={isOpen}
                      sportsBook={sportsBook}
                    />
                  )}
                  {item?.MColumnCount === 1 && (
                    <ColumnOne
                      item={item}
                      isOpen={isOpen}
                      sportsBook={sportsBook}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default SportsColumn;
