import './AwardsByCategory.scss';
import { useEffect } from 'react';
import anime, { AnimeInstance } from 'animejs'
import { Pie, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useStore } from "../../store/store"
import data from '../../data/json_award.json'

const AwardsByCategory = () => {
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

  let allCategories = data.map((post) => {
    return post.category.en
  })

  let uniqueCategories = [...new Set(allCategories)]
  const awardsByCategoryData = {
    labels: uniqueCategories,
    datasets: [{
      label: 'awards',
      data: [
        data.filter((post)=> post.category.en === 'Chemistry').length,
        data.filter((post)=> post.category.en === 'Literature').length,
        data.filter((post)=> post.category.en === 'Peace').length,
        data.filter((post)=> post.category.en === 'Physics').length,
        data.filter((post)=> post.category.en === 'Physiology or Medicine').length,
        data.filter((post)=> post.category.en === 'Economic Sciences').length ] 
    }]
  }
 
  return (
    <main className='folder awards-by-category'>
      <div className="folder-content">
        <h2>How many times the Nobel Prize has been awarded, within each category</h2>
        <div> 
          <Bar data={awardsByCategoryData}/>
       </div>
      </div>
    </main>
  );
};

export default AwardsByCategory;
