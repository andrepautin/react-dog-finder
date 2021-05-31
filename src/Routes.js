import { Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

/** Routes component
 * 
 * Props: 
 * - dogs = [{name, age, src, facts}, {name, age, src, facts}...]
 * 
 * App -> Routes -> DogList
 *               -> DogDetails
 */
function Routes({dogs}) {
  return (
    <Switch>
      <Route exact path="/dogs" >
        <DogList dogs={dogs}/> 
      </Route>
      <Route exact path="/dogs/:name" >
        <DogDetails dogs={dogs}/>
      </Route>
      <Redirect to="/dogs" />
  </Switch>
  );
}


export default Routes;
