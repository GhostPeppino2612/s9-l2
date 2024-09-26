import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNavbar from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
    <MyNavbar />
    <Welcome />
    <AllTheBooks />
    <MyFooter />
    </>

  );
}

export default App;
