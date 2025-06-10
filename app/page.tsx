import { Blockchain } from "@/blockchain-logic/Blockchain";
import { CryptoUtils } from "@/blockchain-logic/CryptoUtils";

export default function Home() {

  const blockchain = new Blockchain();

  const user1Keys = CryptoUtils.generateKeyPair();
  const user2Keys = CryptoUtils.generateKeyPair();

  //sender, receiver, amount, privatekey, publickey
  blockchain.addTransaction("user1", "user2", 50, user1Keys.privateKey, user1Keys.publicKey)

  blockchain.addTransaction("user2", "user1", 20, user2Keys.privateKey, user2Keys.publicKey)

  blockchain.minePendingTransactions("miner1")

  return (
    <div className="flex items-center justify-center  h-screen w-full bg-neutral-700">
      <div className=" flex flex-col border border-neutral-500 rounded-md px-4 py-3   items-center justify-center text-neutral-300 font-semibolda">
        <div>
          user1's balance: {blockchain.getBalance("user1")}
        </div>
        <div>
          user2's balance: {blockchain.getBalance("user2")}
        </div>
        <div>
          miner1's balance: {blockchain.getBalance("miner1")}
        </div>

        <p>
          is blockchain valid? {blockchain.isValidChain()}
        </p>
      </div>
    </div>

  );
}
