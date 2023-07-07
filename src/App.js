import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/GeneralStyles.scss";
// import NavbarIndex from "./Components/Navbar/NavbarIndex";
import HomeIndex from "./Pages/HomePage/HomeComponents/HomeIndex.jsx";
import ToursIndex from "./Pages/ToursPage/ToursComponents/ToursIndex.jsx";
import AboutIndex from "./Pages/AboutPage/AboutComponents/AboutIndex.jsx";
import ContactsIndex from "./Pages/ContactsPage/ContactsComponents/ContactsIndex.jsx";
// import FooterIndex from "./Components/Footer/FooterComponents/FooterIndex";
import ExternalLayout from "./Components/Layouts/ExternalLayout/ExternalLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ExternalLayout>
          {/* <NavbarIndex/> */}
          <Routes>
            <Route path="/" element={<HomeIndex />} />
            <Route path="/tours" element={<ToursIndex />} />
            <Route path="/about" element={<AboutIndex />} />
            <Route path="/contact" element={<ContactsIndex />} />
          </Routes>
          {/* <FooterIndex/> */}
        </ExternalLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
