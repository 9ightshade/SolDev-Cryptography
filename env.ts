require('dotenv').config();

const Loaded_key_pair = process.env.SECRET_KEY;

console.log(Loaded_key_pair);
console.log(
  `✅ Finished! We've loaded our secret key securely, using an env file!`
);

