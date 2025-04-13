import Image from 'next/image'
import styles from './ProductContent.module.css'

export default function Products({ hideFilter, productData }: { hideFilter: boolean, productData: any }) {
    const style = hideFilter ? styles.gridContainerHideFilter : styles.gridContainer


    return <div className={style}>
        {productData.map((product: any, index: number) => (
            <div key={index} >
                <Image
                    src={product.image}
                    alt="product"
                    width={500}  
                    height={500} 
                    style={{ width: '80%', height: 'auto' }}
                />
                <div>
                    <p className={styles.title}>{product.title}</p>
                    <p>Sign in in or create an account an account to see pricing</p>
                </div>
            </div>
        ))}
    </div>
}



