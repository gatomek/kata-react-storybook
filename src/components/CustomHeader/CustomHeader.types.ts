import type {HTMLAttributes, ReactNode} from "react";

export interface CustomHeaderProps extends HTMLAttributes<HTMLHeadingElement>{
    children: ReactNode;
}