import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Button } from './components/buttons/Button';
import { Background } from './components/background/Background';
import { Silhuette } from './components/silhuette/Silhuette';
import styles from './homepage.module.scss';
import { Home } from './pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
