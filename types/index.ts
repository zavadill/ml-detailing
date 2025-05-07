import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    href?: string;
}

export interface CustomCardsProps {
    logo: React.ReactNode;
    title: string;
    description: string;
}

export interface CustomCardsPropsRecenze {
    description: string;
    zakaznik: string;
    auto: string;
    containerStyles?: string;
}