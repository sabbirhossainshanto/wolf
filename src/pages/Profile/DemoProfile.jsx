import { Link } from "react-router-dom";
import useLanguage from "../../hooks/useLanguage";
import { languageValue } from "../../utils/language";
import { LanguageKey } from "../../constant/constant";

/* eslint-disable react/no-unknown-property */
const DemoProfile = () => {
  const { valueByLanguage } = useLanguage();
  return (
    <>
      <div _ngcontent-ng-c2865632707="" className="user-details-wrap">
        <div
          _ngcontent-ng-c2865632707=""
          className="user-details guest-user ng-star-inserted"
        >
          <p _ngcontent-ng-c2865632707="">Guest User</p>
        </div>
      </div>
      <div _ngcontent-ng-c2865632707="" className="menu-items-wrap">
        <ul _ngcontent-ng-c2865632707="" className="smenu-wrap">
          <li
            _ngcontent-ng-c2865632707=""
            routerlink="/rules"
            routerlinkactive="active-link"
            className="smenu-item"
          >
            <Link
              to="/rules"
              _ngcontent-ng-c2865632707=""
              className="smenu-link"
            >
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  alt="Menu Icon"
                  src="/assets/img/sidenav_rules.svg"
                />
                <span _ngcontent-ng-c2865632707="">
                  {" "}
                  {languageValue(valueByLanguage, LanguageKey.RULES)}
                </span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DemoProfile;
