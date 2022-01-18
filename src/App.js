import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Fragment>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route exact path="/about" element={<About />} />
            </Routes>
          </Fragment>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
