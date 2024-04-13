import Footer from "./Pages/Footer";
import Header from "./Pages/Header";
import { Routes, Route } from "react-router-dom";
import News from "./Pages/News";
import Student from "./Pages/Student";
import Faculties from "./Pages/Faculties";
import Navigator from "./Pages/Navigator";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <Header></Header>
      </header>
      <main className="main">
        <Routes>
          <Route path="/News" element={<News />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Faculties" element={<Faculties />} />
          <Route path="/Navigator" element={<Navigator />} />
        </Routes>
      </main>
      <footer className="footer">
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
