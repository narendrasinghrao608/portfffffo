import Contact from './componets/Contact';
import Contro from './componets/Contro';
import Intro from './componets/Intro';
import Main from './componets/Main';
import Pastimes from './componets/Pastimes';
import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
           <Router>
      <Routes>
          <Route exact path="/" element= {<Main/>}/>
          <Route exact path="/contro" element={<Contro/>}/>
          <Route exact path="/intro" element={<Intro/>}/>
          <Route exact path="/pastimes" element={<Pastimes/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
