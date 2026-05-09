import type {ReactNode} from "react";

export type Mode = 'normal' | 'error' | 'warning' | 'info';
export type Size = 'small' | 'medium' | 'large';


export interface CustomButtonProps {
    children?: ReactNode;
    fullLine?: boolean;
    mode?: Mode;
    bold?: boolean;
    disabled?: boolean;
    radius?: boolean;
    icon?: 'react';
    size?: Size;
    onClick?: () => void;
}
