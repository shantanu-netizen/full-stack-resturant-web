import userModel from "../models/user.mjs";
import bcrpyt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config.mjs";
const register = async (res, req) => {
  try {
    let data = req.body;
    if (!fname && !lname && !email && !title && !password) {
      return res.status(400).send({ message: "all fields are required" });
      }
      
    let password = data.password;
    data.password = await bcrpyt.hash(password, 10);
    let user = await userModel.create(data);
    return res.status(201).send({ message: "all fields are required" });
  } catch (error) {
    if (error.message.includes("duplicate")) {
      return res.status(400).send({ message: "failed", error: error.message });
    } else if (error.message.includes("validation")) {
      return res.status(400).send({ message: "failed", error: error.message });
    } else {
      return res.status(500).send({ message: "failed", error: error.message });
    }
  }
};
const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    let isMatch = await bcrpyt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid Credential" });
    }
    let token = jwt.sign({ userId: user._id }, config.secretToken);
    res.setHeader("Authorization", `Bearer ${token}`);
    if (!token) {
      return res.status(400).send({ message: "Invalid Credential" });
    }
    return res.status(200).send({ status: "true", data: { token } });
  } catch (error) {
    return res.status(500).send({ message: "failed", error: error.message });
  }
};
export { register, login };
