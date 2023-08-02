import Navbar from "./components/Navbar/Navbar";
import { useTranslation } from "react-i18next";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

// import Shape from "./assets/images/shape.png";
import Home from "./pages/Home/Home.js";
function App() {
  const { ready } = useTranslation();
  if (ready) {
    return (
      <div className="App">
        <div className="page container-fluid p-0">
          <AnimatedCursor
            innerSize={8}
            outerSize={8}
            color="193, 11, 111"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={5}
          />
          <Navbar />
          <div className="row">
            <div className="col-lg-12">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <span>Loading...</span>;
}

export default App;
