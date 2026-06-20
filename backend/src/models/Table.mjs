import mongoose from "mongoose";

const tableSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please enter your name"],
    },
    phone: {
      type: String,
      trim: true,
      required: [true, "Please enter your phone"],
    },
    date: {
      type: Date,
      required: [true, "Date for booking is required."],
    },
    time: {
      type: String,
      required: [true, "Time for Booking is required."],
      enum: {
        values: ["06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"],
        message: "Only [06:30 PM, 07:00 PM, 07:30 PM, 08:00 PM] are booking timings",
      },
    },
    person: {
      type: Number,
      required: [true, "No of person is required."],
      enum: {
        values: [1, 2, 3, 4],
        message: "Only Space for four persons",
      },
    },
  },
  { timestamps: true },
);

const tableModel = mongoose.model("table", tableSchema);
export default tableModel;
