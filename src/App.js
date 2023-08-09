import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/loadingpg/Footer';
import Premhome from './components/loadingpg/Premhome';
import Sechome from './components/loadingpg/Sechome';
import Threhome from './components/loadingpg/Threhome';
import Forhome from './components/loadingpg/Forhome';
import Navbar from './components/loadingpg/Navbar';
import Zeyda from './components/loadingpg/Zeyda';
import Counter from './components/loadingpg/Counter';
import Navbar2 from './components/mappg/Navbar';
import Footer2 from './components/mappg/Footer';

import Mamap from './components/mappg/Mamap';
import Produit from './components/prod/Menu';
import Login from './components/login/Login';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function App() {
  return (
    <div className="App">
      <Router hashType="slash">
        <Routes>
          <Route
            exact
            path="/"
            element={(
              <div>
                <Navbar />
                <Premhome />
                <Counter />
                <Threhome />
                <Zeyda />
                <Forhome />
              </div>
            )}
          />
          <Route exact path="/map" element={(<div><Navbar2 /><Mamap /></div>)} />
          <Route exact path="/produit" element={(<div><Navbar2 /><Produit /></div>)} />
          <Route exact path="/contact" element={(<div><Navbar2 /><Login /></div>)} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
