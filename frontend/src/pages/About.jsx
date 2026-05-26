import React from "react";
import styles from "./About.module.css";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import Footer from "../components/footer/Footer";

//1st image is used in the TOP section,
// and 3rd image is used in the MIDDLE dark hero
import plateImg from "../assets/1st image.png";   
import contactBg from "../assets/1st image.2.png"; 
import darkHeroBg from "../assets/3rd image.png"; 
import chefImg from "../assets/2nd image.png";    

export default function About() {
  return (
    <div className={styles.about}>
      <header>
        <ContactNav />
        <MenuBar title="Modern DABA" />
      </header>

      <main>
        {/* Section 1: big plate and  card and text */}
        <section className={styles.topSection}>
          <div className={styles.container}>
            <div className={styles.topGrid}>
              <div className={styles.topImageWrapper}>
                <img
                  className={styles.topImage}
                  src={plateImg}
                  alt="Delicious food on a plate"
                />

                <div className={styles.visitCard}>
                  <h3>Come and visit us</h3>
                  <ul>
                    <li>(414) 857 - 0107</li>
                    <li>happytummy@restaurant.com</li>
                    <li>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</li>
                  </ul>
                </div>
              </div>

              <div className={styles.topText}>
                <h2>We provide healthy food for your family.</h2>
                <p>
                  Our story began with a vision to create a unique dining experience
                  that merges fine dining, exceptional service, and a vibrant
                  ambiance. Rooted in city's rich culinary culture, we aim to honor
                  our local roots while infusing a global palate.
                </p>
                <p>
                  At our place, we believe that dining is not just about food, but
                  also about the overall experience. Our staff, renowned for their
                  warmth and dedication, strives to make every visit an
                  unforgettable event.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: dark hero with play button and text */}
        <section
          className={styles.videoSection}
          style={{ backgroundImage: `url(${darkHeroBg})` }}
        >
          {/* <div className={styles.videoOverlay}>
            <button className={styles.playButton}>
              <span className={styles.playTriangle} />
            </button>

          </div> */}
        </section>

        {/* Section 3: info and statistics and chef image */}
        <section className={styles.infoSection}>
          <div className={styles.container}>
            <div className={styles.infoGrid}>
              <div className={styles.infoText}>
                <h2>A little information for our valuable guest</h2>
                <p>
                  At place, we believe that dining is not just about food but also
                  about the overall experience. Our staff, renowned for their warmth
                  and dedication, strives to make every visit an unforgettable event.
                </p>

                <div className={styles.infoStats}>
                  <div className={styles.infoCard}>
                    <span className={styles.infoNumber}>3</span>
                    <span className={styles.infoLabel}>Locations</span>
                  </div>
                  <div className={styles.infoCard}>
                    <span className={styles.infoNumber}>1995</span>
                    <span className={styles.infoLabel}>Founded</span>
                  </div>
                  <div className={styles.infoCard}>
                    <span className={styles.infoNumber}>65+</span>
                    <span className={styles.infoLabel}>Staff Members</span>
                  </div>
                  <div className={styles.infoCard}>
                    <span className={styles.infoNumber}>100%</span>
                    <span className={styles.infoLabel}>Satisfied Customers</span>
                  </div>
                </div>
              </div>

              <div className={styles.infoImageWrapper}>
                <img
                  className={styles.infoImage}
                  src={chefImg}
                  alt="Chef preparing fresh ingredients"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.container}>
            <h2 className={styles.testimonialTitle}>What Our Customers Say</h2>

            <div className={styles.testimonialGrid}>
              <article className={styles.testimonialCard}>
                <h3>“The best restaurant”</h3>
                <p>
                  Last night, we dined at place and were simply blown away. From the
                  moment we stepped in, we were enveloped in an inviting atmosphere
                  and greeted with warm smiles.
                </p>
                <div className={styles.testimonialFooter}>
                  <div className={styles.avatarCircle}>S</div>
                  <div>
                    <div className={styles.customerName}>Sophile Robson</div>
                    <div className={styles.customerLocation}>Los Angeles, CA</div>
                  </div>
                </div>
              </article>

              <article className={styles.testimonialCard}>
                <h3>“Simply delicious”</h3>
                <p>
                  Place exceeded my expectations on all fronts. The ambiance was cozy
                  and relaxed, making it a perfect venue for our anniversary dinner.
                  Each dish was prepared and beautifully presented.
                </p>
                <div className={styles.testimonialFooter}>
                  <div className={styles.avatarCircle}>M</div>
                  <div>
                    <div className={styles.customerName}>Matt Cannon</div>
                    <div className={styles.customerLocation}>San Diego, CA</div>
                  </div>
                </div>
              </article>

              <article className={styles.testimonialCard}>
                <h3>“One of a kind restaurant”</h3>
                <p>
                  The culinary experience at place is first to none. The atmosphere is
                  vibrant, the food nothing short of extraordinary. The food was the
                  highlight of our evening. Highly recommended.
                </p>
                <div className={styles.testimonialFooter}>
                  <div className={styles.avatarCircle}>A</div>
                  <div>
                    <div className={styles.customerName}>Andy Smith</div>
                    <div className={styles.customerLocation}>San Francisco, CA</div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}