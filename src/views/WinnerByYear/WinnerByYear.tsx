import './WinnerByYear.scss';
import { useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie, Bar, Line } from 'react-chartjs-2';

import { useStore } from "../../store/store"

const WinnerByYear = () => {
  const animationStyle = useStore((state) => state.animationStyle)

  const rollAnimation = useStore((state) => state.rollAnimation)
  const pullAnimation = useStore((state) => state.pullAnimation)

  useEffect(() => {
    if (animationStyle === "roll") {
      let animation: AnimeInstance = anime(rollAnimation)
    } else {
      let animation: AnimeInstance = anime(pullAnimation)
    }

  }, [])


  return (
    <main className='folder winners-by-year'>
      <div className="folder-content">
        <h2>Winners by year</h2>
        <div> Insert Statistik
          {/* <Pie data={}/> */}
       </div>
      </div>
    </main>
  );
};

export default WinnerByYear;
