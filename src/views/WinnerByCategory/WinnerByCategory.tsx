import './WinnerByCategory.scss';
import { useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie } from 'react-chartjs-2';
import data from '../../data/json_award.json'
import { categoryAndWinsType } from '../../models/data';

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


  const categoryData: categoryAndWinsType[] = []

  data.map(object => {
    if (object.laureates !== undefined) {
      categoryData.push({ category: object.category.en, numWins: object.laureates.length })
    } else {
      console.log("no award winner")
    }

  })

  function sumCategory(data:categoryAndWinsType) {
    let winners = 0
    categoryData.map((item)=> {
      if(item.category === data.category) {
        winners = winners + item.numWins
      }
    })
    return {category: data.category, numWins: winners}
  }

  let categoryCount: categoryAndWinsType[] = categoryData.map((data) => {
    
    return sumCategory(data)
  })  

  let categoryLabels: categoryAndWinsType[] = []

  categoryCount.map((data:categoryAndWinsType) => {
   
    if (!categoryLabels.find((e:categoryAndWinsType)=> e.category === data.category)) {
      categoryLabels.push(data)
    }
    
  })
  const winnersByCategoryData = {
    labels: categoryLabels.map((label)=> label.category),
    datasets: [{
      label: 'winners',
      data: categoryLabels.map((label)=> label.numWins)
    }]
  }
  //CIRKEL
  return (
      <div className="folder-content">
        <h2> The total number of award winners, divided among the various categories </h2>
        <div>
          <Pie data={winnersByCategoryData} />
        </div>
      </div>
  );
};

export default WinnerByCategory;
