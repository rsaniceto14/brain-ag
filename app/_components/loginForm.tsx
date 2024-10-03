"use client"

import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginForm = () => {

    const searchParams = useSearchParams();

    const error = searchParams.get('error');

    async function login(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        signIn("credentials", {
            data,
            callbackUrl: "/dashboard"
        })

    }

    return (
        <div className="h-screen flex justify-center items-center px-5">
            <form onSubmit={login} className="bg-slate-100 p-12 rounded-lg w-96 max-w-full flex-col flex justify-center items-center gap-3">
                <h1 className="flex justify-center items-center px-3 font-bold text-xg">Faça seu Login</h1>
                <Input name="username" placeholder="Usuário" className="bg-white mb-2" required />
                <Input type="password" name="password" placeholder="Senha" className="bg-white" required />

                <Button type="submit" className="btn-primary w-full " > Login </Button>
                <Link href="/register">
				<p className="mt-6">
					<span className="font-bold text-blue-600 ml-2 cursor-pointer underline">
						Criar Conta?
					</span>
				</p>
			</Link>
                
                {error === "credentialsSignin" && (
                    <div className="text-red-900">
                        Usuário ou senha inválidos.
                    </div>
                )}
            </form>
        </div>
    );
}

export default LoginForm;