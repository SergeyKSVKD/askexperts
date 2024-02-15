import { memo } from 'react'
import styles from './banner.module.scss'
import cn from 'classnames'
import Image from 'next/image'
import banner from '../../../../../public/Banner.jpg'
import { Cabin } from "next/font/google";
import Book from '../../../../../public/book-icon.svg'
import Button from '../../button/Button'

const cabin = Cabin({ subsets: ["latin"] });

const Banner = () => {

    return (<div className={styles.container}>
        <Image src={banner}
            fill
            alt='banner'
            style={{ objectFit: "cover" }}
        />
        <div className={styles.display}>
            <p className={cn(cabin.className, styles.top)}>Your small business growth advisors</p>
            <p className={styles.text}>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</p>
            <div className={styles.button_container}>
                <Button text='Our Services' textColor='white' color='black' />
                <Button text='Book a Meeting' icon={<Book />} padding='with_icon'/>
            </div>
        </div>
    </div>)
}

export default memo(Banner)