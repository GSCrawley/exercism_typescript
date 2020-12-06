class SpaceAge {
    private _seconds: number;
  
    constructor(seconds: number) {
      this._seconds = seconds;
    }
  
    get seconds(): number {
      return this._seconds;
    }
  
    onEarth = (): number => this.years(1.0);
    onMercury = (): number => this.years(0.2408467);
    onVenus = (): number => this.years(0.61519726);
    onMars = (): number => this.years(1.8808158);
    onJupiter = (): number => this.years(11.862615);
    onSaturn = (): number => this.years(29.447498);
    onUranus = (): number => this.years(84.016846);
    onNeptune = (): number => this.years(164.79132);
  
    private years = (orbitalPeriod: number): number => {
      const years: number = this._seconds / 60 / 60 / 24 / 365.25 / orbitalPeriod;
      return Number(years.toFixed(2));
    };
  }

  export default SpaceAge;