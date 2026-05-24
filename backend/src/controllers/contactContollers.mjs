import contactModel from "../models/contact.mjs";
const contact = async (res, req) => {
  const { name, email, subject, message } = data;
  try {
    let data = req.body;
    if (!name && !email && !subject && !message) {
      return res.status(400).send({ message: "all are fields required" });
    }
      let contact = await contactModel.create(data)
       return res.status(201).send({ message: "we recived your contact" });
  } catch (error) {
       return res.status(500).send({ message: "internal error", error:error});
  }
};
export default contact;