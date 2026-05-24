import mongoose from "mongoose";
const tableSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
    },
    Phone: {
      type: String,
      required: [true, "Please enter your phone"],
      unique: true,
    },
    Date: {
      type: Date,
    },
    Time: {
        type: Time,
    },
    person: {
        type: Number,
        enum:[1,2,3,4]
    },
  },
  { timeStamp: true },
);
const tableModel = mongoose.model("table", tableSchema);
export default tableModel;
