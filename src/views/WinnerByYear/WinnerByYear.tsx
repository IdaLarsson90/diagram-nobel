import './WinnerByYear.scss';
import { useEffect, useState } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie, Bar, Line } from 'react-chartjs-2';
import data from "../../data/json_award.json"

import { useStore } from "../../store/store"

const WinnerByYear = () => {
  const animationStyle = useStore((state) => state.animationStyle)
  const rollAnimation = useStore((state) => state.rollAnimation)
  const pullAnimation = useStore((state) => state.pullAnimation)
  const [pickedYear, setPickedYear] = useState("")

  useEffect(() => {
    if (animationStyle === "roll") {
      let animation: AnimeInstance = anime(rollAnimation)
    } else {
      let animation: AnimeInstance = anime(pullAnimation)
    }
  }, [])

  let winnerData = data.map((post) => {
    if (post.laureates !== undefined) {
      return { awardYear: post.awardYear, category: post.category.en, numWinners: post.laureates?.length }
    } else {
      return { awardYear: post.awardYear, category: post.category.en, numWinners: 0 }
    }
  })

  let uniqueYears:string[] = []
  
  winnerData.map((post) => {
    if (!uniqueYears.includes(post.awardYear)) {
      uniqueYears.push(post.awardYear)
    }
  })
  uniqueYears.sort()
console.log(uniqueYears)
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickedYear(e.target.value)
  }
  let yearLabels: string[] | undefined = []
  for (let i = 0; i < winnerData.length; i++) {
    if (!yearLabels.includes(winnerData[i].category)) {
      yearLabels.push(winnerData[i].category)
    }
  }

  let yearDataset: number[] = []

  for (let i = 0; i < winnerData.length; i++) {
    if (winnerData[i].awardYear === pickedYear) {
      yearDataset.push(winnerData[i].numWinners)
    }
  }

  const winnerByYearData = {
    labels: yearLabels,
    datasets: [{
      label: 'winners',
      data: yearDataset
    }]
  }
  return (
      <div className="folder-content">
        <h2>The number of award winners within the various categories, for a selected year</h2>
        <select name="year" value={pickedYear} id="year" onChange={handleChange}>
          <option value="default" hidden>Välj årtal:</option>
          {uniqueYears.map((year, index) => <option key={index} value={year} >{year}</option>)}

        </select>

        <div>
          <Bar data={winnerByYearData} />
        </div>
      </div>
  );
};

export default WinnerByYear;
