import { memo } from 'react'
import styles from './client.module.scss'
import Client1 from '../../../../../public/1.svg'
import Client2 from '../../../../../public/2.svg'
import Client3 from '../../../../../public/3.svg'
import Client4 from '../../../../../public/4.svg'
import Client5 from '../../../../../public/5.svg'
import Client6 from '../../../../../public/6.svg'

const Client = () => {

    return (<div className={styles.container}>
        <Client1 />
        <Client2 />
        <Client3 />
        <Client4 />
        <Client5 />
        <Client6 />
    </div>)
}

export default memo(Client)