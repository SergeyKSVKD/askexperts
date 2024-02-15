import { memo } from 'react'
import styles from './header.module.scss'
import Logo from '../../../../../public/Logo.svg'
import Button from '../../button/Button'
import Phone from '../../../../../public/phone-icon.svg'
import Navbar from './navbar/Navbar'

const Header = () => {
    const links = [
        { url: '/', title: 'Home', },
        { url: '/pages', title: 'Pages', },
        { url: '/services', title: 'Services', },
        { url: '/work', title: 'Work', },
        { url: '/about', title: 'About', },
        { url: '/contact', title: 'Contact', },
    ]

    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <Logo />
                <span>AskExperts</span>
            </div>
            <Navbar links={links} />
            <Button
                icon={<Phone />}
                padding="with_icon"
                text='+ (888) 452 1505'
                color='white'
                textColor='light_gray'
            />
        </div>
    )
}

export default memo(Header)