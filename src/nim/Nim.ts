import Node from './node'

export class Nim {
    public state: Node;

    constructor(state: Node) {
        this.state = state;
    }

    startGame = (): void => {
        let playerMove = true;
        while (true) {
            if (playerMove) {
                this.playerMove()
            } else {
                this.computerMove();
            }

            if (this.state.isEmpty()) {
                console.log(playerMove ? 'Player ' : 'Computer ', 'wins')
                return;
            }
            playerMove = !playerMove
        }
    }

    playerMove = (): void => {
        console.log('----User move----')
        console.log('Current state ', this.state.piles)
        this.state = this.move();
        console.log('After move ', this.state.piles)
    }

    computerMove = (): void => {
        console.log('----Computer move----')
        console.log('Current state ', this.state.piles)
        const minimax = this.minimax(this.state, 2, true);
        const perfectMove = this.state.getChildList().find((n) => n.getHeuristicValue() === minimax);
        this.state = perfectMove || this.state.getChildList()[0];
        console.log('After Move ', this.state.piles)
    }

    generateChildNodes = (givenNode: Node): Node[] => {
        if (givenNode.isEmpty()) {
            return [];
        }

        const nodes = [];
        const piles = givenNode.getPiles();

        for (let i = 0; i < piles.length; i++) {
            let temp = givenNode.getPiles();
            while (temp[i] > 0) {
                temp[i] = temp[i] - 1;
                const child = new Node(temp.map(num => num), givenNode);
                nodes.push(child);
            }
        }

        return nodes;
    }

    minimax = (givenNode: Node, depth: number, maximizingPlayer: boolean): number => {
        if (depth === 0 || givenNode.isEmpty()) {
            return (maximizingPlayer ? 1 : -1) * this.heuristicEvaluation(givenNode)
        }

        if (maximizingPlayer) {
            let bestValue = Number.MIN_SAFE_INTEGER
            this.generateChildNodes(givenNode).forEach((child) => {
                const value = this.minimax(child, depth - 1, false)
                if (value > bestValue) {
                    bestValue = value
                }
                child.setHeuristicValue(value);
                givenNode.setHeuristicValue(bestValue)
            })

            return bestValue;
        } else {
            let bestValue = Number.MAX_SAFE_INTEGER
            this.generateChildNodes(givenNode).forEach((child) => {
                const value = this.minimax(child, depth - 1, true)
                if (value < bestValue) {
                    bestValue = value
                }
                child.setHeuristicValue(value);
                givenNode.setHeuristicValue(bestValue)
            })

            return bestValue;
        }
    }

    heuristicEvaluation = (givenNode: Node): number => this.nimSum(givenNode) !== 0 ? 1 : -1;


    nimSum = (givenNode: Node): number => {
        let xor = 0;
        givenNode.getPiles().forEach((val) => xor ^= val);

        return xor;
    }

    move = (): Node => {
        while (true) {
            const pile = Number(prompt('choose pile'))
            const piles = this.state.getPiles();
            if (pile < 0 || piles?.length < pile) {
                console.log('wrong pile number')
                continue;
            }
            const pileAmount = piles[pile];

            const amount = Number(prompt('chosse amount'))
            if (amount < 0 || pileAmount === 0 || pileAmount < amount) {
                console.log('wrong amount')
                continue;
            }

            piles[pile] = pileAmount - amount;

            return new Node(piles, this.state);
        }
    }
}

export default Nim;
