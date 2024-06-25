import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {Nav,Home,About,Projects,Contact,Footer,Skills} from './components/index'
import { useThemeContext } from './context/ThemeContext';

function App() {
  const {theme} = useThemeContext();
  return (
    <Router>
      <div className={`${theme==='dark'?'bg-gray-900':'bg-white'}flex flex-col min-h-screen`}>
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
