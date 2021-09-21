import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

let name = "Gaurang";
function App() {
  return (
    <>
      
      <Navbar title="Gaurang" home="My Home" about="About"/>
      <div className="container">
        <TextForm heading="Enter your Text area"/>
      </div>
      </>
  );
}

export default App;
