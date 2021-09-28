import { useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import House from ".";
import HousesContext from "../context/housesContext";

const HouseFromQuery = () => {
  const { id } = useParams();
  const allHouses = useContext(HousesContext);
  const house = allHouses.find(h => h.id === parseInt(id));
  return <House house={house} />;
}

export default HouseFromQuery;