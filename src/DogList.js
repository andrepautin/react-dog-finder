import { Link } from "react-router-dom";

/** DogList component
 * 
 * Props:
 * - dogs = [{name, age, src, facts}, {name, age, src, facts}...]
 * 
 * Routes -> DogList
 */
function DogList({dogs}) {
  return (
    <div>
      {dogs.map(d => 
        <div>
          <img src={d.src} alt={d.name}/>
          <Link to={`/dogs/${d.name}`}>{d.name}</Link>
        </div>)}
    </div>
  );
}


export default DogList;
