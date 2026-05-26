import React from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer'

import ContactNav from '../components/navbar/ContactNav'
import MenuBar from '../components/navbar/MenuBar'
import styles from './Home.module.css'
import heroBg from '../assets/HomeImage1.png'
import aboutSectionImage from '../assets/HomeImage2.png'
import eventCatering from '../assets/HomeImage3.png'
import eventBirthday from '../assets/HomeImage4.png'
import eventWedding from '../assets/HomeImage5.png'
import eventEvents from '../assets/HomeImage6.png'
import deliveryChef from '../assets/HomeImage7.png'
import deliveryFood1 from '../assets/HomeImage8.png'
import deliveryFood2 from '../assets/HomeImage9.png'
import person1 from '../assets/HomeImage10.png'
import person2 from '../assets/HomeImage11.png'
import person3 from '../assets/HomeImage12.png'
import HomeImage13 from '../assets/HomeImage13.png'
import HomeImage14 from '../assets/HomeImage14.png'
import HomeImage15 from '../assets/HomeImage15.png'
import HomeImage16 from '../assets/HomeImage16.png'
import HomeImage17 from '../assets/HomeImage17.png'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import CakeIcon from '@mui/icons-material/Cake';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <ContactNav />
        <MenuBar title="Modern DABA" />
      </header>

      <main>
        <section
          className={styles.hero}
          style={{ backgroundImage: `url(${heroBg})` }}
          aria-label="Hero"
        >
          <div className={styles.heroInner}>
            <h1 className={styles.heroTitle}>
              Best food for
              <br />
              your taste
            </h1>
            <p className={styles.heroSubtitle}>
              Discover delectable cuisine and unforgettable moments
              <br />
              in our welcoming, culinary haven.
            </p>
            <div className={styles.heroActions}>
              <button type="button" className={`${styles.heroBtn} ${styles.primary}`} onClick={() => navigate('/book-table')}>
                Book A Table
              </button>
              <button type="button" className={`${styles.heroBtn} ${styles.secondary}`} onClick={() => navigate('/menu')}>
                Explore Menu
              </button>
            </div>
          </div>
        </section>

        <section className={styles.menuSection} aria-label="Browse Our Menu">
          <h2 className={styles.menuSectionTitle}>Browse Our Menu</h2>
          <div className={styles.menuCards}>
            <div className={styles.menuCard}>
              <div className={styles.menuCardIcon}>
                <FreeBreakfastIcon />
              </div>
              <h3 className={styles.menuCardTitle}>Breakfast</h3>
              <p className={styles.menuCardDescription}>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <Link to='/menu' className={styles.menuCardLink}>Explore Menu</Link>
            </div>

            <div className={styles.menuCard}>
              <div className={styles.menuCardIcon}>
                <LocalDiningIcon />
              </div>
              <h3 className={styles.menuCardTitle}>Main Dishes</h3>
              <p className={styles.menuCardDescription}>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <Link to='/menu' className={styles.menuCardLink}>Explore Menu</Link>
            </div>

            <div className={styles.menuCard}>
              <div className={styles.menuCardIcon}>
                <LocalDrinkIcon />
              </div>
              <h3 className={styles.menuCardTitle}>Drinks</h3>
              <p className={styles.menuCardDescription}>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <Link to='/menu' className={styles.menuCardLink}>Explore Menu</Link>
            </div>

            <div className={styles.menuCard}>
              <div className={styles.menuCardIcon}>
                <CakeIcon />
              </div>
              <h3 className={styles.menuCardTitle}>Desserts</h3>
              <p className={styles.menuCardDescription}>
                In the new era of technology we look in the future with certainty and pride for our life.
              </p>
              <Link to='/menu' className={styles.menuCardLink}>Explore Menu</Link>
            </div>
          </div>
        </section>

        <section className={styles.aboutSection} aria-label="About us">
          <div className={styles.aboutInner}>
            <div className={styles.aboutImageWrap}>
              <img
                src={aboutSectionImage}
                alt="Fresh food at our restaurant"
                className={styles.aboutImage}
              />
              <div className={styles.contactCard}>
                <h3 className={styles.contactCardTitle}>Come and visit us</h3>
                <div className={styles.contactCardItem}>
                  <PhoneIcon className={styles.contactCardIcon} aria-hidden />
                  <span>(414) 857 - 0107</span>
                </div>
                <div className={styles.contactCardItem}>
                  <EmailIcon className={styles.contactCardIcon} aria-hidden />
                  <span>happytummy@restaurant.com</span>
                </div>
                <div className={styles.contactCardItem}>
                  <LocationOnIcon className={styles.contactCardIcon} aria-hidden />
                  <span>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>
                We provide healthy food for your family.
              </h2>
              <p className={styles.aboutParagraph}>
                Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.
              </p>
              <p className={styles.aboutParagraph2}>
                At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
              </p>
              <Link to="/about" className={styles.aboutBtn}>
                More About Us
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.eventsSection} aria-label="Services for your events">
          <h2 className={styles.eventsSectionTitle}>
            We also offer unique
            <br />
            services for your events
          </h2>
          <div className={styles.eventsCards}>
            <article className={styles.eventsCard}>
              <div className={styles.eventsCardImageWrap}>
                <img
                  src={eventCatering}
                  alt="Catering service - appetizers and small plates"
                  className={styles.eventsCardImage}
                />
              </div>
              <h3 className={styles.eventsCardTitle}>Caterings</h3>
              <p className={styles.eventsCardDescription}>
                In the new era of technology we look in the future with certainty for life.
              </p>
            </article>
            <article className={styles.eventsCard}>
              <div className={styles.eventsCardImageWrap}>
                <img
                  src={eventBirthday}
                  alt="Birthday celebrations"
                  className={styles.eventsCardImage}
                />
              </div>
              <h3 className={styles.eventsCardTitle}>Birthdays</h3>
              <p className={styles.eventsCardDescription}>
                In the new era of technology we look in the future with certainty for life.
              </p>
            </article>
            <article className={styles.eventsCard}>
              <div className={styles.eventsCardImageWrap}>
                <img
                  src={eventWedding}
                  alt="Wedding celebrations"
                  className={styles.eventsCardImage}
                />
              </div>
              <h3 className={styles.eventsCardTitle}>Weddings</h3>
              <p className={styles.eventsCardDescription}>
                In the new era of technology we look in the future with certainty for life.
              </p>
            </article>
            <article className={styles.eventsCard}>
              <div className={styles.eventsCardImageWrap}>
                <img
                  src={eventEvents}
                  alt="Private and corporate events"
                  className={styles.eventsCardImage}
                />
              </div>
              <h3 className={styles.eventsCardTitle}>Events</h3>
              <p className={styles.eventsCardDescription}>
                In the new era of technology we look in the future with certainty for life.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.deliverySection} aria-label="Food delivery">
          <div className={styles.deliveryInner}>
            <div className={styles.deliveryChefWrap}>
              <img
                src={deliveryChef}
                alt="Chef preparing your order"
                className={styles.deliveryChefImage}
              />
            </div>
            <div className={styles.deliveryImagesWrap}>
              <div className={styles.deliveryFoodImageWrap}>
                <img
                  src={deliveryFood1}
                  alt="Fresh dishes from our kitchen"
                  className={styles.deliveryFoodImage}
                />
              </div>
              <div className={styles.deliveryFoodImageWrap}>
                <img
                  src={deliveryFood2}
                  alt="Grilled specialties"
                  className={styles.deliveryFoodImage}
                />
              </div>
            </div>
            <div className={styles.deliveryContent}>
              <h2 className={styles.deliveryTitle}>
                Fastest Food Delivery in City
              </h2>
              <p className={styles.deliveryDescription}>
                Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop.
              </p>
              <ul className={styles.deliveryFeatures}>
                <li className={styles.deliveryFeature}>
                  <span className={styles.deliveryFeatureIcon} aria-hidden>
                    <AccessTimeIcon />
                  </span>
                  <span>Delivery within 30 minutes</span>
                </li>
                <li className={styles.deliveryFeature}>
                  <span className={styles.deliveryFeatureIcon} aria-hidden>
                    <LocalOfferIcon />
                  </span>
                  <span>Best Offer & Prices</span>
                </li>
                <li className={styles.deliveryFeature}>
                  <span className={styles.deliveryFeatureIcon} aria-hidden>
                    <ShoppingCartIcon />
                  </span>
                  <span>Online Services Available</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.testimonialsSection} aria-label="What our customers say">
          <h2 className={styles.testimonialsTitle}>What Our Customers Say</h2>
          <div className={styles.testimonialsCards}>
            <article className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"The best restaurant"</p>
              <p className={styles.testimonialBody}>
                I had an amazing experience dining here. The food was fresh, the service was impeccable, and the atmosphere was perfect for a special evening out.
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} aria-hidden>
                  <img src={person1} alt="" className={styles.testimonialAvatarImage} />
                </div>
                <div className={styles.testimonialAuthorInfo}>
                  <span className={styles.testimonialName}>Sophire Robson</span>
                  <span className={styles.testimonialLocation}>Los Angeles, CA</span>
                </div>
              </div>
            </article>
            <article className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"Simply delicious"</p>
              <p className={styles.testimonialBody}>
                Every dish we tried was outstanding. From the appetizers to the desserts, the quality and flavor were consistently excellent. We will definitely be back.
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} aria-hidden>
                  <img src={person2} alt="" className={styles.testimonialAvatarImage} />
                </div>
                <div className={styles.testimonialAuthorInfo}>
                  <span className={styles.testimonialName}>Matt Cannon</span>
                  <span className={styles.testimonialLocation}>San Diego, CA</span>
                </div>
              </div>
            </article>
            <article className={styles.testimonialCard}>
              <p className={styles.testimonialQuote}>"One of a kind restaurant"</p>
              <p className={styles.testimonialBody}>
                This place stands out from the rest. The unique menu, attentive staff, and cozy ambiance make it our go-to spot for family dinners and celebrations.
              </p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar} aria-hidden>
                  <img src={person3} alt="" className={styles.testimonialAvatarImage} />
                </div>
                <div className={styles.testimonialAuthorInfo}>
                  <span className={styles.testimonialName}>Andy Smith</span>
                  <span className={styles.testimonialLocation}>San Francisco, CA</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.blogSection} aria-label="Our Blog & Articles">
          <div className={styles.blogHeader}>
            <h2 className={styles.blogTitle}>Our Blog & Articles</h2>
            <button type="button" className={styles.blogReadAllBtn} onClick={() => navigate('/blogs')}>
              Read All Articles
            </button>
          </div>
          <div className={styles.blogGrid}>
            <article className={styles.blogFeaturedCard}>
              <div className={styles.blogCardImageWrap}>
                <img
                  src={HomeImage13}
                  alt="Double cheeseburger on wooden surface"
                  className={styles.blogCardImage}
                />
              </div>
              <div className={styles.blogCardContent}>
                <time className={styles.blogDate} dateTime="2023-01-03">
                  January 3, 2023
                </time>
                <h3 className={styles.blogCardTitle}>
                  The secret tips & tricks to prepare a perfect burger & pizza for our customers
                </h3>
                <p className={styles.blogExcerpt}>
                  Lorem ipsum dolor sit amet consectetur of a adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas.
                </p>
              </div>
            </article>
            <div className={styles.blogSmallCards}>
              <article className={styles.blogSmallCard}>
                <div className={styles.blogSmallCardImageWrap}>
                  <img
                    src={HomeImage14}
                    alt="French fries in an air fryer"
                    className={styles.blogCardImage}
                  />
                </div>
                <div className={styles.blogCardContent}>
                  <time className={styles.blogDate} dateTime="2023-01-03">
                    January 3, 2023
                  </time>
                  <h3 className={styles.blogSmallCardTitle}>
                    How to prepare the perfect french fries in an air fryer
                  </h3>
                </div>
              </article>
              <article className={styles.blogSmallCard}>
                <div className={styles.blogSmallCardImageWrap}>
                  <img
                    src={HomeImage15}
                    alt="Chicken tenders with soda"
                    className={styles.blogCardImage}
                  />
                </div>
                <div className={styles.blogCardContent}>
                  <time className={styles.blogDate} dateTime="2023-01-03">
                    January 3, 2023
                  </time>
                  <h3 className={styles.blogSmallCardTitle}>
                    How to prepare delicious chicken tenders
                  </h3>
                </div>
              </article>
              <article className={styles.blogSmallCard}>
                <div className={styles.blogSmallCardImageWrap}>
                  <img
                    src={HomeImage16}
                    alt="Cheesecake recipes"
                    className={styles.blogCardImage}
                  />
                </div>
                <div className={styles.blogCardContent}>
                  <time className={styles.blogDate} dateTime="2023-01-03">
                    January 3, 2023
                  </time>
                  <h3 className={styles.blogSmallCardTitle}>
                    7 delicious cheesecake recipes you can prepare
                  </h3>
                </div>
              </article>
              <article className={styles.blogSmallCard}>
                <div className={styles.blogSmallCardImageWrap}>
                  <img
                    src={HomeImage17}
                    alt="Pizza at a restaurant"
                    className={styles.blogCardImage}
                  />
                </div>
                <div className={styles.blogCardContent}>
                  <time className={styles.blogDate} dateTime="2023-01-03">
                    January 3, 2023
                  </time>
                  <h3 className={styles.blogSmallCardTitle}>
                    5 great pizza restaurants you should visit this city
                  </h3>
                </div>
              </article>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  )
}
