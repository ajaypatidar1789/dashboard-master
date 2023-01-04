import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import NavBar from './Components/NavBar';
import Landings from './Components/Landings';
import Docs from './Components/Docs';
import UserPages from './Components/Pages';
import UIKit from './Components/UIKit';
import Account from './Components/Account'; 
import UserDetailsCard from './Components/UserDetails'; 
import { createContext, useState } from 'react';


export const ThemedContext = createContext(null)

function App() {
  const [theme,setTheme] = useState("light");

  const toggleTheme = (curr) => {
    setTheme((curr)=>(curr==="light"?"dark":"light"));
  }
  return (
    <ThemedContext.Provider value={{theme, toggleTheme}}>
      <Router>
      <div className='App' id={theme}>
        <NavBar />
        <Routes>
          <Route exact path='/landings' element={<Landings/>} />
          <Route exact path='/' element={<UserPages/>} />
          <Route exact path='/account' element={<Account/>} />
          <Route excat path='/uikit' element={<UIKit/>} />
          <Route exact path='/docs' element={<Docs/>} />
          <Route exact path='/users/:userId' element={<UserDetailsCard/>} />
        </Routes>
      </div>
      </Router>
    </ThemedContext.Provider>
  );
}

export default App;
