export interface TransactionInterface {
    sender: string;
    receiver: string;
    amount: number;
    time: string;
    hash: string;
    signature?: string;
}

export interface BlockInterface {
    index: number;
    transactions: TransactionInterface[];
    time: string;
    previousHash: string;
    nonce: number;
    hash: string;
}

export interface BlockchainInterface {
    chain: BlockInterface[],
    pendingTransactions: TransactionInterface[];
    difficulty: number;
    minerRewards: number;
    blockSize: number; //max transactions per block
    nodes: Set<string>;
}