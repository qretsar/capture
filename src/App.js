//Import Pages
import Nav from "./components/Nav";
// import AboutUs from "./pages/AboutUs";
import { AboutUs, OurWork, ContactUs, MovieDetail } from "./pages";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Router
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/work/:id" element={<MovieDetail />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
