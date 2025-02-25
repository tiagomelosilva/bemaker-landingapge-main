import { GraduationCap, UserSquare, Barbell } from "phosphor-react";
import { motion } from "framer-motion";

import { IBenefits, SelectedPage } from "../../shared/types";
import { HText } from "../../components/HText";
import { Benefit } from "../../components/Benefit";
import { ActionButton } from "../../components/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png";
import ActionFigure from "../../assets/pickle-rick-3d-print.png"

interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}


const benefits: IBenefits[] = [
    {
        id: "75f79fec-9f15-4d8e-81d9-84f3caede775",
        icon: <Barbell className="h-6 w-6" />,
        title: "Impressão 3D",
        description: "Detalhar de forma comercial o serviço de impressão 3D"
    },
    {
        id: "86adb601-a39a-4498-ac01-f73652b8306c",
        icon: <UserSquare className="h-6 w-6" />,
        title: "UI/UX e DevWeb",
        description: "Detalhar de forma comercial o serviço de UI/UX e DevWeb."
    },
    {
        id: "5ebc8605-3f9a-4048-8f68-a54f1ad82d15",
        icon: <GraduationCap className="h-6 w-6" />,
        title: "Design e Motion Design",
        description: "Detalhar de forma comercial o serviço de Design Gráfico."
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

export function Benefits({ setSelectedPage }: IProps) {

    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* HEADER */}
                <motion.div
                    className="md:my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }

                    }}
                >
                    <HText>Conheça meus serviços</HText>
                    <p className="my-5 text-sm">
                        Fazer um relato detalhado com uma boa COPY a respeito dos tipos de serviços que presto.
                    </p>
                </motion.div>

                {/* BENEFITS */}

                <motion.div
                    className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    variants={container}
                >
                    {
                        benefits.map((benefit: IBenefits) => (
                            <Benefit
                                key={benefit.id}
                                icon={benefit.icon}
                                title={benefit.title}
                                description={benefit.description}
                                setSelectedPage={setSelectedPage}
                            />
                        ))
                    }
                </motion.div>

                {/* Graphics and description */}
                <div className="md:flex md:mt-16 items-center justify-between gap-8">
                    {/* Graphic */}
                    <img
                        className="mx-auto"
                        src={ActionFigure}
                        alt="ActionFigure" width={250}
                    />

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
                                visible: { opacity: 1, x: 0 }

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
                                visible: { opacity: 1, x: 0 }

                            }}
                        >
                            <p className="my-5">
                            Descrever um pouco sobre a impressão 3D de forma técnica e prática.
                            </p>
                            <p className="mb-5">
                            Mencionar criações como o chaveiro smart.
                            </p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                                <ActionButton
                                    setSelectedPage={setSelectedPage}
                                >
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>

    )

}