import './WinnerByCountry.scss';
import { useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie } from 'react-chartjs-2';
import data from '../../data/json_laureates.json'
import { useStore } from "../../store/store"

import { countType } from '../../models/data';
const WinnerByCountry = () => {
  const animationStyle = useStore((state) => state.animationStyle)

  const rollAnimation = useStore((state) => state.rollAnimation)
  const pullAnimation = useStore((state) => state.pullAnimation)

  useEffect(() => {
    if (animationStyle === "roll") {
      anime(rollAnimation)
    } else {
      anime(pullAnimation)
    }
  }, [])

  const countryData: string[] = []
  let countryCount:countType = {}

  data.map(object => {
    if (object.birth !== undefined) {
      countryData.push(object.birth.place.country.en)
    } else if (object.founded !== undefined) {
      if (object.founded.place.country !== undefined) {

        countryData.push(object.founded.place.country.en)
      } else {
        countryData.push("unknown")
      }
    }
    else {
      countryData.push("unknown")
    }
  })
  let countryLabels: string[] | undefined = []

  for (let i = 0; i < countryData.length; i++) {

    if (countryCount[countryData[i]] === undefined) {
      countryCount[countryData[i]] = 1
    } else {
      countryCount[countryData[i]]++
    }

  }
  console.log(countryCount)
  let countryDataset: number[] = []
  let keys = Object.keys(countryCount)

  let countryCountArr = keys.map(key => ({ key: key, value: countryCount[key] }))

  const sortedArr = countryCountArr.sort((a, b) => b.value - a.value)


  let filteredArr = sortedArr.filter(post => post.value > 5)

  for (let i = 0; i < filteredArr.length; i++) {
    if (!countryLabels.includes(filteredArr[i].key)) {
      countryLabels.push(filteredArr[i].key)
    }
  }
  filteredArr.forEach(label => {
    countryDataset.push(label.value)
  })
  const options: any = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "right"
      }
    }
  }
  const winnersByCountryData = {
    labels: countryLabels,
    datasets: [{
      data: countryDataset
    }]

  }
  return (
      <div className="folder-content">
        <h2>Most winners by country</h2>
        <div className="chart-wrapper">
          <Pie options={options} data={winnersByCountryData} />
        </div>
      </div>
  );
};

export default WinnerByCountry;
