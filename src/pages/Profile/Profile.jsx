/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import ChangePassword from "../../components/modal/ChangePassword";
import useBalance from "../../hooks/useBalance";
import Success from "../../components/ui/Notification/Success";
import Warning from "../../components/ui/Notification/Warning";
import LoggedInProfile from "./LogedInProfile";
import DemoProfile from "./DemoProfile";
import useContextState from "../../hooks/useContextState";
const Profile = () => {
  const loginName = localStorage.getItem("loginName");
  const { balanceData } = useBalance();

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const { token } = useContextState();
  const [showChangePassModal, setShowChangePassModal] = useState("");
  return (
    <div
      style={{ minHeight: "100vh" }}
      _ngcontent-ng-c2865632707=""
      className="page-body demoID"
    >
      {showChangePassModal && (
        <ChangePassword
          setShowChangePassModal={setShowChangePassModal}
          setErrorMessage={setErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
      )}
      {successMessage && (
        <Success message={successMessage} setMessage={setSuccessMessage} success={true}/>
      )}
      {errorMessage && (
        <Warning message={errorMessage} setMessage={setErrorMessage}  />
      )}
      {token ? (
        <LoggedInProfile
          balanceData={balanceData}
          loginName={loginName}
          setShowChangePassModal={setShowChangePassModal}
        />
      ) : (
        <DemoProfile />
      )}
    </div>
  );
};

export default Profile;
