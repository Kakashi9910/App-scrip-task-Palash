import styles from './ProductContent.module.css'

export default  function Products ({hideFilter,productData}:{hideFilter:boolean,productData:any}) {
    const style = hideFilter?styles.gridContainerHideFilter:styles.gridContainer

    // console.log(productData)

    return <div className={style}>
        {productData.map((product:any,index:number)=>(
            <div key={index} >
                <img style={{width:'80%',height:'80%'}} src={product.image} alt="" />
                <div>
                    <p className={styles.title}>{product.title}</p>
                    <p>Sign in in or create an account an account to see pricing</p>
                </div>
            </div>
        ))}
    </div>
}



