import { ReactNode } from "react";

enum SelectedPage {
    Home = "Home",
    Serviços = "Serviços",
    Portfólio = "Portfólio",
    Contato = "Contato",
}

interface IServiços {
    id?: string;
    icon: ReactNode; // Alterado para ReactNode
    title: string;
    description: string;
}

interface IClass {
    id?: string;
    name: string;
    description?: string;
    image: string;
}

export { SelectedPage, IServiços, IClass };