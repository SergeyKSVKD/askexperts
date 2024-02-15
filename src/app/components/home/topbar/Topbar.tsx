'use client'

import { memo } from 'react'
import styles from './topbar.module.scss'
import Clock from '../../../../../public/clock-icon.svg'
import Marker from '../../../../../public/marker-icon.svg'
import Instagram from '../../../../../public/Instagram.svg'
import Facebook from '../../../../../public/Facebook.svg'
import Twitter from '../../../../../public/Twitter.svg'
import LinkedIn from '../../../../../public/Linked-In.svg'

const Topbar = () => {

    return (
        <div className={styles.container}>
            <div className={styles.time}>
                <Clock />
                <span>Monday - Friday 8AM - 9PM</span>
            </div>
            <div className={styles.location}>
                <Marker />
                <span>725 Park Ave, New York</span>
            </div>
            <div className={styles.follow}>
                <Instagram />
                <Facebook />
                <Twitter />
                <LinkedIn />
            </div>
        </div>
    )
}

export default memo(Topbar)