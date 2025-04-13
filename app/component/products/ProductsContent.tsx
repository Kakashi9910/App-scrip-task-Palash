import Image from 'next/image'
import styles from './ProductContent.module.css'

export default function Products({ hideFilter, productData }: { hideFilter: boolean, productData: any }) {
    const style = hideFilter ? styles.gridContainerHideFilter : styles.gridContainer


    return <div className={style}>
        {productData.map((product: any, index: number) => (

            <div key={index} className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt="product"
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 300px, 400px"
                    className={styles.productImage}
                />
            </div>
            <div className={styles.productInfo}>
                <p className={styles.title}>{product.title}</p>
                <p className={styles.signInText}>Sign in or create an account to see pricing</p>
            </div>
        </div>

        ))}
    </div>
}



