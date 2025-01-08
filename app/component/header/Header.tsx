import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.upperHeader}>
                <div className={styles.logo}>
                    <div >MyShop</div>
                </div>
                <h1>Logo</h1>
                <div className={styles.actions}>

                    <div className={styles.icons}>
                        {/* <a href="/cart" className={styles.icon}>
                            🛒
                        </a> */}
                        <FontAwesomeIcon icon={faCartShopping}/>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faUser} />
                        <FontAwesomeIcon icon={faHeart} />
{/* 
                        <a href="/profile" className={styles.icon}>
                            👤
                        </a> */}
                    </div>
                </div>
            </div>
            <div className={styles.lowerHeader}>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <div>Products</div>
                        </li>
                        <li>
                            <div>About</div>
                        </li>
                        <li>
                            <div>Contact</div>
                        </li>
                        <li>
                            <div>Contact</div>
                        </li>                        
                        <li>
                            <div>Contact</div>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
