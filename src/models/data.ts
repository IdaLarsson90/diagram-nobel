export type rollAnimationType = {
    targets: string,
    rotateX: string [],
    easing: string,
    duration: number,
    direction: string,
    boxShadow: string [],
    keyframes: [
        { rotateX: string, zIndex: number, scaleY: number },
        { rotateX: number, zIndex: number, scaleY: number }],
}

export type pullAnimationType = {
        targets: string,
        easing: string,
        duration: number,
        direction: string,
        keyframes: [
          { translateY: number, zIndex: number },
          { translateY: string, zIndex: number },
          { translateY: string, zIndex: number },
          { translateY: number, zIndex: number }
        ],
}

export type optionsType = {
    maintainAspectRatio: boolean,
    responsive: boolean,
    plugins: {
      legend: {
        position: string
      }
    }
}

export type nameAndWinsType = {
    name: string,
    numWins: number
}

export type categoryAndWinsType = {
    category: string,
    numWins: number
}

export type countType = {
    [x:string]: number
}