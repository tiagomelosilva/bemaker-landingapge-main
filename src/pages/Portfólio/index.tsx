import { motion } from "framer-motion";
import { IClass, SelectedPage } from "../../shared/types";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";
import Image6 from "../../assets/image6.png";
import { HText } from "../../components/HText";
import { Class } from "../../components/Class";

const classes: IClass[] = [
    {
        id: "dc25bbdf-95af-4d83-acee-e5a584a545cd",
        name: "Design System",
        description: "Crio interfaces intuitivas e eficientes para sistemas e aplicações, garantindo usabilidade, estética e performance.",
        image: Image1,
    },
    {
        id: "c9fdb258-f90e-4dac-b6ad-e0027049a0f7",
        name: "Impressão 3D - Action Figures",
        description: "Produzo action figures personalizadas em impressão 3D, sob demanda, para colecionadores, decoração e projetos exclusivos.",
        image: Image2,
    },
    {
        id: "d3730487-b937-40c1-acfb-a19ff2a75919",
        name: "Impressões 3D sob demanda",
        description: "Ofereço impressão 3D sob demanda para itens de decoração, utensílios domésticos e objetos personalizados, adaptados às suas necessidades.",
        image: Image3,
    },
    {
        id: "33272c97-909e-4604-9289-fb6cfb22b3a1",
        name: "Impressão 3D de peças Técnicas",
        description: "Produzo peças técnicas em impressão 3D, garantindo alta precisão, resistência e personalização para projetos industriais e funcionais.",
        image: Image4,
    },
    {
        id: "f8bba971-ad7d-46d6-ada0-850d7ce91f8e",
        name: "Ilustrações 2D",
        description: "Crio ilustrações 2D personalizadas para projetos gráficos, editoriais, publicidade e mídias digitais, unindo criatividade e técnica.",
        image: Image5,
    },
    {
        id: "7972d2ee-c402-43a4-85ef-4e28383ed107",
        name: "Design Gráfico",
        description: "Com 23 anos de experiência, inovação e dedicação, transformei ideias em realidade, unindo criatividade, tecnologia e estratégia para criar projetos impactantes. Cada trabalho reflete minha paixão por design, desenvolvimento e soluções inteligentes que conectam pessoas e marcas de maneira única e eficaz.",
        image: Image6,
    },
];

interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}

export function Portfólio({ setSelectedPage }: IProps) {
    return (
        <section id="portfolio" className="w-full bg-primary-100 py-20"> {/* ID corrigido */}
            <div className="mx-auto w-5/6">
                <motion.div
                    className="md:w-full"
                    onViewportEnter={() => setSelectedPage(SelectedPage.Portfólio)}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>Meu Portfólio</HText>
                    <p className="py-4 text-justify text-center">
                        Explore os resultados de 23 anos de experiência, inovação e dedicação.
                        Ao longo dessa jornada, transformei ideias em realidade, unindo criatividade,
                        tecnologia e estratégia para entregar projetos de alto impacto. Cada trabalho
                        reflete minha paixão por design, desenvolvimento e soluções inteligentes que conectam pessoas e marcas.
                    </p>
                </motion.div>
                {/* Div com a barra de rolagem personalizada */}
                <div className="mt-10 h-[360px] w-full overflow-x-auto overflow-y-hidden custom-scrollbar">
                    <ul className="w-full whitespace-nowrap">
                        {classes.map((item) => (
                            <Class
                                key={item.id}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}