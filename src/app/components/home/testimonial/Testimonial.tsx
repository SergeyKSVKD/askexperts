import { memo } from 'react'
import styles from './testimonial.module.scss'
import cn from 'classnames'
import { Cabin } from "next/font/google";
import Avatar from '../../../../../public/avatar.jpg'
import Image from 'next/image';
import Arrow from '../../../../../public/arrow.svg'

const cabin = Cabin({ subsets: ["latin"] });

const Testimonial = () => {

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.btn}>Client Feedback</div>
                <p className={cn(cabin.className, styles.quote)}>
                    “Lorem ipsum dolor sit amet, consectetur <span>adipiscing elit, sed do eiusmod</span> tempor incididunt ut labore et dolore”
                </p>
                <div className={styles.user}>
                    <div className={cn(styles.arrow, styles.prev)}><Arrow /> Prev</div>
                    <div className={styles.avatar}>
                        <Image src={Avatar} alt='avatar' />
                        <div className={styles.name}>
                            <p className={cn(cabin.className, styles.name_text)}>Kathleen Smith</p>
                            <p className={styles.professions}>Web Designer</p>
                        </div>
                    </div>
                    <div className={cn(styles.arrow, styles.next)}>Next <Arrow /></div>
                </div>
            </div>
        </div>
    )
}

export default memo(Testimonial)