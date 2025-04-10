import Contact from "../models/Contact.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
