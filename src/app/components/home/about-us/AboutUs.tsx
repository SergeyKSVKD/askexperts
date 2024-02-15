import { memo } from 'react'
import styles from './aboutus.module.scss'
import cn from 'classnames'
import { Cabin } from "next/font/google";
import Star from '../../../../../public/Star.svg'
import Smile from '../../../../../public/Smile.svg'
import Image from 'next/image';
import Photo from '../../../../../public/Photo.jpg'
import Shapes from '../../../../../public/Pattern.svg'
import Dotted from '../../../../../public/Ellipse 11.svg'
import Ring from '../../../../../public/Ellipse 9.svg'
import Progress from '../../../../../public/Ellipse 10.svg'

const cabin = Cabin({ subsets: ["latin"] });

const AboutUs = () => {

    return (<div className={styles.background}>
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.content_top}>
                    <div className={styles.btn}>ABOUT US</div>
                    <span className={cn(cabin.className, styles.top_text)}>About our Consuting Agency Team</span>
                </div>
                <div className={styles.content_bottom}>
                    <span>We create experiences and build products that make business grow</span>
                    <span>Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.</span>
                </div>
                <div className={styles.counter}>
                    <div className={styles.count}>
                        <div className={styles.star_container}>
                            <Star />
                            <span className={cn(cabin.className, styles.number)}>400+</span>
                        </div>
                        <span className={styles.count_text}>Business Services</span>
                    </div>
                    <div className={styles.count}>
                        <div className={styles.star_container}>
                            <Smile />
                            <span className={cn(cabin.className, styles.number)}>100+</span>
                        </div>
                        <span className={styles.count_text}>Happy Customer</span>
                    </div>
                    <div className={styles.line} />
                </div>
            </div>
            <div className={styles.image}>
                <div className={styles.image_container}>
                    <Image src={Photo} alt='photo' />
                </div>
                <Shapes className={styles.shapes} />
                <div className={styles.market_place}>
                    <div className={styles.ellipse_container}>
                        <div className={styles.ellipse}>
                            <Dotted className={styles.dotted} />
                            <Progress className={styles.progress} />
                            <Ring className={styles.ring} />
                            <span className={cn(cabin.className, styles.number, styles.position)}>50+</span>
                        </div>
                        <span className={styles.ellipse_text}>Market Experiences</span>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default memo(AboutUs)