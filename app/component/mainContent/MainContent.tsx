'use client'
import FilterSetting from "../filterSetting/FilterSetting";
import styles from './MainContent.module.css'
import Filters from "../filters/Filters";
import Products from "../products/ProductsContent";
import { useState } from "react";
export default function MainContent ({productData}:{productData:any}) {

    const [hideFilter,setHideFilter] = useState<boolean>(false)
    const style = hideFilter?styles.gridContainerHideFilter:styles.gridContainer
    console.log(hideFilter)
    return <div className={style}>
        <FilterSetting setHideFilter={setHideFilter}/>
        <Filters/>
        <Products productData={productData} hideFilter={hideFilter}/>
    </div>
}