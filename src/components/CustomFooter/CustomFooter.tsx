import styles from "./CustomFooter.module.css";
import type {CustomFooterProps} from "./CustomFooter.types.ts";

export function CustomFooter(props: Readonly<CustomFooterProps>) {
    const {
        label
    } = props;

    return (
        <footer className={styles.footer}>
            {label}
        </footer>
    )
}