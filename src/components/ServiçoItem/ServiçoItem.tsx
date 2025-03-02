import { ReactNode } from "react";

interface IServiçoItemProps {
    ico: ReactNode;
    title: string;
    description: string;
}

export function ServiçoItem({ ico, title, description }: IServiçoItemProps) {
    return (
        <div className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center">
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                    {ico}
                </div>
            </div>
            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
        </div>
    );
}