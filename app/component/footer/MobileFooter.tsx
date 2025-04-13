import styles from './mobileFooter.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function MobileFooter() {
    const [openSections, setOpenSections] = useState({
        mettaMuse: false,
        quickLinks: false,
        followUs: false
    });

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };
   return (
        <div className={styles.mobileContainer}>
            <div className={styles.mobileUpperSection}>
                <div className={styles.mobileSection}>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className={styles.mobileSubscribe}>
                        <input type="text" placeholder="Enter your e-mail..." />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
    
                <div className={styles.mobileSection}>
                    <h3>CALL US</h3>
                    <p>+44 221 133 5360 • customercare@mettamuse.com</p>
                </div>
    
                <div className={styles.mobileSection}>
                    <h3>CURRENCY</h3>
                    <div className={styles.mobileCurrency}>
                        <Image src="/images/flag-united-states-america.jpg" alt="US Flag" width={20} height={15} />
                        <span>USD</span>
                    </div>
                </div>
            </div>
    
            <div className={styles.mobileAccordion}>
                <div className={styles.accordionItem}>
                    <div 
                        className={styles.accordionHeader} 
                        onClick={() => toggleSection('mettaMuse')}
                    >
                        <h3>mettā muse</h3>
                        <span className={openSections.mettaMuse ? styles.arrowUp : styles.arrowDown}>▼</span>
                    </div>
                    <div className={`${styles.accordionContent} ${openSections.mettaMuse ? styles.open : ''}`}>
                        <p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliances Docs</p>
                    </div>
                </div>
    
                <div className={styles.accordionItem}>
                    <div 
                        className={styles.accordionHeader} 
                        onClick={() => toggleSection('quickLinks')}
                    >
                        <h3>QUICK LINKS</h3>
                        <span className={openSections.quickLinks ? styles.arrowUp : styles.arrowDown}>▼</span>
                    </div>
                    <div className={`${styles.accordionContent} ${openSections.quickLinks ? styles.open : ''}`}>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
    
                <div className={styles.accordionItem}>
                    <div 
                        className={styles.accordionHeader} 
                        onClick={() => toggleSection('followUs')}
                    >
                        <h3>FOLLOW US</h3>
                        <span className={openSections.followUs ? styles.arrowUp : styles.arrowDown}>▼</span>
                    </div>
                    <div className={`${styles.accordionContent} ${openSections.followUs ? styles.open : ''}`}>
                        <div className={styles.socialIcons}>
                            <Image src="/images/instagram.png" alt="Instagram" width={24} height={24} />
                            <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
                        </div>
                    </div>
                </div>
            </div>
    
            <div className={styles.mobilePayments}>
                <h3>mettā muse ACCEPTS</h3>
                <div className={styles.paymentIcons}>
                    <Image src="/images/gpay.png" alt="Google Pay" width={40} height={25} />
                    <Image src="/images/mastercard.png" alt="Mastercard" width={40} height={25} />
                    <Image src="/images/paypal.png" alt="PayPal" width={40} height={25} />
                    <Image src="/images/amex.png" alt="American Express" width={40} height={25} />
                    <Image src="/images/apple-pay.png" alt="Apple Pay" width={40} height={25} />
                    <Image src="/images/shop-pay.png" alt="Shop Pay" width={40} height={25} />
                </div>
            </div>
    
            <div className={styles.copyright}>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
    );
}