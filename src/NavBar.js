import { NavLink } from "react-router-dom";

function NavBar({dogs}) {

  return (
    <nav>
      <NavLink exact to="/dogs">All Dogs</NavLink>
      {dogs.map(d => <NavLink key={d.name} exact to={`/dogs/${d.name}`}>{d.name}</NavLink>)}
    </nav>
  );
}


export default NavBar;
