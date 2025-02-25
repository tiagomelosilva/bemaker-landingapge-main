import { BaseSyntheticEvent } from "react"

import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

import { SelectedPage } from "../../shared/types";

import ContactUsPageGraphic from "../../assets/ContactUsPageGraphic.png";

import ProfileImg from "../../assets/contato.png"
import { HText } from "../../components/HText";

interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}

interface IFormInput {
    name: string;
    email: string;
    message: string;
}

export function ContactUs({ setSelectedPage }: IProps) {

    const inputStyles = `w-full rounded-lg outline-primary-300 bg-primary-300 
    px-5 py-3 placeholder-white mt-2`;
    const wrapperImg = `md:before:content-evolvetext 
    before:absolute before:-bottom-20 before:-right-10 before:z-[-1]`;

    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    // const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    async function onSubmit(data: IFormInput, e?: BaseSyntheticEvent) {
        e!.preventDefault();
        console.log(data)
    }


    return (
        <section
            id="contactus"
            className="mx-auto w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/* HEADER */}
                <motion.div
                    className="w-3/6"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2, duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 }

                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW </span>
                        TO GET IN SHAPE
                    </HText>
                    <p className="py-5">
                    Ready to transform your health and well-being? Fill out the form below and start your fitness journey with us
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}

                <div className="mt-4 items-center justify-between gap-8 md:flex">
                    {/* FORM */}
                    <motion.div
                        className="basis-3/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 }

                        }}
                    >
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            autoComplete="off"
                        >
                            <input

                                className={inputStyles}
                                type="text"
                                placeholder="NAME"
                                {...register("name", { required: true, maxLength: 50 })}
                            />
                            {errors.name && (
                                <span
                                    className="mt-1 text-primary-500"
                                >
                                    {errors.name.type === "required" && "This field is required."}
                                    {errors.name.type === "maxLength" && "Max Length is 50 caracteres."}
                                </span>
                            )
                            }

                            <input
                                className={inputStyles}
                                type="email"

                                placeholder="EMAIL"
                                {...register("email", { required: true, maxLength: 50 })}
                            />
                            {errors.email && (
                                <span
                                    className="mt-1 text-primary-500"
                                >
                                    {errors.email.type === "required" && "This field is required."}
                                    {errors.email.type === "maxLength" && "Max Length is 50 caracteres."}
                                </span>
                            )
                            }

                            <textarea
                                className={inputStyles}
                                rows={4}
                                cols={50}

                                placeholder="MESSAGE"
                                {...register("message", { required: true, maxLength: 1000 })}
                            />
                            {errors.message && (
                                <span
                                    className="mt-1 text-primary-500"
                                >
                                    {errors.message.type === "required" && "This field is required."}
                                    {errors.message.type === "maxLength" && "Max Length is 1000 caracteres."}
                                </span>
                            )
                            }
                            <button
                                className="mt-2 rounded-lg bg-secondary-500 text-center py-2 px-20 transition duration-500 hover:text-white hover:bg-secondary-400"
                            >
                                Send
                            </button>
                        </form>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                        className="relative mt-16 basics-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 }

                        }}
                    >
                        <div 
                            className={wrapperImg}
                        >
                            <img 
                                src={ProfileImg} 
                                className="w-full" 
                                alt="ProfileImg" 
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )

}