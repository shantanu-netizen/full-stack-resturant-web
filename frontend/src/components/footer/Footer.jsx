import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

import logo from "../../assets/logo.png"
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'

import footerImage1 from '../../assets/FooterImage1.png'
import footerImage2 from '../../assets/FooterImage2.png'
import footerImage3 from '../../assets/FooterImage3.png'
import footerImage4 from '../../assets/FooterImage4.png'

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Footer">
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <img src={logo} className={styles.brandIcon} aria-hidden />
            <span className={styles.brandName}>Modern DABA</span>
          </div>

          <p className={styles.brandDescription}>
            In the new era of technology we look in the future with certainty and pride
            for our company and.
          </p>

          <div className={styles.social}>
            <a className={styles.socialLink} href="#" aria-label="Twitter">
              <TwitterIcon fontSize="small" />
            </a>
            <a className={styles.socialLink} href="#" aria-label="Facebook">
              <FacebookIcon fontSize="small" />
            </a>
            <a className={styles.socialLink} href="#" aria-label="Instagram">
              <InstagramIcon fontSize="small" />
            </a>
            <a className={styles.socialLink} href="#" aria-label="Pinterest">
              <PinterestIcon fontSize="small" />
            </a>
          </div>
        </div>

        <nav className={styles.linksCol} aria-label="Pages">
          <h3 className={styles.colTitle}>Pages</h3>
          <ul className={styles.linkList}>
            <li><Link className={styles.footerLink} to="/">Home</Link></li>
            <li><Link className={styles.footerLink} to="/about">About</Link></li>
            <li><Link className={styles.footerLink} to="/menu">Menu</Link></li>
            <li><Link className={styles.footerLink} to="/pricing">Pricing</Link></li>
            <li><Link className={styles.footerLink} to="/blogs">Blog</Link></li>
            <li><Link className={styles.footerLink} to="/contact">Contact</Link></li>
            <li><Link className={styles.footerLink} to="/delivery">Delivery</Link></li>
          </ul>
        </nav>

        <nav className={styles.linksCol} aria-label="Utility Pages">
          <h3 className={styles.colTitle}>Utility Pages</h3>
          <ul className={styles.linkList}>
            <li><a className={styles.footerLink} href="#">Start Here</a></li>
            <li><a className={styles.footerLink} href="#">Styleguide</a></li>
            <li><a className={styles.footerLink} href="#">Password Protected</a></li>
            <li><a className={styles.footerLink} href="#">404 Not Found</a></li>
            <li><a className={styles.footerLink} href="#">Licenses</a></li>
            <li><a className={styles.footerLink} href="#">Changelog</a></li>
            <li><a className={styles.footerLink} href="#">View More</a></li>
          </ul>
        </nav>

        <div className={styles.instaCol}>
          <h3 className={styles.colTitle}>Follow Us On Instagram</h3>
          <div className={styles.instaGrid}>
            <a className={styles.instaItem} href="#" aria-label="Instagram post 1">
              <img className={styles.instaImg} src={footerImage1} alt="" />
            </a>
            <a className={styles.instaItem} href="#" aria-label="Instagram post 2">
              <img className={styles.instaImg} src={footerImage2} alt="" />
            </a>
            <a className={styles.instaItem} href="#" aria-label="Instagram post 3">
              <img className={styles.instaImg} src={footerImage3} alt="" />
            </a>
            <a className={styles.instaItem} href="#" aria-label="Instagram post 4">
              <img className={styles.instaImg} src={footerImage4} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          Copyright © 2026 Hashtag Developer. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
