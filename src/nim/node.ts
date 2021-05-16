import {isEqual} from 'lodash-es';

export class Node {
    public piles: number[] = [];
    public heuristicValue: number = 0;
    public childList: Node[] = [];

    constructor(piles: number[], parent: Node | null = null) {
        if (parent === null) {
            this.piles = piles;
            this.childList = [];
        } else {
            parent.childList.push(this);
            this.piles = piles;
            this.childList = [];
        }
    }

    getPiles = (): number[] => JSON.parse(JSON.stringify(this.piles));

    getChildList = (): Node[] => this.childList;

    getHeuristicValue = (): number => this.heuristicValue;

    setHeuristicValue = (val: number): void => {
        this.heuristicValue = val;
    }

    isEmpty = (): boolean => this.piles?.length === 0;

    equals = (givenNode: Node | null): boolean => {
        if (givenNode === this) {
            return true;
        }
        if (givenNode === null) {
            return false;
        }

        return isEqual(this.piles, givenNode.piles)
    }
}

export default Node;