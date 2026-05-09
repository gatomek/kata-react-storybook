import styles from "./CustomButton.module.css";
import reactLogo from '../../assets/react.svg'
import type {CustomButtonProps, Mode, Size} from "./CustomBotton.types";

const getStyleFromSize = (size: Size): string => {
    if (size == 'large') {
        return styles.large;
    }

    if (size == 'small') {
        return styles.small;
    }

    return styles.medium;
}

const getStyleFromMode = (mode: Mode): string => {
    if (mode === 'error') {
        return styles.error;
    }

    if (mode === 'warning') {
        return styles.warning;
    }

    if (mode == 'info') {
        return styles.info;
    }

    return '';
}

export default function CustomButton(props: Readonly<CustomButtonProps>) {
    const {
        children,
        fullLine,
        mode = 'normal',
        bold,
        disabled,
        radius,
        icon,
        size = 'medium',
        onClick
    } = props;

    const classNameSet = [
        styles.button,
        fullLine && styles.fullLine,
        getStyleFromMode(mode),
        bold && styles.bold,
        radius && styles.radius,
        disabled && styles.disabled,
        getStyleFromSize(size)
    ]
        .filter(Boolean)
        .join(' ');

    const iconImg = icon && <img src={reactLogo} className={styles.icon} alt="Logo"/>;

    return (
        <button
            className={classNameSet}
            onClick={onClick}
            {...(disabled && {disabled: true})}
        >
            {iconImg}
            {children}
        </button>
    );
}
