import { useParams } from "react-router-dom";
import House from ".";

const HouseFromQuery = ({ allHouses }) => {
  const { id } = useParams();
  const house = allHouses.find(h => h.id === parseInt(id));
  return <House house={house} />;
}

export default HouseFromQuery;