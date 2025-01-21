import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import Home from './Home'
import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import FurniturePage from './FurniturePage';
import RestorationPage from './RestorationPage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/furniture" element={<FurniturePage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/restoration" element={<RestorationPage />} />
          {/* Fallback Route */}
          <Route
            path="*"
            element={
              <div className="fallback">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
