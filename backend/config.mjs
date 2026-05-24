import dotenv from "dotenv";
dotenv.config();
const config = {
  port: process.env.PORT,
  uri: process.env.MONGODBURI,
  secertToken: process.env.secretToken
};
export default config;
