import React from "react";
import { useNavigate } from "react-router-dom";
import ContactNav from "../components/navbar/ContactNav";
import MenuBar from "../components/navbar/MenuBar";
import Footer from "../components/footer/Footer";
import styles from "./Blog.module.css";
import blogm1 from "../assets/blogm1.jpg";
import blogm2 from "../assets/blogm2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";
import blog8 from "../assets/blog8.jpg";
import blog9 from "../assets/blog9.jpg";
import blog10 from "../assets/blog10.jpg";
import blog11 from "../assets/blog11.jpg";
import blog12 from "../assets/blog12.jpg";

const blogPosts = [
  {
    id: 1,
    image: blogm1,
    date: "January 3, 2023",
    title: "How to prepare a delicious gluten free sushi",
  },
  {
    id: 2,
    image: blogm2,
    date: "January 3, 2023",
    title: "Exclusive baking lessons from the pastry king",
  },
  {
    id: 3,
    image: blog3,
    date: "January 3, 2023",
    title: "How to prepare the perfect fries in an air fryer",
  },
  {
    id: 4,
    image: blog4,
    date: "January 3, 2023",
    title: "How to prepare delicious chicken tenders",
  },
  {
    id: 5,
    image: blog5,
    date: "January 3, 2023",
    title: "5 great cooking gadgets you can buy to save time",
  },
  {
    id: 6,
    image: blog6,
    date: "January 3, 2023",
    title: "The secret tips & tricks to prepare a perfect burger",
  },
  {
    id: 7,
    image: blog7,
    date: "January 3, 2023",
    title: "7 delicious cheesecake recipes you can prepare",
  },
  {
    id: 8,
    image: blog8,
    date: "January 3, 2023",
    title: "5 great pizza restaurants you should visit this city",
  },
  {
    id: 9,
    image: blog9,
    date: "January 3, 2023",
    title: "5 great cooking gadgets you can buy to save time",
  },
  {
    id: 10,
    image: blog10,
    date: "January 3, 2023",
    title: "How to prepare a delicious gluten free sushi",
  },
  {
    id: 11,
    image: blog11,
    date: "January 3, 2023",
    title: "Top 20 simple and quick desserts for kids",
  },
  {
    id: 12,
    image: blog12,
    date: "January 3, 2023",
    title: "Top 20 simple and quick desserts for kids",
  },
];

export default function Blog() {
  const navigate = useNavigate();

  const handleArticle = (post) => {
    navigate("/blogs/article", { state: { post } });
  };

  return (
    <div className={styles.blogPage}>
      <header>
        <ContactNav />
        <MenuBar title="Modern DABA" />
      </header>

      <section className={styles.h1}>
        <div className={styles.h1Content}>
          <h1 className={styles.title}>Our Blog & Articles</h1>
          <p className={styles.para}>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
      </section>

          <section className={styles.cards}>      
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className={styles.card}
            onClick={() => handleArticle(post)}
          >
            <div className={styles.cardImage}>
              <img src={post.image} alt={post.title} className={styles.Image} />
            </div>
            <div className={styles.Content}>
              <time className={styles.Date}>{post.date}</time>
              <h2 className={styles.Title}>{post.title}</h2>
            </div>
          </article>
        ))}
      </section>
       <footer className={styles.footer}>
              <Footer />
            </footer>
    </div>
  );
}
