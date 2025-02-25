import { ReactNode } from "react"

interface IProps {
    children: ReactNode;
}

export function HText ({ children }: IProps) {
    return (
        <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
    )
}