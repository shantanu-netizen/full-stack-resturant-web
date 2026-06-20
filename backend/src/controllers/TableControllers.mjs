import tableModel from "../models/Table.mjs";

const table = async (req, res) => {
  try {
    const data = req.body;
    const { name, phone, date, time, person } = data;

    if (!name || !phone || !date || !time || !person) {
      return res.status(400).send({ message: "all fields are required" });
    }

    const personNumber = Number.parseInt(person, 10);

    if (!Number.isInteger(personNumber) || personNumber < 1 || personNumber > 4) {
      return res.status(400).send({ message: "Only Space for four persons" });
    }

    const bookingDate = new Date(date);

    if (Number.isNaN(bookingDate.getTime())) {
      return res.status(400).send({ message: "Please enter a valid booking date" });
    }

    const booking = await tableModel.create({
      name,
      phone,
      date: bookingDate,
      time,
      person: personNumber,
    });

    return res.status(201).send({
      message: "Your table is booked",
      booking,
    });
  } catch (error) {
    return res.status(500).send({ message: "internal error", error: error.message });
  }
};

export default table;
