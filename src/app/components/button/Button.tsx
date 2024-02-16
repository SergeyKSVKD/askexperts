import { ButtonHTMLAttributes, DetailedHTMLProps, memo } from 'react'
import styles from './button.module.scss'
import CSS from 'csstype'

type textColorButton = 'light_gray' | 'primary_03' | 'white'
type colorButton = 'primary_01' | 'white' | 'primary_03' | 'black'
type paddingButton = 'with_icon' | 'without_icon'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: React.ReactNode,
    padding?: paddingButton,
    text?: string,
    color?: colorButton,
    textColor?: textColorButton,
    style?: CSS.Properties,
    onClick?: () => void,
}

const Button: React.FC<ButtonProps> = ({
    icon,
    padding = 'without_icon',
    text = 'click',
    color = 'white',
    textColor = 'light_gray',
    onClick,
    style,
}) => {

    return <div className={styles.button}
        style={{
            backgroundColor: `var(--${color})`,
            padding: `var(--${padding})`,
            ...style,
        }}
        onClick={onClick}
    >
        {icon && icon}
        <span style={{ color: `var(--${textColor})` }}>{text}</span>
    </div>
}

export default memo(Button)