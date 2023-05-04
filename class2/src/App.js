import './App.css';
import { Link, NavLink, Route,Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import Support from './components/Support';
import MainHeader from './components/MainHeader';


function App() {
  

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/" > Home  </NavLink>
          </li>
          <li>
            <NavLink to="/support"> Support </NavLink>
          </li>
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
          <li>
            <NavLink to="/labs"> Labs </NavLink>
          </li>
          
        </ul>
      </nav>


      <Routes>
          <Route  path='/' element={<MainHeader />} >
            <Route index element={ <Home/>  } />   {/* Default Route  */}
            <Route path='/support' element={ <Support/>  } />
            <Route path='/about' element={ <About />  } />
            <Route path='/labs' element={ <Labs />  } />
            <Route path='*' element={ <NotFound /> } />
          </Route>
      </Routes>

    {/* Line 37 ya Line 40  check kr ke batna H.W hai  */}
 
    {/* <Routes>
          <Route path="/" element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path="support" element={<Support />} />
            <Route path="about" element={<About />} />
            <Route path="labs" element={<Labs />} />
            <Route path="/*" element={<NotFound />} />
          </Route>
    </Routes> */}
    </div>
  );
}

export default App;
