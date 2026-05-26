import React, {useState} from "react";
import styles from "./BookTable.module.css";
import CustomButton from "../components/button/CustomButton";
import map from "../assets/map.png";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import Footer from "../components/footer/Footer";

export default function BookTable() {
  const [formData, setFormData] = useState({
    date: "",
    time: "06:30 PM",
    name: "",
    phone: "",
    person: "1 Person",
  });

  const timeOptions = ["06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"];
  const personOptions = ["1 Person", "2 Persons", "3 Persons", "4+ Persons"];

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your table is booked");
    setFormData({
      date: "",
      time: "06:30 PM",
      name: "",
      phone: "",
      person: "1 Person",
    });
  };

  const {date, time, name, phone, person} = formData;

  return (
    <div>
      <div className={styles.menuBar}>
        <ContactNav />
        <MenuBar title="Modern DABA" />
      </div>

      {/* Main Container */}

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <h1 className={styles.title}>Book A Table</h1>
          <p className={styles.subtitle}>
            We consider all the drivers of change gives you the components <br />
            you need to change to create a truly happens.
          </p>
        </div>

        {/* Form Card */}

        <div className={styles.formCard}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="date" className={styles.label}>
                  Date
                </label>

                {/* Date Input */}
                <input type="date" id="date" className={styles.input} value={date} onChange={handleChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="time" className={styles.label}>
                  Time
                </label>

                <select id="time" className={styles.select} value={time} onChange={handleChange}>
                  {timeOptions.map((e) => (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>
                  Name
                </label>
                <input type="text" id="name" placeholder="Enter your name" className={styles.input} value={name} onChange={handleChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>
                  Phone
                </label>
                <input type="tel" id="phone" placeholder="x-xxx-xxx-xxxx" className={styles.input} value={phone} onChange={handleChange} required />
              </div>
            </div>

            <div className={styles.inputGroupFull}>
              <label htmlFor="person" className={styles.label}>
                Total Person
              </label>
              <select id="person" className={styles.select} value={person} onChange={handleChange}>
                {personOptions.map((e) => (
                  <option key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.submitBtn}>
              <CustomButton btnTxt="Book A Table" style={styles.fullWidthBtn} />
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className={styles.mapSection}>
          <img src={map} alt="Location Map" className={styles.mapImg} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
