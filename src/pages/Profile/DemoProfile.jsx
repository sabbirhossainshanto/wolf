import { Link } from "react-router-dom";

/* eslint-disable react/no-unknown-property */
const DemoProfile = () => {
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
            tabindex="0"
          >
            <Link
              to="/rules"
              _ngcontent-ng-c2865632707=""
              className="smenu-link"
            >
              <div _ngcontent-ng-c2865632707="" className="label-wrap">
                <img
                  _ngcontent-ng-c2865632707=""
                  onerror="src = '../assets/img/default-logo-icon.svg'"
                  alt="Menu Icon"
                  src="https://ss.manage63.com/bmk-wl/commonAssets/sidenav_rules.svg"
                />
                <span _ngcontent-ng-c2865632707="">Rules</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DemoProfile;
