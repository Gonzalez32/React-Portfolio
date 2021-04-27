import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Particels from "react-particles-js"
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <>
      <Particels
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <Navbar/>
      <Header/>
      <AboutMe/>
    </>
  )
}

export default App;
 