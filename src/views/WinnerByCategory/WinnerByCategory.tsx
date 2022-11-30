import './WinnerByCategory.scss';
import { useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie } from 'react-chartjs-2';
import data from '../../data/json_award.json'

import { useStore } from "../../store/store"


const WinnerByCategory = () => {
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


  const categoryData:any = data.map(object => object.category.en)
  let categoryLabels: string[] | undefined = [], categoryCount: any = {}

  for (let i = 0; i < categoryData.length; i++) {

    if (!categoryLabels.includes(categoryData[i])) {
      categoryLabels.push(categoryData[i])
    }
    if (categoryCount[categoryData[i]] === undefined) {
      categoryCount[categoryData[i]] = 1
    } else {
      categoryCount[categoryData[i]]++
    }
  }

  let categoryDataset: number[] = []

  categoryLabels.forEach(label => {
    categoryDataset.push(categoryCount[label])
  })

  const winnersByCategoryData = {
    labels: categoryLabels,
    datasets: [{
      label: 'winners',
      data: categoryDataset
    }]
  }
  //CIRKEL
  return (

    <main className='folder winners-by-category'>
      <div className="folder-content">
        <h2> The total number of award winners, divided among the various categories </h2>
        <div>
          <Pie data={winnersByCategoryData} />
        </div>
      </div>
    </main>
  );
};

export default WinnerByCategory;
