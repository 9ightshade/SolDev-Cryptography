import {  Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";


const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

console.log("Connected");


const public_key = new PublicKey("MJKqp326RZCHnAAbew9MDdui3iCKWco7fsK9sVuZTX2")

console.log("pass");



const balance = await connection.getBalance(public_key);

const balance_in_sol = balance / LAMPORTS_PER_SOL

console.log("pass");

console.log(`${balance_in_sol} Sol`);



// const bal_in_sol = balance / LAMPORTS_PER_SOL
// console.log(`${bal_in_sol} Sol`);
 