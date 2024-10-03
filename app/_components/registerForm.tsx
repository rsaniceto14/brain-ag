"use client"

import Link from "next/link";
import { Button } from "../_components/ui/button";
import { Input } from "../_components/ui/input";
import register from "../register/_actions/register";


const RegisterForm = () => {

    return (

        <div className="h-screen flex justify-center items-center px-5">

            <form action={register} className="bg-slate-100 p-12 rounded-lg w-96 max-w-full flex-col flex justify-center items-center gap-3">
                <h1 className="flex justify-center items-center px-3 font-bold text-xg">Cadastrar</h1>
                <Input name="username" placeholder="Usuário" className="bg-white mb-2" required />
                <Input name="name" placeholder="Nome" className="bg-white mb-2" required/>
                <Input type="email" name="email" placeholder="Email" className="bg-white mb-2" required/>
                <Input type="password" name="password" placeholder="Senha" className="bg-white" required />
                <Button className="btn-primary w-full " > Registrar </Button>
                <Link href="/login">
                    <p className="mt-6">
                        <span className="font-bold text-blue-600 ml-2 cursor-pointer underline">
                            Já possui conta?
                        </span>
                    </p>
                </Link>

            </form>
        </div>
    );
}

export default RegisterForm;