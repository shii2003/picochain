import { BlockchainInterface, TransactionInterface } from "./types";
import { Block } from "./Block";
import { Transaction } from "./Transaction";
import { CryptoUtils } from "./CryptoUtils";

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

        this.chain.push(this.addGenesisBlock());
    }

    // registerNode(address: string): void {
    //     try {
    //         const url = new URL(address);
    //         this.nodes.add(url.host);
    //     } catch (error) {
    //         console.error("Invalid URL provided:", address);
    //     }
    // }

    minePendingTransactions(miner: string): boolean {

        const lenPT = this.pendingTransactions.length;

        if (lenPT <= 1) {
            console.log("Not enought transactions to mine! (Must be greater than 1)")
            return false;
        }

        for (let i = 0; i < lenPT; i += this.blockSize) {
            const end = Math.min(i + this.blockSize, lenPT);
            const transactionSlice = this.pendingTransactions.slice(i, end);

            const newBlock = new Block(transactionSlice, new Date().toLocaleString(), this.chain.length);
            const hashVal = this.getLastBlock().hash;
            newBlock.previousHash = hashVal;
            newBlock.mineBlock(this.difficulty);
            this.chain.push(newBlock);
        }

        console.log("Mining Transactions Success!");

        const payMiner = new Transaction("Miner Rewards", miner, this.minerRewards);
        this.pendingTransactions = [payMiner];
        return true;
    }

    addTransaction(sender: string, receiver: string, amount: number, privateKey: string, publicKey: string): number | false {
        if (!sender || !receiver || !amount) {
            console.log("Transaction error: Missing required fields");
            return false;
        }
        console.log("inside addTransaction fucntion", sender, receiver);
        const transaction = new Transaction(sender, receiver, amount);
        transaction.signTransaction(privateKey);

        if (!transaction.isValidTransaction()) {
            console.log("Transaction error: Invalid transaction");
            return false;
        }

        this.pendingTransactions.push(transaction);
        return this.chain.length + 1;
    }

    getLastBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    addGenesisBlock(): Block {
        const transactions: Transaction[] = [];
        transactions.push(new Transaction("genesis", "genesis", 0));
        const genesis = new Block(transactions, new Date().toLocaleString(), 0);
        genesis.previousHash = "None";
        genesis.mineBlock(this.difficulty);
        return genesis;
    }

    isValidChain(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const previousBlock = this.chain[i - 1];
            const currentBlock = this.chain[i];

            if (!currentBlock.hasValidTransactions()) {
                console.log("Invalid transactions in block");
                return false;
            }

            if (currentBlock.hash !== currentBlock.calculateHash()) {
                console.log("Invalid hash in block");
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                console.log("Invalid previous hash reference");
                return false;
            }
        }
        return true;
    }

    generateKeys(): string {
        const { publicKey, privateKey } = CryptoUtils.generateKeyPair();

        // In a real implementation, you'd save these to files
        console.log('Generated new key pair');
        console.log('Public Key:', publicKey);
        return publicKey;
    }

    chainJSONEncode(): any[] {
        return this.chain.map(block => block.toJSON());
    }

    chainJSONDecode(chainJSON: any[]): Block[] {
        return chainJSON.map(blockData => Block.fromJSON(blockData));
    }

    getBalance(person: string): number {
        let balance = 0;

        for (let i = 1; i < this.chain.length; i++) {
            const block = this.chain[i];

            try {
                for (const transaction of block.transactions) {
                    if (transaction.sender === person) {
                        balance -= transaction.amount;
                    }
                    if (transaction.receiver === person) {
                        balance += transaction.amount;
                    }
                }
            } catch (error) {
                console.log("No transaction found");
            }
        }

        return balance + 100;
    }
}