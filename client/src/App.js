import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import SiteMap from './components/SiteMap';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="*" exact element={<Navigate to="/"/>}/>
      </Routes>
      <SiteMap />
    </div>
  );
}

export default App;
