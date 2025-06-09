import { BlockchainInterface, TransactionInterface } from "./types";
import { Block } from "./Block";
import { Transaction } from "./Transaction";

export class Blockchain implements BlockchainInterface {
    chain: Block[];
    pendingTransactions: Transaction[];
    difficulty: number;
    minerRewards: number;
    blockSize: number;
    nodes: Set<string>;

    constructor() {
        this.chain = [];
        this.pendingTransactions = [];
        this.difficulty = 2;
        this.minerRewards = 50;
        this.blockSize = 10;
        this.nodes = new Set<string>();
    }

    registerNode(address: string): void {
        try {
            const url = new URL(address);
            this.nodes.add(url.host);
        } catch (error) {
            console.error("Invalid URL provided:", address);
        }
    }

}