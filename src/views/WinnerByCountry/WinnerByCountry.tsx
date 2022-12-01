import './WinnerByCountry.scss';
import { useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie, Bar } from 'react-chartjs-2';
import data from '../../data/json_laureates.json'
import { useStore } from "../../store/store"

const WinnerByCountry = () => {
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

  const countryData: any = []
  let countryCount: any = {}
  data.map(object => {
    if (object.birth !== undefined) {
      countryData.push(object.birth.place.country.en)
    }
  })
  let countryLabels: string[] | undefined = []
  for (let i = 0; i < countryData.length; i++) {
    console.log(countryData[i])
    if (!countryLabels.includes(countryData[i])) {
      countryLabels.push(countryData[i])
    }
    if (countryCount[countryData[i]] === undefined) {
      countryCount[countryData[i]] = 1
    } else {
      countryCount[countryData[i]]++
    }
  }
  let countryDataset: number[] = []
  let keys = Object.keys(countryCount)
  let countryCountArr = keys.map(key => ({ key: key, value: countryCount[key] }))

  countryCountArr.forEach(label => {
    countryDataset.push(label.value)
  })

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
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
    <main className='folder winners-by-country'>
      <div className="folder-content">
        <h2>Winners by country</h2>
        <div className="chart-wrapper">
          <Pie options={options} data={winnersByCountryData} />
        </div>
      </div>
    </main>
  );
};

export default WinnerByCountry;
