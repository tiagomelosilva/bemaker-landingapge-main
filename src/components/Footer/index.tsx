import Logo from "../../assets/bemaker-logo-horizontal.svg";

export function Footer() {
    return (
        <footer className="bg-primary-100 py-16">
            <div className="justify-between mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo-gym" width={200} />
                    <p className="my-5">Um breve resumo sobre a BeMAKER LAB</p>
                    <p>©BeMAKER LAB All Rights Reserved.</p>
                </div>

                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold text-primary-500">Links</h4>
                    <p className="my-5">Colocar ícones de redes sociais</p>
                    <p className="my-5">Colocar ícones de redes sociais</p>
                    <p>Colocar ícones de redes sociais</p>
                </div>

                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold text-primary-500">Entre em contato</h4>
                    <p className="my-5">ícone do whatsapp + 62 9 8201-4403</p>
                </div>
            </div>
        </footer>
    );
}