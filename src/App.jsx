import "bootstrap/dist/css/bootstrap.min.css"
import "./components/MyNav"
import  "./components/MyFooter"
import MyNav from "./components/MyNav";
import "./App.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return <>
  <MyNav />
  <Welcome />
  <AllTheBooks />
  <MyFooter />
  </> 

}

export default App;
