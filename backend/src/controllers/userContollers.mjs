import userModel from "../models/user.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config.mjs";

const register = async (req, res) => {
  try {
    const data = req.body || {};
    const { fname, lname, email, title, password } = data;

    if (!fname || !lname || !email || !title || !password) {
      return res.status(400).send({ message: "all fields are required" });
    }

    data.password = await bcrypt.hash(password, 10);
    const user = await userModel.create(data);
    return res.status(201).send({
      message: "User registered successfully",
      data: {
        id: user._id,
        fname: user.fname,
        lname: user.lname,
        title: user.title,
        email: user.email,
      },
    });
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
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Email and password are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid Credential" });
    }
    const token = jwt.sign({ userId: user._id }, config.secertToken);
    res.setHeader("Authorization", `Bearer ${token}`);
    return res.status(200).send({ status: "true", data: { token } });
  } catch (error) {
    return res.status(500).send({ message: "failed", error: error.message });
  }
};
export { register, login };
