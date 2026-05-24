import mongoose from "mongoose";
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    subject: {
      type: String,
      required: [true, "Please enter your Subject"]
    },
    message: {
      type: String,
      required: [true, "Please enter your message"]
    },
  },
  { timeStamp: true },
);
const contactModel = mongoose.model("contact", contactSchema);
export default contactModel;
