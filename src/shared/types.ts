import { IconProps } from "phosphor-react";

enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus"
}

interface IBenefits {
    id?: string;
    icon: IconProps;
    title: string;
    description: string;
}

interface IClass{
    id?: string;
    name: string;
    description?: string;
    image: string;
}

export { SelectedPage, IBenefits, IClass };