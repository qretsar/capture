//Import Pages
import Nav from "./components/Nav";
// import AboutUs from "./pages/AboutUs";
import { AboutUs, OurWork, ContactUs, MovieDetail } from "./pages";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Router
import { Route, Routes, useLocation } from "react-router-dom";
//Animations
import { AnimatePresence } from "framer-motion";
import ScrollTop from "./components/ScrollTop";
function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<AboutUs />} />
          <Route path="/work" exact element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
