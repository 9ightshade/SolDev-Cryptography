import * as token from "@solana/spl-token"
import * as helpers from "@solana-developers/helpers"
import * as web3 from "@solana/web3.js"
import { config } from "dotenv"

//after importing config from dotenv to load secret key always remember to call function
config()

// firstly always establish connection 
const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

const user = helpers.getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${user.publicKey.toBase58()}`
);


const tokenMint = await token.createMint(connection, user, user.publicKey, null, 2);

const link = helpers.getExplorerLink("address", tokenMint.toString(), "devnet");

console.log(`✅ Finished! Created token mint: ${link}`);
