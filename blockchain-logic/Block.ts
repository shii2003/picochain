import { CryptoUtils } from "./CryptoUtils";
import { Transaction } from "./Transaction";
import { BlockInterface, TransactionInterface, } from "./types";

export class Block implements BlockInterface {
    index: number;
    transactions: Transaction[];
    time: string;
    previousHash: string;
    nonce: number;
    hash: string;

    constructor(transactions: Transaction[], time: string, index: number) {
        this.index = index;
        this.transactions = transactions;
        this.time = time;
        this.previousHash = '';
        this.nonce = 0;
        this.hash = this.calculateHash();

    }

    calculateHash(): string {
        let hashTrasactions: string = "";

        for (const transaction of this.transactions) {
            hashTrasactions += transaction.hash;
        }

        const hashString = this.time + hashTrasactions + this.previousHash + this.nonce.toString();

        return CryptoUtils.createHash(JSON.stringify(hashString));
    }

    mineBlock(difficulty: number): boolean {
        const target = Array(difficulty).fill(0).map((_, i) => i).join('');

        console.log(`mining block with index: ${this.index} with difficulty ${difficulty} ...`);

        while (this.hash.substring(0, difficulty) !== target) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("Block mined.");
        return true;
    }

    hasValidTransactions(): boolean {
        for (const transaction of this.transactions) {
            if (!transaction.isValidTransaction()) {
                return false;
            }
        }
        return true;
    }

    toJSON(): any {
        return {
            index: this.index,
            transactions: this.transactions.map(t => t.toJSON()),
            time: this.time,
            previousHash: this.previousHash,
            nonce: this.nonce,
            hash: this.hash
        };
    }

    static fromJSON(data: any): Block {
        const transactions = data.transactions.map((t: any) => Transaction.fromJSON(t));
        const block = new Block(transactions, data.time, data.index);
        block.hash = data.hash;
        block.previousHash = data.previousHash;
        block.nonce = data.nonce;
        return block;
    }
}