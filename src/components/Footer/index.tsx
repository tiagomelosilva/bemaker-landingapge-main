import Logo from "../../assets/Logo-Gym.svg";


export function Footer() {

    return (
        <footer
            className="bg-primary-100 py-16"
        >
            <div className="justify-between mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo-gym" />
                    <p className="my-5">
                        Join us and transform your life with the power of fitness.
                    </p>
                    <p>
                        © EnergyFitGym All Rights Reserved.
                    </p>
                </div>

                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold text-primary-500">Links</h4>
                    <p className="my-5">www.linkedin.com/in/energyfitgym</p>
                    <p className="my-5">www.instagram.com/EnergyFitGym</p>
                    <p>@EnergyFitGym</p>
                </div>

                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold text-primary-500">Contact Us</h4>
                    <p className="my-5">+23 13 581844711</p>
                    <p>4002-8922</p>
                </div>

            </div>

        </footer>
    )

}