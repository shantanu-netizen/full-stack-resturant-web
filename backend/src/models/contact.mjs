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
  { timestamps: true },
);
const contactModel = mongoose.model("contact", contactSchema);
export default contactModel;
