import React from "react";
import styles from "./ContactNav.module.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import {Link} from "react-router-dom";
export default function ContactNav() {
  return (
    <div className={styles.nav}>
      <ul className={styles.contact}>
        <li className={styles.item}>
          <LocalPhoneOutlinedIcon /> <span>(+91) 9898989090</span>
        </li>
        <li className={styles.item}>
          <EmailOutlinedIcon /> <span>moderndaba@gmail.com</span>
        </li>
      </ul>
      <ul className={styles.social}>
        <li className={styles.item}>
          <XIcon />
        </li>
        <li className={styles.item}>
          <FacebookIcon />
        </li>
        <li className={styles.item}>
          <InstagramIcon />
        </li>
      </ul>
    </div>
  );
}
