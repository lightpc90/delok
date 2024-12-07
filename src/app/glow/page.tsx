import React from 'react'
import styles from "./glow.module.css"

const Page = () => {
    return (
        <div className='relative'>
            <div className={styles.glow}></div>
            <div className={styles.blurryCircle1}>1</div>
            <div className={styles.blurryCircle2}>2</div>
            <div className={styles.blurryCircle3}>3</div>
        </div>
    )
}

export default Page