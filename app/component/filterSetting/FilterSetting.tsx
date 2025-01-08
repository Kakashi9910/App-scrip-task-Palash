'use client'
import styles from './FilterSetting.module.css'

export default function FilterSetting({setHideFilter}:{setHideFilter:any}) {

    
    return <div className={styles.filterSetting} >
        <div className={styles.tab}>Item Count</div>
        <div className={styles.hideFilterTab} onClick={()=>setHideFilter((prev:boolean) => !prev) }> <p className={styles.hideFilterTabPara}>Hide Filter</p></div>
        <div className={styles.dropdown} ><button className={styles.dropbtn}>Recommended</button>
            <div className={styles.dropdownContent}>
                <div>Link 1</div>
                <div>Link 2</div>
                <div>Link 3</div>
            </div></div>
    </div>
}