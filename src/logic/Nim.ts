export const MIN_SIZE = 3;

export class Nim {
    protected ai: boolean;
    protected size: number;
    protected board: any;
    protected player: number;
    protected humanPlayer: number;
    protected misere: boolean;

    constructor(size: number, ai: boolean = false, humanPlayer: number = 1, misere: boolean = false) {
        this.ai = ai
        if (size < MIN_SIZE) {
            console.log('too small size given')
            throw 'Too small size given'
        }
        this.size = size;
        this.board = {};
        [...Array((size+ 1) - size)].map((_, i) => MIN_SIZE + i).forEach(val => this.board[val] = 0)
        this.player = 1
        this.humanPlayer = humanPlayer;
        this.misere = misere
    }

    play = () => {
        while (true) {
            console.log('show game fn')
            console.log(`Player ${this.player} turn`)
            try {
                if (this.ai) {
                    if(this.player === this.humanPlayer) {
                        this.playerInput()
                    } else {
                        
                    }
                }
            }
        }
    }

    playerInput = () => {
        const stack = Number(prompt("Which stack"));
        const count = Number(prompt("How many"));
        this.xaStack(stack, count);
    }

    xaStack =  (stack: number, count: number) => {
        if (!(stack in this.board)) {
            console.log('stack does not exist')
        } else if (count + this.board[stack] > stack || count === 0) {
            console.log('you can\'t x that many lines')
        }
        this.board[stack] += count;
    }
}