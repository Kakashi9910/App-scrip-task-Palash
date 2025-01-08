'use client'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Filters.module.css'
import { useState } from 'react';


export default function Filters() {
    const [activeDropdowns, setActiveDropdowns] = useState<number[]>([]);

    function toggleDropdown(index: number) {
        setActiveDropdowns((prevState: any) => {
            if (prevState.includes(index)) {
                // Remove the index if it's already active (close it)
                return prevState.filter((item: number) => item !== index);
            } else {
                // Otherwise, add the index to open the dropdown
                return [...prevState, index];
            }
        })
    }
    return (
        <div className={styles.sidenav}>
            {/* <a href="#about">About</a> */}
            <div style={{display:'flex',alignItems:'center'}}>
            <button className={`${styles.dropdownBtn} ${activeDropdowns.includes(2) ? styles.active : ""}`}
                onClick={() => toggleDropdown(2)}>
                Ideal for
                {/* <i className="fa fa-caret-down"></i> */}

            </button>
            <span >
                    <FontAwesomeIcon icon={faCaretDown} />
            </span>
            </div>

            {activeDropdowns.includes(2) && (
                <div className={styles.dropdownContainer}>
                    <a href="#">All</a>
                    <a href="#">Men</a>
                    <a href="#">Women</a>
                    <a href="#">Baby & Kids</a>
                </div>
            )}
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>

            {/* Dropdown 1 */}
            
            <button
                className={`${styles.dropdownBtn} ${activeDropdowns.includes(0) ? styles.active : ""}`}
                onClick={() => toggleDropdown(0)}
            >
                Category
                <span style={{ marginLeft: '70%' }}>
                    <FontAwesomeIcon icon={faCaretDown} />
                </span>
            </button>
            {activeDropdowns.includes(0) && (
                <div className={styles.dropdownContainer}>
                    <a href="#">Electronics</a>
                    <a href="#">Fashion</a>
                    <a href="#">Home Appliances</a>
                </div>
            )}

            {/* Dropdown 2 */}
            <button
                className={`${styles.dropdownBtn} ${activeDropdowns.includes(1) ? styles.active : ""}`}
                onClick={() => toggleDropdown(1)}
            >
                Price
                <span style={{marginLeft:'70%'}}>
                <FontAwesomeIcon  icon={faCaretDown}/>
                </span>
            </button>
            {activeDropdowns.includes(1) && (
                <div className={styles.dropdownContainer}>
                    <a href="#">$0 - $50</a>
                    <a href="#">$50 - $100</a>
                    <a href="#">$100 - $500</a>
                </div>
            )}

            {/* Dropdown 3 */}
            <button
                className={`${styles.dropdownBtn} ${activeDropdowns.includes(2) ? styles.active : ""}`}
                onClick={() => toggleDropdown(2)}
            >
                Brand
                <span style={{marginLeft:'70%'}}>
                <FontAwesomeIcon  icon={faCaretDown}/>
                </span>
            </button>
            {activeDropdowns.includes(2) && (
                <div className={styles.dropdownContainer}>
                    <a href="#">Brand A</a>
                    <a href="#">Brand B</a>
                    <a href="#">Brand C</a>
                </div>
            )}

            <a href="#contact">Search</a>
        </div>
    );
}
