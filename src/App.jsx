import { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import About from './pages/about/About';
import Sidebar from './components/sidebar/Sidebar';
import MenuBtn from './components/menuBtn/MenuBtn';
import { AnimatePresence } from 'framer-motion';
import Nav from './components/nav/Nav';
import NavItem from './components/nav/NavItem';
import { navData } from './assets/constants/NavData';
// styles
import './App.scss';
import Theme from './components/theme/Theme';
import Header from './components/header/Header';
import SoundBar from './components/_ui/soundbar/SoundBar';
import SoundVisualizer from './components/_ui/soundvisualizer/SoundVisualizer';
import Work from './pages/work/Work';
import Boombox from './components/_ui/BoomBox/BoomBox';

export const ThemeContext = createContext();

function App() {
  const [active, setActive] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={darkTheme ? 'main lightmode' : 'main darkmode'}>
      <ThemeContext.Provider value={[darkTheme, setDarkTheme]}>
        <Router>
          <Header />
          <Theme />
          <MenuBtn active={active} setActive={setActive} />
          <AnimatePresence mode='wait'>
            {active && (
              <Nav active={active} setActive={setActive}>
                {navData.map(({ title, path, cls, id }, i) => (
                  <NavItem
                    title={title}
                    path={path}
                    cls={cls}
                    key={id}
                    i={i}
                    active={active}
                    setActive={setActive}
                  />
                ))}
              </Nav>
            )}
          </AnimatePresence>
          {/*   <SoundVisualizer playMusic={playMusic} /> */}
          {/* <SoundBar playMusic={playMusic} setPlayMusic={setPlayMusic} /> */}
          <Sidebar />
          <Routes>
            <Route path='/' element={<Home audio={playMusic} />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
          </Routes>
          {/*  <div className='scrolling'>
          {scrollY > 500
            ? 'Scrolled more than 500px'
            : 'Still somewhere near the top!'}
        </div> */}
          <Boombox playMusic={playMusic} setPlayMusic={setPlayMusic} />
        </Router>
      </ThemeContext.Provider>
    </main>
  );
}

export default App;
