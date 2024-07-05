import { airdropIfRequired } from "@solana-developers/helpers";
import { Connection, LAMPORTS_PER_SOL, Transaction, PublicKey, SystemProgram, sendAndConfirmTransaction, Keypair } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const transaction = new Transaction()


//address of sender and reciever 
// const senderAddress = process.argv[2]
// const receiverAddress = process.argv[3]

//supplied address is used to generate pubkey if this fails then pub key is invalid

const sender = new PublicKey("EdFdN6QVWyCwJhN6drtNWUmJuaXtPYLk56aF8jphCKiM")
const reciever = new PublicKey("CVUHNpAg72dMzYxvzSZjR5wdmC5Hq2DtUkYjLNVSVCJK");

console.log(`Valid Pub Keys`);

const amount = 3;

// function sends 3 sol when called
const senSol = SystemProgram.transfer({
  fromPubkey: sender,
  toPubkey: reciever,
  lamports:LAMPORTS_PER_SOL * amount
}
)

//checking if sender account has enough sol before transfer
const sender_balance = await connection.getBalance(sender);
const sender_balance_in_sol = sender_balance / LAMPORTS_PER_SOL;


//function to airdrop sender account
const airdrop = await airdropIfRequired(
  connection,
  sender,
  2 * LAMPORTS_PER_SOL,
  0.5 * LAMPORTS_PER_SOL
);

if (sender_balance_in_sol <= 3) {
  transaction.add(airdrop)
  console.log(`airdrop sucessful to address:${sender}`);
} else {
  transaction.add(senSol)
}
//generating keypair from pubkey
const senderKeyPair = Keypair.generate(sender)
console.log(sender);

console.log(`paased`);


//confirming transfer
const signature = sendAndConfirmTransaction(
  connection,
  transaction,
  [senderKeyPair]
)

console.log(`Transfer complete, transaction signature is ${signature}`);

/**
 * all solana transactions on blockchain are viewable on solana explorer
 * the returned signature from sendAndConfirmTransaction() program can be inputed into solana explorer to see 
 * details of the transaction
 * 
 */