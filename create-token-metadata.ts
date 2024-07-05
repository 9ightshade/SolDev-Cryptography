import * as web3 from "@solana/web3.js"
import * as helpers from "@solana-developers/helpers"
import * as token from "@solana/spl-token"
import * as mpl from "@metaplex-foundation/mpl-token-metadata"
import { config } from "dotenv"

config() // func call to retrieve value from .env file

const user = helpers.getKeypairFromEnvironment("SECRET_KEY"); // GENERATING PUBLIC KEY FROM STORED SECRET KEY IN .ENV

const connection = new web3.Connection(web3.clusterApiUrl("devnet"))

const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);


console.log(
  `🔑 We've loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
);


const tokenMintAccount = new web3.PublicKey("5YkZV21ZwZb9osk1Ncbdha5CbNqd1HRnfvdzqWJ6ZCvp")

const metadataData = {
  name: "Shadow Token",
  symbol: "ST",
  uri: "https://arweave.net/1234",
  sellerFeeBasisPoints: 0,
  Creators: null,
  uses: null
  
}


const metadataPDAAndBump = web3.PublicKey.findProgramAddressSync(
  [
    Buffer.from("metadata"),
    TOKEN_METADATA_PROGRAM_ID.toBuffer(),
    tokenMintAccount.toBuffer(),
  ],
  TOKEN_METADATA_PROGRAM_ID
);

const metadataPDA = metadataPDAAndBump[0];

const transaction = new web3.Transaction();

const createMetadataAccountInstruction = mpl.createCreateMetadataAccountV3Instruction(
  {
    metadata: metadataPDA,
    mint: tokenMintAccount,
    mintAuthority: user.publicKey,
    updateAuthority: user.publicKey
  },
  {
    createMetadataAccountArgsV3: {
      collectionDetails: null,
      data: metadataData,
      isMutable: true,
    }
  }
);


transaction.add(createMetadataAccountInstruction);

const transactionLink = helpers.getExplorerLink(
  'transaction',
  transactionSignature,
  'devnet'
);

console.log(`✅ Transaction confirmed, explorer link is: ${transactionLink}!`);


const tokenMintLink = helpers.getExplorerLink(
  'address',
  tokenMintAccount.toString(),
  'devnet'
);

console.log(`✅ Look at the token mint again: ${tokenMintLink}!`);