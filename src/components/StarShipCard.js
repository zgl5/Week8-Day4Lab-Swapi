import { Link } from "react-router-dom";

export default function StarShipCard (props){
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/People">
        <div>People</div>
      </Link>
      <Link to="/Planet">
        <div>Planet</div>
      </Link>
    </div>
  );
};