import { FaHouse } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ReturnHome() {
  return (
    <div className="returnHome">
      <Link to="/">
        <FaHouse />
      </Link>
    </div>
  );
}
