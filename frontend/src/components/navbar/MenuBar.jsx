import React, {useState} from "react";
import styles from "./MenuBar.module.css";
import {Link} from "react-router-dom";
import CustomButton from "../button/CustomButton";
import logo from "../../assets/logo.png";

export default function MenuBar({title, userlogo, style}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.navbar} style={style}>
      <div className={styles.logoRow}>
        <div className={styles.logo}>
          <img src={userlogo || logo} alt="logo" className={styles.logoimg} />
          <h1 className={styles.title}>{title || "Your Company Name"}</h1>
        </div>
        <button
          type="button"
          className={styles.menuToggle}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <ul
        className={`${styles.items} ${isOpen ? styles.itemsOpen : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <li className={styles.item}>
          <Link to={"/"}>Home</Link>
        </li>
        <li className={styles.item}>
          <Link to={"/about"}>About</Link>
        </li>
        <li className={styles.item}>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li className={styles.item}>
          <Link to={"/blogs"}>Blogs</Link>
        </li>
        <li className={styles.item}>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <Link to={"/book-table"} className={styles.link}>
        <CustomButton btnTxt="Book A Table" />
      </Link>
    </div>
  );
}
