import AnchorLink from "react-anchor-link-smooth-scroll";
import { IBenefits, SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";


interface IProps extends IBenefits {
    setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1
    }
}


export function Benefit({ icon, title, description, setSelectedPage }: IProps) {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 bg-primary-100">
                    <>{icon}</>
                </div>
            </div>
            <h4 className="font-bold">{title}</h4>
            <p className="text-sm my-4">{description}</p>
            <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`${SelectedPage.ContactUs}`}
            >
                Learn More
            </AnchorLink>
        </motion.div>
    )
}