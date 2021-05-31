import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from './NavBar';
import Routes from './Routes';
import whiskey from "./whiskey.jpg";
import duke from "./duke.jpg";
import tubby from "./tubby.jpg";
import perry from "./perry.jpg";

/** App component
 * 
 * Props:
 * - dogs = [{name, age, src, facts}, {name, age, src, facts}...]
 * 
 * App -> NavBar
 *     -> Routes
 *     
*/
function App({dogs}) {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar dogs={dogs}/>
      <Routes dogs={dogs}/>
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
