import { CryptoUtils } from "./CryptoUtils";
import { TransactionInterface } from "./types";
export class Transaction implements TransactionInterface {
    sender: string;
    receiver: string;
    amount: number;
    time: string;
    hash: string;
    signature?: string;

    constructor(sender: string, receiver: string, amount: number) {
        this.sender = sender;
        this.receiver = receiver;
        this.amount = amount;
        this.time = new Date().toLocaleString();
        this.hash = this.calculateHash();

    }

    calculateHash(): string {
        const hashString = this.sender + this.receiver + this.amount.toString() + this.time;
        return CryptoUtils.createHash(JSON.stringify(hashString));
    }

    // try verfiying if it is signed using the public key
    isValidTransaction(): boolean {
        if (this.hash !== this.calculateHash()) {
            return false;
        }
        if (this.sender === this.receiver) {
            return false;
        }
        if (this.sender === "Miner Rewards") {
            return true;
        }
        if (!this.signature || this.signature.length === 0) {
            console.log("No Signature");
            return false;
        }

        return true;
    }

    signTransaction(privateKey: string,): boolean {
        if (this.hash !== this.calculateHash()) {
            console.log("Transaction is tampered with.");
            return false;
        }
        try {
            this.signature = CryptoUtils.signData(this.hash, privateKey);
            console.log("Signature created.");
            return true;
        } catch (error) {
            console.log("Failed to sign transaction:", error);
            return false;
        }
    }

    toJSON(): any {
        return {
            sender: this.sender,
            receiver: this.receiver,
            amount: this.amount,
            time: this.time,
            hash: this.hash,
            signature: this.signature,
        }
    }

    static fromJSON(data: any): Transaction {
        const transaction = new Transaction(data.sender, data.receiver, data.amount);
        transaction.time = data.time;
        transaction.signature = data.signature;

        return transaction;
    }
}