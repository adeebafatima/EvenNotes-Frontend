import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Fragment>
            <Navbar title="EvenNotes" />
            <Alert message="You will be successful in both the world"/>
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
              <Routes>
                <Route exact path="/about" element={<About />} />
              </Routes>
            </div>
          </Fragment>
        </Router>
      </NoteState> 
    </>
  );
}

export default App;
