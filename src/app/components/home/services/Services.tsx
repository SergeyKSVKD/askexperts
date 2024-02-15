import { memo } from 'react'
import styles from './services.module.scss'
import cn from 'classnames'
import { Cabin } from "next/font/google";
import Service1 from '../../../../../public/service1.svg'
import Service2 from '../../../../../public/service2.svg'
import Service3 from '../../../../../public/service3.svg'
import Service4 from '../../../../../public/service4.svg'
import Service5 from '../../../../../public/service5.svg'
import Service6 from '../../../../../public/service6.svg'

const cabin = Cabin({ subsets: ["latin"] });

const services = [
    {
        img: <Service1 />, title: 'Audit & Evaluation', text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
        img: <Service2 />, title: 'Financial Projections', text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.', theme: 'black'
    },
    {
        img: <Service3 />, title: 'Funds and investments', text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
        img: <Service4 />, title: 'Finance & Restructuring', text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
        img: <Service5 />, title: 'Taxes & Efficiency', text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
    {
        img: <Service6 />, title: 'Investment banking', text: 'Get help from Alex Moore, a professional business coach with advanced experience on growth and business scaling.',
    },
]

const Services = () => {

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div className={styles.btn}>Services</div>
                <p className={cn(cabin.className, styles.title)}>Get Control Over Your Business I take your finance to next level</p>
                <div className={styles.services_list}>
                    {services.map((item) => {
                        return <div key={item.title} className={styles.card} style={item.theme && item.theme === 'black' ? { background: 'var(--primary_03)' } : {}}>
                            {item.img}
                            <p className={cn(cabin.className, styles.card_title)} style={item.theme && item.theme === 'black' ? { color: 'var(--secondary_02)' } : {}}>{item.title}</p>
                            <p className={styles.card_text} style={item.theme && item.theme === 'black' ? { color: 'var(--secondary_02)' } : {}}>{item.text}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default memo(Services)