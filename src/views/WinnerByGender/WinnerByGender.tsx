import './WinnerByGender.scss';
import { useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

import data from '../../data/json_laureates.json'
import { useStore } from "../../store/store"

const WinnerByGender = () => {
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
  const genderData: any = data.map(object => object.gender)

  let genderLabels: string[] | undefined = [], genderCount: any = {}

  for (let i: number = 0; i < genderData.length; i++) {

    if (!genderLabels.includes(genderData[i])) {
      genderLabels.push(genderData[i])
    }
    if (genderCount[genderData[i]] === undefined) {
      genderCount[genderData[i]] = 1
    } else {
      genderCount[genderData[i]]++
    }

  }

  let genderDataset: number[] = []

  genderLabels.forEach(label => {
    genderDataset.push(genderCount[label])
  })
  const winnersByGenderData = {
    labels: genderLabels,
    datasets: [{
      label: 'winners',
      data: genderDataset
    }]
  }

  return (
    <main className='folder winners-by-gender'>
      <div className="folder-content">
        <h2>The distribution between men and women among prize winners</h2>
        <div>
          <Pie data={winnersByGenderData} />
        </div>
      </div>
    </main>
  );
};

export default WinnerByGender;
