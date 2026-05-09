import styles from "./CustomHeader.module.css";
import type {CustomHeaderProps} from "./CustomHeader.types.ts";

export function CustomHeader(props: Readonly<CustomHeaderProps>) {
    const {
        title
    } = props;

    return (
        <header className={styles.header}>
            {title}
        </header>
    )
}