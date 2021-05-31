import { NavLink, useParams, Redirect } from "react-router-dom";

/** DogDetails component
 * 
 * Props:
 * - dogs = [{name, age, src, facts}, {name, age, src, facts}...]
 * 
 * Params:
 * - name
 * 
 * Routes -> DogDetails
 */
function DogDetails({dogs}) {
  const {name} = useParams();

  const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
  if (currentDog) {
    return (
      <div>
        <h1>{currentDog.name}</h1>
        <img src={currentDog.src} alt={currentDog.name}/>
        <h3>Age: {currentDog.age}</h3>
        <ul>
          {currentDog.facts.map((fact) => <li>{fact}</li>)}
        </ul>
      </div>
    )
  }
  return <Redirect to="/dogs"/>
}


export default DogDetails;
