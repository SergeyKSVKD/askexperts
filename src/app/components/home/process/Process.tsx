import { memo } from 'react'
import styles from './process.module.scss'
import cn from 'classnames'
import { Cabin } from "next/font/google";
import Clients1 from '../../../../../public/clients1.svg'
import Clients2 from '../../../../../public/clients2.svg'
import Clients3 from '../../../../../public/clients3.svg'
import Clients4 from '../../../../../public/clients4.svg'
import Process1 from '../../../../../public/process1.svg'
import Process2 from '../../../../../public/process2.svg'
import Process3 from '../../../../../public/process3.svg'

const cabin = Cabin({ subsets: ["latin"] });

const clients = [
    { img: <Clients1 />, title: 'Consistency', text: 'Podcasting operational change management workflow.' },
    { img: <Clients2 />, title: 'Improvement', text: 'Podcasting operational change management workflow.' },
    { img: <Clients3 />, title: 'Branching', text: 'Podcasting operational change management workflow.' },
    { img: <Clients4 />, title: 'Company Growth', text: 'Podcasting operational change management workflow.' },
]

const process = [
    { img: <Process1 />, title: 'Setup Account', text: 'We understand the importance of approaching each work integrally.' },
    { img: <Process2 />, title: 'Consult with us', text: 'Increase social reach and productivity with our App Directory, a collection.' },
    { img: <Process3 />, title: 'Payment & Boost', text: 'We encourage every team member to be a whole person. We have a flexible.' },
]

const Process = () => {

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <div>
                    <div className={styles.process_container}>
                        <div className={styles.btn}>Process</div>
                        <p className={cn(cabin.className, styles.title)}>There have some easy steps to join with us!</p>
                        <p className={styles.text}>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                    </div>
                    <div className={styles.process_list}>
                        {process.map((item) => {
                            return <div key={item.title} className={styles.process} >
                                {item.img}
                                <div>
                                    <p className={cn(cabin.className, styles.process_title)}>{item.title}</p>
                                    <p className={styles.process_text} >{item.text}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div>
                    <div className={styles.clients_container}>
                        <div className={styles.btn2}>Growing with our clients</div>
                        <p className={cn(cabin.className, styles.title)}>30 Years of Experience</p>
                        <p className={styles.text}>Capitalize on low hanging fruit to identify a ballpark value added activity beta test. Override the digital divide with additional from DevOps. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
                        <div className={styles.clients_list}>
                            {clients.map((item) => {
                                return <div key={item.title} className={styles.card} >
                                    {item.img}
                                    <p className={cn(cabin.className, styles.card_title)}>{item.title}</p>
                                    <p className={styles.card_text} >{item.text}</p>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Process)