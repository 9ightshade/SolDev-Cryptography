import { Keypair } from "@solana/web3.js";

//generate keypair
const key_pair = Keypair.generate();
console.log(`✅ Generated keypair!`);

console.log(`Public key:${key_pair.publicKey.toBase58()}`);
console.log(`Secret key:${key_pair.secretKey}`);
console.log(`✅ Finished!`);