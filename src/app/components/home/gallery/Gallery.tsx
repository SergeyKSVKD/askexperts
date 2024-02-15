import { memo } from 'react'
import styles from './galery.module.scss'
import cn from 'classnames'
import { Cabin } from "next/font/google";
import Shapes from '../../../../../public/galery_shapes.svg'
import Button from '../../button/Button';
import Plus from '../../../../../public/Plus.svg'
import Gallery1 from '../../../../../public/gallery1.jpg'
import Gallery2 from '../../../../../public/gallery2.jpg'
import Gallery3 from '../../../../../public/gallery3.jpg'
import Gallery4 from '../../../../../public/gallery4.jpg'
import Gallery5 from '../../../../../public/gallery5.jpg'
import Gallery6 from '../../../../../public/gallery6.jpg'
import Image from 'next/image';

const cabin = Cabin({ subsets: ["latin"] });

const Galery = () => {

    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Shapes />
                <div className={styles.top_container}>
                    <div>
                        <div className={styles.btn}>Process</div>
                        <p className={cn(cabin.className, styles.title)}>Our client, global analytical techno company, wanted to build market.</p>
                    </div>
                    <div className={styles.btn_container}>
                        <Button text='More Gallery' color='primary_01' textColor='primary_03' padding='without_icon' />
                    </div>
                    <div className={styles.image_container}>
                        <Image src={Gallery1} alt='gallery1' className={cn(styles.card, styles.position)} />
                        <Image src={Gallery2} alt='gallery2' className={styles.card} />
                        <Image src={Gallery3} alt='gallery3' className={styles.card} />
                        <Image src={Gallery4} alt='gallery4' className={styles.card} />
                        <Image src={Gallery5} alt='gallery5' className={styles.card} />
                        <Image src={Gallery6} alt='gallery6' className={styles.card} />
                    </div>
                    <Plus className={styles.plus} />
                    <div className={styles.plus_container}>
                        <p className={cn(cabin.className, styles.plus_title)}>Taxes & Efficiency</p>
                        <p className={styles.plus_text}>Business</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Galery)