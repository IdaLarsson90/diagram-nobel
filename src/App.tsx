import './App.scss'

import Folder from "./views/Folder/Folder";
import { NavLink } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import WinnerByCategory from './views/WinnerByCategory/WinnerByCategory';
import AnimationPicker from './components/animationPicker/AnimationPicker';
import WinnerByGender from './views/WinnerByGender/WinnerByGender';
import WinnerByCountry from './views/WinnerByCountry/WinnerByCountry';
import TopTen from './views/TopTen/TopTen';
import WinnerByYear from './views/WinnerByYear/WinnerByYear';
import AwardsByCategory from './views/AwardsByCategory/AwardsByCategory';
import './components/tabs/Tabs.scss'

function App() {
  const [className, setClassName] = useState<string>(window.location.pathname.replace("/", ""))
  return (
    <div className="app">
      <AnimationPicker />
      <div className='snowflakes'>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
        <div className="snowflake">
          ❅
        </div>
        <div className="snowflake">
          ❆
        </div>
      </div>

      <div className='wrapper'>
        <NavLink onClick={() => setClassName(`winners-by-category`)} className="tab" to="/winners-by-category" > Winners by category </NavLink>
        <NavLink onClick={() => setClassName(`winners-by-gender`)} className="tab" to="/winners-by-gender" > Winners by gender </NavLink>
        <NavLink onClick={() => setClassName(`winners-by-country`)} className="tab" to="/winners-by-country" > Winners by country </NavLink>
        <NavLink onClick={() => setClassName(`top-ten`)} className="tab" to="/top-ten" > Top 10 winners  </NavLink>
        <NavLink onClick={() => setClassName(`winners-by-year`)} className="tab" to="/winners-by-year" > Winners by year </NavLink>
        <NavLink onClick={() => setClassName(`awards-by-category`)} className="tab" to="/awards-by-category" > Awards by category </NavLink>
        <NavLink onClick={() => setClassName(``)} className="tab" to="/" > Stäng mapp </NavLink>
        <Routes>
          <Route path="/" element={<Folder />} />
          <Route path="/winners-by-category" element={<WinnerByCategory />} />
          <Route path="/winners-by-gender" element={<WinnerByGender />} />
          <Route path="/winners-by-country" element={<WinnerByCountry />} />
          <Route path="/top-ten" element={<TopTen />} />
          <Route path="/winners-by-year" element={<WinnerByYear />} />
          <Route path="/awards-by-category" element={<AwardsByCategory />} />
        </Routes>
        <div className={`folder ${className}`}>
        </div>
      </div>

    </div>
  )
}

export default App
