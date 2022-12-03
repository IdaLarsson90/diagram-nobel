import { pullAnimationType, rollAnimationType } from '../models/data'
import create from 'zustand'

type Store = {
  animationStyle: string
  setAnimationStyle: (animationStyle: string) => void
  rollAnimation: rollAnimationType
  pullAnimation: pullAnimationType
}


export const useStore = create<Store>((set) => ({
    animationStyle: "pull",
    setAnimationStyle: (animationStyle: string) => set(() => ({ animationStyle: animationStyle })),
    rollAnimation: {
      targets: ".folder-content",
      rotateX: ['-80deg', "0deg"],
      easing: "easeInOutSine",
      duration: 1000,
      direction: 'normal',
      boxShadow: ['5px 8px 15px rgba(0, 0, 0, 0.7)', '5px 8px 15px rgba(0, 0, 0, 0.0)'],
      keyframes: [
        { rotateX: '-80deg', zIndex: 10, scaleY: 1.2 },
        { rotateX: 0, zIndex: 10, scaleY: 1 }]
    },
    pullAnimation: {
      targets: ".folder-content",
      easing: "linear",
      duration: 2000,
      direction: 'normal',
      keyframes: [
        { translateY: 0, zIndex: 1 },
        { translateY: '-600px', zIndex: 1 },
        { translateY: '-700px', zIndex: 110 },
        { translateY: 0, zIndex: 110 }
      ],
    }
  }))