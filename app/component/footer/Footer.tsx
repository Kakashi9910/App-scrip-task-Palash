import styles from './footer.module.css'


export default function Footer() {
    return <div className={styles.footerContainer}>
        <div className={styles.upperSection}>
            <div className={styles.upperLeft}>
                <h3>Be the first to know</h3>
                <p>Sign up for updates from mettā muse.</p>
                <div>
                    <input type="text" className={styles.searchBar}/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className={styles.upperRight}>
                <div>
                    <h3>Contact Us</h3>
                    <p>1231024812038</p>
                    <p>customercare@mettamuse.com</p>
                </div>
                <div>
                    <h3>Currency</h3>
                    <p>USD</p>
                    <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>
            </div>
        </div>
        <hr className={styles.hLine}/>
        <div className={styles.lowerSection}>
            <div>
                <h3>mettā muse</h3>
                <div>
                    <p>About us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliance docs</p>
                </div>
            </div>
            <div>
            <h3>mettā muse</h3>
                <div>
                    <p>About us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliance docs</p>
                </div>
            </div>
            <div>
            <h3>mettā muse</h3>
                <div>
                    <p>About us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>EU Compliance docs</p>
                </div>
            </div>
        </div>
    </div>
}