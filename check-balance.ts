import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

// const public_key = new PublicKey("EdFdN6QVWyCwJhN6drtNWUmJuaXtPYLk56aF8jphCKiM")//specifying the public address like this makes it only read data from the specified address only instead do use process.agrv[2], to make address dynamic. argv[2] reads the arguments passed to the node.js process

const supplied_address = (process.argv[2])

let public_key;

try{
  public_key = new PublicKey(supplied_address);
}
catch {
  console.log(`Invalid Public key`);
  
}

//criteria for invalid wallet address
//instead of checking the address length run the connection if successful then address is valid

// const connected = await connection.getAccountInfoAndContext(supplied_address);//this makes sure the supplied address is valid



// console.log(`supplied adress: ${supplied_address}`);

// console.log("acct info: ", connected);




const balance = await connection.getBalance(public_key);  
  const balance_in_sol = balance / LAMPORTS_PER_SOL;
  
console.log(`💰 Finished! The balance for the wallet at address ${public_key} is ${balance_in_sol} sol`);