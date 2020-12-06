const bands: {[color: string] : number} = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

export class ResistorColor {

  constructor(private colors: string[]) {
    if(colors.length < 2) {      
      throw new Error("At least two colors need to be present");      
    }        
  }

  value = (): number => {    
    const [ firstColor, secondColor ] = this.colors;
    return (bands[firstColor] * 10) + bands[secondColor];
  };
}