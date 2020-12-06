/*
 * This stub is provided to make it straightforward to get started.
 */

class TwoFer {
  static twoFer( you: string = 'you' ) {
    you = you
    const MESSAGE: string = `One for ${you}, one for me.` // Another solution with concatenation: "One for " + you + ", one for me."
    return MESSAGE
  }
}

export default TwoFer

  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  // ^
  // allows the tests to import this function and call it

  // <-- Your code goes here. You may remove all the commentary in this file.

