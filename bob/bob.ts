export default class Bob {
    hey(call: string): string {
      if (this.isQuiet(call)) return "Fine. Be that way!"
      const normalized = call.replace(/[^a-z?]/gi, "")
      if (this.isQuestion(normalized) && this.isShouting(normalized))
        return "Calm down, I know what I'm doing!"
      if (this.isQuestion(normalized)) return "Sure."
      if (this.isShouting(normalized)) return "Whoa, chill out!"
      return "Whatever."
    }
  
    private isQuiet = (call: string): boolean => call.trim() === ""
    private isQuestion = (call: string): boolean => call.endsWith("?")
    private isShouting = (call: string): boolean =>
      !!new RegExp(/[a-z]/i).exec(call) && call.toUpperCase() === call
  }