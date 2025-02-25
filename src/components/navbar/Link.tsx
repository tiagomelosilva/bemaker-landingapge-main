import AnchorLink from "react-anchor-link-smooth-scroll"

import { SelectedPage } from "../../shared/types";

interface IProps {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void; 
}

export function Link({ page, selectedPage, setSelectedPage }: IProps) {

    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""}
                transition duration-500 hover:text-primary-300
            `}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}