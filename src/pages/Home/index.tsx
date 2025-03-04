import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../../shared/types";
import { ActionButton } from "../../components/ActionButton";
import { useMediaQuery } from "../../hooks/useMediaQueries";
import BemakerLogo from "../../assets/bemaker-logo.svg";
import Heroimg from "../../assets/hero.png";
import BemakerLab from "../../assets/bemaker-design.svg";
import BemakerDev from "../../assets/bemaker-dev.svg";
import Bemaker3D from "../../assets/bemaker-3dprint.svg";

interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}

export function Home({ setSelectedPage }: IProps) {
    const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:full md:pb-0">
            {/* Image and header */}
            <motion.div
                className="md:flex mx-auto w-5/6 item-center justify-center md:h-5/6 pb-4"
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
            >
                {/* Main header */}
                <div className="z-10 mt-20 md:basis-3/5">
                    {/* Headings */}
                    <motion.div
                        className="md:-mt-22"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-10 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img src={BemakerLogo} alt="bemaker logo" />
                            </div>
                        </div>
                        <p className="mt-10 text-sm text-justify">
                            Com mais de 20 anos de experiência, sou especialista em design estratégico voltado para alta conversão.
                            Premiado e reconhecido no mercado, já criei projetos de grande impacto, como a identidade visual da reforma do
                            Parque Mutirama e campanhas publicitárias vencedoras. Atuo no marketing de uma holding como designer, movie maker,
                            motion designer e especialista em DesignOps, além de ser piloto certificado de RPA para captação de imagens e
                            monitoramento. Também apoio uma startup tech do grupo como product designer, UI/UX designer e front-end em React.js.<br />
                            <b>Transformo negócios com design inteligente e resultados reais.</b>
                        </p>
                    </motion.div>
                    {/* Actions */}
                    <motion.div
                        className="mt-10 mb-10 flex gap-8 items-center justify-center md:justify-start justify-center"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <AnchorLink href="#contato">
                            <ActionButton setSelectedPage={setSelectedPage} page="Contato">
                                Entre em contato
                            </ActionButton>
                        </AnchorLink>
                    </motion.div>
                </div>
                {/* Image — Imagem do HERO*/}
                
                <div className="flex items-center mb-6 basis-3/6 justify-center md:z-1 md:ml-8 md:mt-8 md:justify-items-end">
                    <img src={Heroimg} alt="HomeHero" />
                </div>
            </motion.div>

            {/* Sponsors - Logos */}
            <motion.div
                        className="basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
            <div className="w-full bg-primary-100 py-10 overflow-x-auto">
                <div className="mx-auto w-full md:w-4/6">
                    <div className="flex items-center justify-start md:justify-center gap-40 md:gap-40 whitespace-nowrap flex-nowrap pl-[40px] md:pl-0 pr-[40px]">
                        <img src={BemakerLab} alt="BemakerLab" className="w-40" />
                        <img src={BemakerDev} alt="BemakerDev" className="w-40" />
                        <img src={Bemaker3D} alt="Bemaker3D" className="w-40" />
                    </div>
                </div>
            </div>
            </motion.div>
        </section>
    );
}
