'use client'

import styles from './navlink.module.scss'
import cn from 'classnames'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { HTMLAttributes, memo } from "react"

interface NavLinkProps extends HTMLAttributes<HTMLAnchorElement> {
    link: { url: string, title: string },
    icon?: React.ReactNode,
    onClick?: () => void,
}

const NavLink: React.FC<NavLinkProps> = ({ link, icon, onClick }) => {
    const pathname = usePathname()

    return (
        <div className={styles.container}>
            <div className={cn(styles.icon, {
                [styles.active_icon]: pathname === link.url
            })}>
                {icon && icon}
            </div>
            <Link
                className={cn(styles.link, { [styles.active]: pathname === link.url })}
                href={link.url} key={link.title}
                onClick={onClick}
            >
                {link.title}
            </Link>
        </div>

    )
}

export default memo(NavLink)