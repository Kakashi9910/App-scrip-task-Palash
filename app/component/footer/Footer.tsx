"use client"

import styles from './footer.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import MobileFooter from './MobileFooter'

export default function Footer() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    const DesktopFooter = () => (
        <div className={styles.footerContainer}>
            <div className={styles.upperSection}>
                <div className={styles.upperLeft}>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettā muse.</p>
                    <div className={styles.subscribeContainer}>
                        <input type="text" placeholder="Enter your e-mail..." className={styles.searchBar}/>
                        <button className={styles.subscribeBtn}>SUBSCRIBE</button>
                    </div>
                </div>
                <div className={styles.upperRight}>
                    <div className={styles.contactInfo}>
                        <h3>CONTACT US</h3>
                        <p>+44 221 133 5360</p>
                        <p>customercare@mettamuse.com</p>
                    </div>
                    <div className={styles.currencyInfo}>
                        <h3>CURRENCY</h3>
                        <div className={styles.currencySelector}>
                            <Image src="/images/flag-united-states-america.jpg" alt="US Flag" width={20} height={15} />
                            <span>USD</span>
                        </div>
                        <p className={styles.currencyNote}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>
            <hr className={styles.hLine}/>
            <div className={styles.lowerSection}>
                <div className={styles.footerColumn}>
                    <h3>mettā muse</h3>
                    <div>
                        <p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliances Docs</p>
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <h3>QUICK LINKS</h3>
                    <div>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <h3>FOLLOW US</h3>
                    <div className={styles.socialIcons}>
                        <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
                        <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
                    </div>
                    <h3 className={styles.paymentTitle}>mettā muse ACCEPTS</h3>
                    <div className={styles.paymentMethods}>
                        <Image src="/images/gpay.png" alt="Google Pay" width={40} height={25} />
                        <Image src="/images/mastercard.png" alt="Mastercard" width={40} height={25} />
                        <Image src="/images/paypal.png" alt="PayPal" width={40} height={25} />
                        <Image src="/images/amex.png" alt="American Express" width={40} height={25} />
                        <Image src="/images/apple-pay.png" alt="Apple Pay" width={40} height={25} />
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
    );



    return isMobile ? <MobileFooter /> : <DesktopFooter />;
}