import styles from "./CustomFooter.module.css";
import type {CustomFooterProps} from "./CustomFooter.types.ts";

export function CustomFooter(props: Readonly<CustomFooterProps>) {
    const {
        children,
        className,
        ...rest
    } = props;

    const cn = [styles.header, className].filter(Boolean).join(' ');

    return (
        <footer className={cn} {...rest}>
            {children}
        </footer>
    )
}
