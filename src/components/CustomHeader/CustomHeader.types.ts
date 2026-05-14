import type {HTMLAttributes, ReactNode} from "react";

export interface CustomHeaderProps extends HTMLAttributes<HTMLElement>{
    children: ReactNode;
}