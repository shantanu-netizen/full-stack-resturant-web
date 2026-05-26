import React from 'react'
import styles from './CustomButton.module.css'
export default function CustomButton({ btnTxt = "", style = "", handler = () => { } }) {
    return (
        <button className={`${styles.btn} ${style}`} onClick={handler}>{btnTxt || "Submit"}</button>
    )
}
