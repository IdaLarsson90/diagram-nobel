import './TopTen.scss';
import { useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie, Bar, Line } from 'react-chartjs-2';

import { useStore } from "../../store/store"
import data from '../../data/json_laureates.json'


const TopTen = () => {
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

  let newArr: any = []

  data.map(item => {
    if (item.fullName !== undefined) {
      newArr.push({ name: item.fullName.en, numWins: item.nobelPrizes.length })
    }
    else {
      newArr.push({ name: item.orgName.en, numWins: item.nobelPrizes.length })
    }
  })
  newArr.sort((a: any, b: any) => b.numWins - a.numWins)

  let topTen = newArr.slice(0, 10)

  let topTenLabels = topTen.map((name) => {
    return name.name
  })
  let topTenDataset = topTen.map((name) => {
    return name.numWins
  })

  const topTenData = {
    labels: topTenLabels,
    datasets: [{
      label: 'number of wins',
      data: topTenDataset
    }]
  }

  return (

    <main className='folder top-ten'>
      <div className="folder-content">
        <h2>Top 10 winners</h2>
        <div>
          <Bar data={topTenData} />
        </div>
      </div>
    </main>
  );
};

export default TopTen;