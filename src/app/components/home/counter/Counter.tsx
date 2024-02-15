import { memo } from 'react'
import styles from './counter.module.scss'
import cn from 'classnames'
import { Cabin } from "next/font/google";

const cabin = Cabin({ subsets: ["latin"] });

const Counter = () => {

    return (<div className={styles.background}>
        <div className={styles.counters}>
            <div className={styles.count}>
                <span className={cn(cabin.className, styles.number)}>1128+</span>
                <span className={styles.count_text}>Successful Work</span>
            </div>
            <div className={styles.count}>
                <span className={cn(cabin.className, styles.number)}>908+</span>
                <span className={styles.count_text}>Team member</span>
            </div>
            <div className={styles.count}>
                <span className={cn(cabin.className, styles.number)}>258+</span>
                <span className={styles.count_text}>Happy Customers</span>
            </div>
            <div className={styles.count}>
                <span className={cn(cabin.className, styles.number)}>564+</span>
                <span className={cn(cabin.className, styles.count_text)}>Creative Idea</span>
            </div>
        </div>
    </div>
    )
}

export default memo(Counter)