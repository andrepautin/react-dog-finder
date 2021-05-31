import { NavLink } from "react-router-dom";

/** NavBar component
 * 
 * Props:
 * - dogs = [{name, age, src, facts}, {name, age, src, facts}...]
 * 
 * App -> NavBar
 */
function NavBar({dogs}) {

  return (
    <nav>
      <NavLink exact to="/dogs">All Dogs</NavLink>
      {dogs.map(d => <NavLink key={d.name} exact to={`/dogs/${d.name}`}>{d.name}</NavLink>)}
    </nav>
  );
}


export default NavBar;
