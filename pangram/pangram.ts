class Pangram {
    private alphabet: string = 'abcdefghijklmnopqrstuvwxyz'; 
    private sentence: string;
    
    constructor(sentence: string) {
        this.sentence = sentence.toLowerCase();
    }

    isPangram(): boolean {
        const charSet = new Set<string>();
        for(const char of this.sentence) {
            if(this.alphabet.includes(char))
                charSet.add(char);
        }

        return charSet.size === 26;
    }
}

export default Pangram;