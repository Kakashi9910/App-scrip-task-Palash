'use client'
import styles from './FilterSetting.module.css'

export default function FilterSetting({setHideFilter}:{setHideFilter:any}) {

    
    return <div className={styles.filterSetting} >
        <div className={styles.tab}>Item Count</div>
        <div className={styles.hideFilterTab} onClick={()=>setHideFilter((prev:boolean) => !prev) }> <p className={styles.hideFilterTabPara}>Hide Filter</p></div>
        <div className={styles.dropdown} ><button className={styles.dropbtn}>Recommended</button>
            <div className={styles.dropdownContent}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div></div>
    </div>
}