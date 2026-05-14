import styles from "./CustomHeader.module.css";
import type {CustomHeaderProps} from "./CustomHeader.types.ts";

export function CustomHeader(props: Readonly<CustomHeaderProps>) {
    const {
        children,
        className,
        ...rest
    } = props;

    const cn = [styles.header, className].filter(Boolean).join(' ');

    return (
        <header className={cn} {...rest}>
            {children}
        </header>
    )
}