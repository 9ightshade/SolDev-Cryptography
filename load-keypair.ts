import { config } from "dotenv"; //before importing this run npm i dotenv 
import { getKeypairFromEnvironment } from "@solana-developers/helpers";


config() //this loads env variables


const keypair = getKeypairFromEnvironment("SECRET_KEY");//access env variable and the getkeypairfromenvironment function auto generates public key console keypair will display both

console.log("Keypair success");
console.log("Public key: ",  keypair.publicKey.toBase58());



// generate keypair from retrieved secret key



// const secret_key = process.env.SECRET_KEY
// const public_key = process.env.PUBLIC_KEY




// console.log("public key:", public_key);
// console.log("secret key:", secret_key);




