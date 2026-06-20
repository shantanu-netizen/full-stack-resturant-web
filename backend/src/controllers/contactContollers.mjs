import contactModel from "../models/contact.mjs";

const contact = async (req, res) => {
  try {
    const data = req.body;
    const { name, email, subject, message } = data;

    if (!name || !email || !subject || !message) {
      return res.status(400).send({ message: "all fields are required" });
    }

    const contact = await contactModel.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    return res.status(201).send({
      message: "we received your contact",
      contact,
    });
  } catch (error) {
    return res.status(500).send({ message: "internal error", error: error.message });
  }
};

export default contact;
