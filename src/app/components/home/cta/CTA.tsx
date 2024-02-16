import { memo } from 'react'
import styles from './cta.module.scss'
import cn from 'classnames'
import { Cabin } from "next/font/google";
import Button from '../../button/Button';
import Phone from '../../../../../public/phone.svg'
import CTA1 from '../../../../../public/cta1.jpg'
import CTA2 from '../../../../../public/cta2.jpg'
import CTA3 from '../../../../../public/cta3.jpg'
import Shapes from '../../../../../public/cta-shapes.svg'
import Image from 'next/image';

const cabin = Cabin({ subsets: ["latin"] });

const CTA = () => {

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.content_container}>
                    <div className={styles.btn}>Book Now</div>
                    <p className={cn(cabin.className, styles.title)}>Better Consult, <span>Better</span> Results</p>
                    <p className={styles.text}>Our software development agency has a growth up to 30% per each year. If you are result-oriented, not afraid to take initiative – drop us a note and join our team!</p>
                    <Button style={{ height: '61px', padding: '16px 21px', marginTop: '20px' }} icon={<Phone />} text='+800 1234 654' color='primary_01' textColor='primary_03' padding='with_icon' />
                </div>
                <div className={styles.image_container}>
                    <Shapes className={styles.shapes} />
                    <div className={styles.green_shapes}></div>
                    <Image src={CTA1} alt='cta' className={styles.cta1} />
                    <Image src={CTA2} alt='cta' className={styles.cta2} />
                    <Image src={CTA3} alt='cta' className={styles.cta3} />
                </div>
            </div>
        </div>
    )
}

export default memo(CTA)