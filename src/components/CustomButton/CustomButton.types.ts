import type {HTMLAttributes, ReactNode} from "react";

export type Mode = 'normal' | 'error' | 'warning' | 'info';
export type Size = 'small' | 'medium' | 'large';

export interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
    fullLine?: boolean;
    mode?: Mode;
    bold?: boolean;
    disabled?: boolean;
    radius?: boolean;
    icon?: 'react';
    size?: Size;
}
