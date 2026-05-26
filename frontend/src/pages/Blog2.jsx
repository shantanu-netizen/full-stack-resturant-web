import React from "react";
import { useLocation } from "react-router-dom";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import Footer from "../components/footer/Footer";
import styles from "./Blog2.module.css";
import photo1 from "../assets/blogPhoto1.jpg";
import photo2 from "../assets/blogPhoto2.jpg";

export default function Blog2() {
  const { state } = useLocation();
  const post = state?.post;

  return (
    <div className={styles.blogDetail}>
      <header>
        <ContactNav />
        <MenuBar title="Modern DABA" />
      </header>

      <main className={styles.page}>
        <h2 className={styles.title}>
          {post?.title || (
            <>
              The secret tips & tricks to prepare a
              <br />
              perfect burger & pizza for our customers
            </>
          )}
        </h2>

        <div className={styles.Image}>
          <img
            src={photo1}
            alt="Blog food preparation"
            className={styles.image}
          />
        </div>

        <section className={styles.content}>
          <h5 className={styles.para}>
            What do you need to prepare a home-made burger?
          </h5>
          <p>
            Creating the perfect burger and pizza is an art, combining
            ingredients, techniques, and passion to craft dishes that truly
            delight the palate. Today, we'll unveil some closely guarded secrets
            and insider tips for mastering these beloved staples of the culinary
            world.
          </p>
          <p>
            <span className={styles.label}>Quality Beef:</span> The heart of a
            perfect burger is top-notch beef. Opt for fresh, high-quality ground
            beef with a fat content of about 20% for the juiciest, most
            flavorful results.
          </p>
          <p>
            <span className={styles.label}>Seasoning:</span> Simplicity is key
            here. A generous pinch of salt and black pepper just before cooking
            will enhance the beef's natural flavors without overshadowing them.
            Don't Overwork the Meat: When forming your patties, be gentle.
            Overworking the meat can lead to dense, tough burgers. You want a
            patty that's firm enough to hold together, but not compressed.
          </p>
          <p>
            <span className={styles.label}>Cooking:</span> High heat is crucial.
            Whether you're grilling or pan-searing, make sure your cooking
            surface is hot enough to form a nice crust on the patty, sealing in
            those delicious juices.
          </p>
          <p>
            <span className={styles.label}>Resting:</span> Allow your cooked
            burgers to rest for a few minutes before serving. This lets the
            juices redistribute throughout the patty, ensuring a moist and
            flavorful bite.
          </p>
        </section>

        <section className={styles.content}>
          <h5 className={styles.para}>
            What are the right ingredients to make it delicious?
          </h5>
          <p>
            Creating the perfect burger and pizza is an art, combining
            ingredients, techniques, and passion to craft dishes that truly
            delight the palate. Today, we'll unveil some closely guarded secrets
            and insider tips for mastering these beloved staples of the culinary
            world.
          </p>
          <p>
            <span className={styles.label}>Quality Beef:</span> The heart of a
            perfect burger is top-notch beef. Opt for fresh, high-quality ground
            beef with a fat content of about 20% for the juiciest, most
            flavorful results.
          </p>
          <p>
            <span className={styles.label}>Seasoning:</span> Simplicity is key
            here. A generous pinch of salt and black pepper just before cooking
            will enhance the beef's natural flavors without overshadowing them.
            Don't Overwork the Meat: When forming your patties, be gentle.
            Overworking the meat can lead to dense, tough burgers. You want a
            patty that's firm enough to hold together, but not compressed.
          </p>
          <p>
            <span className={styles.label}>Cooking:</span> High heat is crucial.
            Whether you're grilling or pan-searing, make sure your cooking
            surface is hot enough to form a nice crust on the patty, sealing in
            those delicious juices.
          </p>
          <p>
            <span className={styles.label}>Resting:</span> Allow your cooked
            burgers to rest for a few minutes before serving. This lets the
            juices redistribute throughout the patty, ensuring a moist and
            flavorful bite.
          </p>
        </section>

        <div className={styles.Image}>
          <img
            src={photo2}
            alt="Delicious homemade burger and pizza"
            className={styles.image}
          />
        </div>

        <section className={styles.content}>
          <h5 className={styles.para}>
            What are the right ingredients to make it delicious?
          </h5>
          <p>
            Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
            eget viverra egestas nisi in consequat. Fusce sodales augue a
            accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lobortis arcu enim urna adipiscing praesent velit
            viverra sit semper lorem eu cursus ve of all hendrerit elementum
            morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi
            dignissim at ante massa mattis magna sit amet purus gravida quis
            blandit turpis..
          </p>
        </section>

        
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
