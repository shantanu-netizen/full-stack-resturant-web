import React, {useState, useMemo} from "react";
import styles from "./Menu.module.css";
import MenuCard from "../components/menu/MenuCard";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import OrderApps from "../components/orderApps/OrderApps";
import {menuData, categories} from "../data/menuData";
import Footer from "../components/footer/Footer";

export default function Menu() {
  const [active, setActive] = useState("All");

  const filteredMenu = useMemo(() => {
    return active === "All" ? menuData : menuData.filter((item) => item.category === active);
  }, [active]);

  return (
    <div>
      <div>
        <ContactNav />
        <MenuBar title="Modern DABA" />
      </div>

      <div className={styles.menuPage}>
        <h2>Our Menu</h2>
        <p className={styles.subtitle}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>

        <div className={styles.categories}>
          {categories.map((item) => (
            <button key={item} className={active === item ? styles.active : ""} onClick={() => setActive(item)}>
              {item}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className={styles.grid}>
          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <OrderApps />
      <Footer />
    </div>
  );
}
