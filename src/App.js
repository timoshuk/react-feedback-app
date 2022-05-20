import { BrowserRouter as Rourter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <Rourter>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </div>
    </Rourter>
  );
};

export default App;
