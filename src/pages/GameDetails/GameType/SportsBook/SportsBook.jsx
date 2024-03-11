import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import ColumnOne from "./ColumnOne";
import ColumnTwo from "./ColumnTwo";
import ColumnThree from "./ColumnThree";

/* eslint-disable react/no-unknown-property */
const SportsBook = ({ sportsBook }) => {
  const [tabs, setTabs] = useState("Main");
  const [columnOne, setColumnOne] = useState([]);
  const [columnTwo, setColumnTwo] = useState([]);
  const [columnThree, setColumnThree] = useState([]);
  // console.log(sportsBook);
  useEffect(() => {
    let sports;
    if (tabs === "ALL") {
      sports = sportsBook?.MarketGroups;
    } else {
      const filterSports = sportsBook?.MarketGroups?.filter(
        (group) => group?.Name === tabs
      );
      sports = filterSports;
    }
    const columnOne = [];
    const columnTwo = [];
    const columnThree = [];
    let totalOpenItems = 0;
    sports?.forEach((group) => {
    // console.log(group);
      group?.Items?.forEach((item, index) => {
        // console.log(item);
        const isOpen = totalOpenItems <= 5 && index <= 5;
        if (item?.MColumnCount === 1) {
          columnOne?.push({
            name: item?.Name,
            items: item?.Items,
            isOpen,
          
          });
        } else if (item?.MColumnCount === 2) {
          columnTwo?.push({
            name: item?.Name,
            items: item?.Items,
            isOpen,
          });
        } else if (item?.MColumnCount === 3) {
          columnThree?.push({
            name: item?.Name,
            items: item?.Items,
            isOpen,
            index:index
          });
        }
        if (isOpen) {
          totalOpenItems += 1;
        }
      });
    });
    setColumnOne(columnOne);
    setColumnTwo(columnTwo);
    setColumnThree(columnThree);
  }, [sportsBook, tabs]);
  // console.log(columnOne);
  return (
    <div
      _ngcontent-ng-c942213636=""
      className="fancy-card card-outer ng-star-inserted"
    >
      <div _ngcontent-ng-c942213636="" className="head-wrap">
        <h2 _ngcontent-ng-c942213636="" className="card-heading">
          Sportsbook
        </h2>
      </div>
      <div _ngcontent-ng-c942213636="" className="fancybody-header">
        <h3 _ngcontent-ng-c942213636="" className="card-title">
          Min: 100 | Max: 1L
        </h3>
      </div>

      <div className="">
        <div className="_asb_event-details-markets">
          <Tabs setTabs={setTabs} sportsBook={sportsBook} tabs={tabs} />
          <div className="_asb_items-tabs-content">
            <div className="asb-cut">
              <div>
                <div className="_asb_event-details-markets-group">
                  {/* Column Three */}
                  <ColumnThree columnThree={columnThree} />
                  {/* Column 2 */}
                  <ColumnTwo columnTwo={columnTwo} />
                  {/* Column one */}
                  <ColumnOne columnOne={columnOne} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsBook;
