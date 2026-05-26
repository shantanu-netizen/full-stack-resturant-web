import React from "react";
import styles from "./OrderApps.module.css";
import doordashLogo from "../../assets/DoorDash_Logo.svg";
import foodpandaLogo from "../../assets/foodpanda.svg";
import grubhubLogo from "../../assets/grubhub.svg";
import deliverooLogo from "../../assets/Deliveroo logo.svg";
import instacartLogo from "../../assets/Instacart_logo_and_wordmark.svg";
import didiFoodLogo from "../../assets/didi-food-logo.svg";
import uberEatsLogo from "../../assets/Uber Eats logo.svg";
import justEatLogo from "../../assets/just eat.svg";

const apps = [
  {name: "Uber Eats", logo: uberEatsLogo, showName: false},
  {name: "Grubhub", logo: grubhubLogo, showName: false},
  {name: "Postmates", color: "#000000", showName: true},
  {name: "DoorDash", logo: doordashLogo, showName: false},
  {name: "Foodpanda", logo: foodpandaLogo, color: "#D70F64", showName: false},
  {name: "Deliveroo", logo: deliverooLogo, color: "#00CCBC", showName: true},
  {name: "Instacart", logo: instacartLogo, color: "#E06209", showName: false},
  {name: "Just Eat", logo: justEatLogo, showName: false},
  {name: "DiDi Food", logo: didiFoodLogo, color: "#2C2F24", showName: false},
];

export default function OrderApps() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.textColumn}>
          <h2 className={styles.title}>You can order through apps</h2>
          <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper.</p>
        </div>

        <div className={styles.appsGrid}>
          {apps.map(({name, logo, color, showName}) => (
            <div key={name} className={styles.card}>
              <div className={styles.appContent}>
                {logo && <img src={logo} alt={`${name} Logo`} className={styles.logo} />}

                {(!logo || showName) && (
                  <span className={styles.appName} style={color ? {color} : {}}>
                    {name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
