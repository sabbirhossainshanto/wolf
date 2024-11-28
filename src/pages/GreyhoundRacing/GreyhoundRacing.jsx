/* eslint-disable react/no-unknown-property */
import HorseGreyhound from "../../components/ui/HorseGreyhound/HorseGreyhound";
import useSportsBook from "../../hooks/useSportsBook";

const GreyhoundRacing = () => {
  const { sports } = useSportsBook(4339);
  return (
    <div
      _ngcontent-ng-c943649379=""
      className="page-body"
      style={{
        minHeight: "100vh",
      }}
    >
      <HorseGreyhound data={sports} title="Greyhound Racing" />
    </div>
  );
};

export default GreyhoundRacing;
