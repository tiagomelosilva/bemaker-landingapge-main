import { Cube, Code, PaintBrush } from "phosphor-react";
import { motion } from "framer-motion";
import { IServiços, SelectedPage } from "../../shared/types";
import { HText } from "../../components/HText";
import { ActionButton } from "../../components/ActionButton";
// Atualize o caminho do arquivo de vídeo para o nome correto do arquivo `.mp4`
import ActionFigureVideo from "../../assets/ActionFigureVideo.mp4"; // Verifique se o caminho do vídeo está correto
import { ServiçoItem } from "../../components/ServiçoItem/ServiçoItem";
import AnchorLink from "react-anchor-link-smooth-scroll";

interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}

const serviços: IServiços[] = [
    {
        id: "75f79fec-9f15-4d8e-81d9-84f3caede775",
        icon: <Cube className="h-6 w-6" />,
        title: "Impressão 3D",
        description: "Transformo modelos digitais em objetos físicos, criando protótipos, peças finais, biomodelos e maquetes. A impressão 3D reduz custos, acelera processos e melhora a avaliação de projetos.",
    },
    {
        id: "86adb601-a39a-4498-ac01-f73652b8306c",
        icon: <Code className="h-6 w-6" />,
        title: "UI/UX e DevWeb",
        description: "Desenvolvo interfaces visuais, landing pages em React.js e sites personalizados em WordPress, HTML, CSS e JS. Crio experiências digitais intuitivas e otimizadas para performance.",
    },
    {
        id: "5ebc8605-3f9a-4048-8f68-a54f1ad82d15",
        icon: <PaintBrush className="h-6 w-6" />,
        title: "Design e Motion Design",
        description: "Crio identidades visuais, embalagens, animações, vinhetas e edições de vídeo. Desenvolvo materiais gráficos e digitais para fortalecer marcas e envolver o público.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

export function Serviços({ setSelectedPage }: IProps) {
    return (
        <section id="serviços" className="mx-auto min-h-full w-5/6 pt-10 pb-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Serviços)}>
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/6"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>Conheça meus serviços</HText>
                    <p className="my-6 text-sm">
                        Com mais de 20 anos de experiência em design estratégico, UI/UX, motion design e impressão 3D, transformo ideias em soluções criativas e de alto impacto.
                        Da identidade visual ao desenvolvimento front-end, meu trabalho é focado em resultados e alta conversão.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                >
                    {serviços.map((serviço) => (
                        <ServiçoItem
                            key={serviço.id}
                            ico={serviço.icon}
                            title={serviço.title}
                            description={serviço.description}
                        />
                    ))}
                </motion.div>

                {/* Graphics and description */}
                <div className="mt-10 md:flex md:mt-16 items-center justify-between gap-8">
                   {/* Vídeo */}
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
<div className="flex justify-center w-full md:w-[350px]  overflow-hidden">
    <video
        className="w-full h-auto rounded-lg border-4 border-primary-500 mb-10"
        controls
        autoPlay
        muted
        loop
    >
        <source src={ActionFigureVideo} type="video/mp4" />
        Seu navegador não suporta o vídeo.
    </video>
</div>
</motion.div>


                    {/* Container Description */}
                    <div>
                        {/* Title */}
                        <motion.div
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <div>
                                    <HText>
                                        Impressões 3D são o futuro!{" "}
                                        <span className="text-primary-500">Saiba mais.</span>
                                    </HText>
                                </div>
                            </div>
                        </motion.div>
                        {/* Description */}
                        <motion.div
                            className="relative"
                            initial="hidden"
                            whileInView="visible"
                            transition={{ delay: 0.3, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: 100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5 text-justify text-center">
                                Transformo ideias em realidade com tecnologia de impressão 3D de alta precisão.
                                Produzo protótipos para validação de design, modelos para campanhas de marketing,
                                peças funcionais, biomodelos, gabaritos, suportes e dispositivos de fixação.
                                Crio maquetes arquitetônicas detalhadas, proporcionando visualização realista e
                                otimização de projetos.
                            </p>
                            <p className="mb-5 text-justify text-center">
                                Agora, apresento o chaveiro inteligente, um acessório exclusivo e personalizado que
                                conecta o mundo físico ao digital. Com tecnologia integrada, ele permite compartilhar
                                informações de contato, direcionar para redes sociais ou levar visitantes ao seu site
                                de forma rápida e prática. Um detalhe sofisticado que agrega funcionalidade ao seu dia a dia.
                            </p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16 flex justify-center md:justify-start">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <AnchorLink href="#contato">
                                    <ActionButton setSelectedPage={setSelectedPage} page="Contato">
                                        Entre em contato
                                    </ActionButton>
                                </AnchorLink>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
