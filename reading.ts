import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

const connection = new Connection(clusterApiUrl("devnet"));//connects us devnet through the clusterapiurl

console.log("✅ Connected!");

//to read from the network an address is required since everything from token, sol,nft are all stored in accounts and public keys point to accounts address

const address = new PublicKey("EdFdN6QVWyCwJhN6drtNWUmJuaXtPYLk56aF8jphCKiM");

const balance = await connection.getBalance(address); //this gets balance from the address we inputed

console.log("The balance of the account at: " + address + " " + "is", balance + " Lamports");

//return balance is in lamports so to get the balance in sol use the constant LAMPORT_PER_SOL from @solana/web3.js

const balance_in_sol = balance / LAMPORTS_PER_SOL;

console.log(`Balance in sol: ${balance_in_sol}`);


console.log("✅ Finished!");





