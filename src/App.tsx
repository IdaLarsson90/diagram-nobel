import './App.scss'

import Folder from "./views/Folder/Folder";
import Tabs from './components/tabs/Tabs';
import { Route, Routes } from "react-router-dom";
import WinnerByCategory from './views/WinnerByCategory/WinnerByCategory';
import AnimationPicker from './components/animationPicker/AnimationPicker';
import WinnerByGender from './views/WinnerByGender/WinnerByGender';
import WinnerByCountry from './views/WinnerByCountry/WinnerByCountry';
import TopTen from './views/TopTen/TopTen';
import WinnerByYear from './views/WinnerByYear/WinnerByYear';
import AwardsByCategory from './views/AwardsByCategory/AwardsByCategory';

function App() {

  return (
    <div className="app">
      <AnimationPicker/>
      <Tabs />
      <div className='wrapper'>
        <Routes>
          <Route path="/" element={<Folder />} />
          <Route path="/winners-by-category" element={<WinnerByCategory />} />
          <Route path="/winners-by-gender" element={<WinnerByGender />} />
          <Route path="/winners-by-country" element={<WinnerByCountry />} />
          <Route path="/top-ten" element={<TopTen />} />
          <Route path="/winners-by-year" element={<WinnerByYear />} />
          <Route path="/awards-by-category" element={<AwardsByCategory />} />
        </Routes>

      </div>

    </div>
  )
}

export default App
