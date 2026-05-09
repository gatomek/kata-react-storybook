import CustomButton from "../CustomButton/CustomButton.tsx";
import styles from './StickyPanel.module.css';
import type {StickyPanelProps} from "./StickyPanel.types.ts";

export function StickyPanel(props: Readonly<StickyPanelProps>) {
    const {
        edition,
        setEdition
    } = props;

    return (
        <div className={`${styles.panel} ${edition ? styles.active : ''}`}>
            {edition &&
                <CustomButton onClick={() => setEdition(false)} radius>
                    Cancel
                </CustomButton>
            }

            {edition &&
                <CustomButton onClick={() => setEdition(false)} radius>
                    Save
                </CustomButton>
            }

            {!edition &&
                <CustomButton onClick={() => setEdition(true)} radius>
                    Edit
                </CustomButton>
            }
        </div>
    )
}
