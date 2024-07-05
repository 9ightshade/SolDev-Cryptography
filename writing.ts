import { Connection, Transaction, SystemProgram, sendAndConfirmTransaction, PublicKey, Keypair} from "@solana/web3.js";

import { getKeypairFromEnvironment } from "@solana-developers/helpers";

import { config } from "dotenv";

config()

// const publicKey = new PublicKey('');
const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
const keypair = Keypair.generate()

const senderKeypair = getKeypairFromEnvironment('SECRET_KEY');
// const senderPubKey = senderKeypair.publicKey.toBase58();

// const senderPubKey = new PublicKey ('EdFdN6QVWyCwJhN6drtNWUmJuaXtPYLk56aF8jphCKiM')



const recieverPubKey = new PublicKey("CVUHNpAg72dMzYxvzSZjR5wdmC5Hq2DtUkYjLNVSVCJK")


// console.log(`sender public key:${senderPubKey}`);
console.log(
    `✅ Loaded our own keypair, the destination public key, and connected to Solana`
  );

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 9000;

const sendSolInstruction = SystemProgram.transfer(
  {
    fromPubkey: senderKeypair.publicKey,
    toPubkey:recieverPubKey,
    lamports: LAMPORTS_TO_SEND
  }
);

transaction.add(sendSolInstruction);
console.log('pass');

console.log(`sender pubKey: ${senderKeypair.publicKey}`);




  try {
    const signature = await sendAndConfirmTransaction(
      connection,
      transaction, [
      senderKeypair,
    ]
    );
console.log(`success signature is ${signature}`);

  } catch(error) {
    console.log(`transaction fail ${error}`);
    
  }



 
  console.log(
    `💸 Finished! Sent ${LAMPORTS_TO_SEND} to the address ${recieverPubKey}. `
  );
  // console.log(`Transaction signature is ${signature}!`);
