import { useState, useEffect } from "react";
import { List, X } from "phosphor-react";
import LogoNav from "../../assets/bemaker-logo-horizontal.svg";
import { Link } from "./Link";
import { SelectedPage } from "../../shared/types";
import { useMediaQuery } from "../../hooks/useMediaQueries";
import { ActionButton } from "../ActionButton";

interface IProps {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    isTopOfPage: boolean;
}

export function Navbar({ selectedPage, setSelectedPage, isTopOfPage }: IProps) {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
    const flexBetween = "flex items-center justify-between";
    const navBarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    return (
        <nav>
            <div className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={LogoNav} alt="logo" width={200} />

                        {isAboveMediumScreen ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Serviços"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Portfolio"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Contato"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                {/*<div style={{ display: "none" }}>
                                    <div className={`${flexBetween} gap-8`}>
                                        <span>Sign In</span>
                                        <ActionButton setSelectedPage={setSelectedPage}>
                                            Become Member
                                        </ActionButton>
                                    </div>
                                </div>*/}
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <List className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Modal */}
            {!isAboveMediumScreen && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <X className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>
                    <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Serviços"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Portfolio"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contato"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    );
}