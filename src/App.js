import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import Home from './Home'
import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';


function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
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
