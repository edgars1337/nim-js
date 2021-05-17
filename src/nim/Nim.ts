import Node from './node'

export class Nim {
    public state: Node;

    constructor(state: Node) {
        this.state = state;
    }

    getIsEmpty = (): boolean => this.state.isEmpty();

    playerMove = (stack: number, amount: number): number[] => {
        console.log('User move')
        console.log('Current state ', this.state.piles)
        this.state = this.move(stack, amount);
        console.log('After move ', this.state.piles)

        return this.state.getPiles();
    }

    computerMove = (): number[] => {
        console.log('Computer move')
        console.log('Current state ', this.state.piles)
        const minimax = this.minimax(this.state, 2, true);
        const perfectMove = this.state.getChildList().find((node) => node.getHeuristicValue() === minimax);
        this.state = perfectMove || this.state.getChildList()[0];
        console.log('After Move ', this.state.piles)

        return this.state.getPiles();
    }

    generateChildNodes = (givenNode: Node): Node[] => {
        if (givenNode.isEmpty()) {
            return [];
        }

        const nodes = [];
        const piles = givenNode.getPiles();

        // TODO - make this code better (more JSish)
        for (let i = 0; i < piles.length; i++) {
            let temp = givenNode.getPiles();
            while (temp[i] > 0) {
                temp[i] = temp[i] - 1;
                // for some reason feeding the direct temp stack makes the node id's merge, so we iterate with map to solve it
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

                child.setHeuristicValue(value)
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

                child.setHeuristicValue(value)
                givenNode.setHeuristicValue(bestValue)
            })

            return bestValue;
        }
    }

    heuristicEvaluation = (givenNode: Node): number => this.nimSum(givenNode) !== 0 ? 1 : -1;

    nimSum = (givenNode: Node): number => givenNode.getPiles().reduce((acc,val) => (acc ^ val), 0)

    move = (stack: number | null = null, amount: number | null = null): Node => {
        if (stack !== null && amount !== null) {
            const stacks = this.state.getPiles();
            stacks[stack] = stacks[stack] - amount;
            return new Node(stacks, this.state);
        }

        // legacy prompt/console interaction code
        while (true) {
            const pile = Number(prompt('choose pile'))
            const piles = this.state.getPiles();
            if (pile < 0 || piles?.length < pile) {
                console.log('wrong pile number')
                continue;
            }
            const pileAmount = piles[pile];

            const amount = Number(prompt('choose amount'))
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
