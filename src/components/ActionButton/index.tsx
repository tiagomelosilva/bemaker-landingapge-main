import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";


interface IProps {
    children: ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}


export function ActionButton ({ children, setSelectedPage}: IProps) {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`${SelectedPage.ContactUs}`}
        >
            {children}
        </AnchorLink>
    )
}