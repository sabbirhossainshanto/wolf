import HorseGreyhound from "../../components/ui/HorseGreyhound/HorseGreyhound";
import useSportsBook from "../../hooks/useSportsBook";

const HorseRacing = () => {
  const { sports } = useSportsBook(7);
  return <HorseGreyhound data={sports} title="Horse Racing" />;
};

export default HorseRacing;
