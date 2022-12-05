import './AnimationPicker.scss';
import { useEffect } from 'react';
import { useStore } from "../../store/store"

const AnimationPicker = () => {
  const setAnimationStyle = useStore((state) => state.setAnimationStyle)

  const handleRadioButtons = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnimationStyle(e.target.value)

  }

  return (
    <section className='animation-picker'>
      <p>Pick animation:</p>
      <input type="radio" id="pull" name="animation" value="pull" onChange={handleRadioButtons} defaultChecked />
      <label htmlFor="pull">Pull out</label>
      <input type="radio" id="roll" name="animation" value="roll" onChange={handleRadioButtons} />
      <label htmlFor="roll">Roll up</label>
    </section>
  )
};

export default AnimationPicker;
