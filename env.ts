import { config } from "dotenv";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";




const Loaded_key_pair = getKeypairFromEnvironment("SECRET_KEY");
console.log( Loaded_key_pair);
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

