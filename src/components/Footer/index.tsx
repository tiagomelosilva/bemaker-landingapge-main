import Logo from "../../assets/bemaker-logo-horizontal.svg";
import { InstagramLogo, LinkedinLogo, FacebookLogo, WhatsappLogo } from "phosphor-react"; // Importe os ícones do Phosphor

export function Footer() {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-between mx-auto w-5/6 gap-16 md:flex">
                {/* Coluna 1: Logo e descrição */}
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo-gym" width={200} />
                    <p className="my-5 text-justify">
                        23 anos de experiência, inovação e dedicação em uma jornada de transformação de ideias em realidade, unindo criatividade, tecnologia e estratégia para entregar projetos de alto impacto.
                    </p>
                    <p>
                        <b>©BeMAKER LAB, TODOS OS DIREITOS RESERVADOS.</b>
                    </p>
                </div>

                {/* Coluna 2: Links (Redes Sociais) */}
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold text-primary-500">Links</h4>
                    <div className="my-5 flex items-center gap-3">
                        <a href="https://www.instagram.com/tiago_bemaker/" target="_blank" rel="noopener noreferrer">
                            <InstagramLogo size={24} className="h-8 w-8 text-primary-500 hover:text-secondary-400 transition duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/tiagomelosilva/" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogo size={24} className="h-8 w-8 text-primary-500 hover:text-secondary-400 transition duration-300" />
                        </a>
                        <a href="https://www.facebook.com/tiagomelosilva2" target="_blank" rel="noopener noreferrer">
                            <FacebookLogo size={24} className="h-8 w-8 text-primary-500 hover:text-secondary-400 transition duration-300" />
                        </a>
                    </div>
                </div>

                {/* Coluna 3: Entre em contato (WhatsApp) */}
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold text-primary-500">Entre em contato</h4>
                    <div className="my-5 flex items-center gap-3">                        
                    <WhatsappLogo size={24} className="text-primary-500" />                        
                        <a href="https://wa.me/5562982014403" target="_blank" rel="noopener noreferrer">
                        +55 62 98201-4403
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}