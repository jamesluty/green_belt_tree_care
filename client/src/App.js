import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import SiteMap from './components/SiteMap';
import Navbar from './components/Navbar';
import Trimming from './components/Trimming';
import Removal from './components/Removal';
import Ornamental from './components/Ornamental';
import Raising from './components/Raising';
import Reduction from './components/Reduction';
import Cabling from './components/Cabling';
import Stump from './components/Stump';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/services/tree-trimming" exact element={<Trimming />} />
        <Route path="/service/tree-removal" exact element={<Removal />} />
        <Route path="/service/ornamental-pruning" exact element={<Ornamental />} />
        <Route path="/service/crown-raising" exact element={<Raising />} />
        <Route path="/service/crown-reduction" exact element={<Reduction />} />
        <Route path="/service/cabling" exact element={<Cabling />} />
        <Route path="/service/stump-grinding" exact element={<Stump />} />
        <Route path="*" exact element={<Navigate to="/"/>}/>
      </Routes>
      {/* <hr className="diffSep"/>
      <Contact /> */}
      <SiteMap />
    </div>
  );
}

export default App;
