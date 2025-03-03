import { BaseSyntheticEvent } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import ProfileImg from "../../assets/Contato.png";
import { HText } from "../../components/HText";
import emailjs from "@emailjs/browser"; // Importe o EmailJS
import '../../index.css';

interface IProps {
    setSelectedPage: (value: SelectedPage) => void;
}

interface IFormInput {
    name: string;
    email: string;
    message: string;
}

export function Contato({ setSelectedPage }: IProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data, e?: BaseSyntheticEvent) => {
        e?.preventDefault();

        // Configurações do EmailJS
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            message: data.message,
        };

        emailjs
            .send(
                "service_7xcrgbz", // Service ID
                "template_8q6ip8j", // Template ID
                templateParams, // Dados do formulário
                "LfXHwJ_pC24NqG8AS" // Public Key
            )
            .then(
                (response) => {
                    console.log("Email enviado com sucesso!", response.status, response.text);
                    reset(); // Limpa o formulário após o envio
                    alert("Mensagem enviada com sucesso!");
                },
                (error) => {
                    console.log("Erro no envio! ", error);
                    alert("Erro ao enviar a mensagem. Tente novamente.");
                }
            );
    };

    return (
        <section id="contato" className="mx-auto w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contato)}>
                {/* HEADER */}
                <motion.div
                    className="w-full md:w-3/6"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2, duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-500">Não seja tímido. </span>
                        Entre em Contato agora.
                    </HText>
                    <p className="py-4 mb-0">
                        Fique à vontade para entrar em Contato comigo. Estou sempre aberto a discutir novos projetos,
                        ideias criativas ou oportunidades de dar vida à sua visão.
                    </p>
                </motion.div>

                {/* FORM AND IMAGE */}
                <div className="mt-0 items-center justify-between gap-10 md:flex">
                    {/* FORM */}
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
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="form"
                            autoComplete="off"
                        >
                            <input
                                className="input"
                                type="text"
                                placeholder="Nome:"
                                {...register("name", { required: true, maxLength: 50 })}
                            />
                            {errors.name && (
                                <span className="mt-1 text-primary-500">
                                    {errors.name.type === "required" && "O preenchimento deste campo é obrigatório."}
                                    {errors.name.type === "maxLength" && "O limite máximo são 50 caracteres."}
                                </span>
                            )}

                            <input
                                className="input"
                                type="email"
                                placeholder="E-mail:"
                                {...register("email", { required: true, maxLength: 50, pattern: /^\S+@\S+$/i })}
                            />
                            {errors.email && (
                                <span className="mt-1 text-primary-500">
                                    {errors.email.type === "required" && "O preenchimento deste campo é obrigatório."}
                                    {errors.email.type === "maxLength" && "O limite máximo são 50 caracteres."}
                                    {errors.email.type === "pattern" && "Por favor, insira um e-mail válido."}
                                </span>
                            )}

                            <textarea
                                className="textarea"
                                rows={4}
                                cols={50}
                                placeholder="Mensagem:"
                                {...register("message", { required: true, maxLength: 1000 })}
                            />
                            {errors.message && (
                                <span className="mt-1 text-primary-500">
                                    {errors.message.type === "required" && "O preenchimento deste campo é obrigatório."}
                                    {errors.message.type === "maxLength" && "O limite máximo são 1000 caracteres."}
                                </span>
                            )}
                            <button
                                type="submit"
                                className="button"
                            >
                                <b>Enviar mensagem</b>
                            </button>
                        </form>
                    </motion.div>

                    {/* IMAGE */}
                    <motion.div
                        className="relative mt-2 basis-2/6 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.2, duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, y: -100 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="md:before:content-evolvetext before:absolute before:-bottom-0 before:-right-10 before:z-[-1]">
                            <img src={ProfileImg} className="w-full" alt="ProfileImg" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}