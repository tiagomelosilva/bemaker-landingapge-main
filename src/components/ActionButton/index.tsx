import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";

interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
    page: string; // Adicione essa linha
    children: string;
}


export function ActionButton({ children, setSelectedPage }: IProps) {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 text-white hover:bg-primary-100 hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.Contato)}
            href={`#${SelectedPage.Contato}`}
        >
            {children}
        </AnchorLink>
    );
}