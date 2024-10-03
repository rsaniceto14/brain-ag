'use server'

import { db } from "@/app/_lib/prisma";
import { hashSync } from "bcrypt-ts";
import { redirect } from "next/navigation";

const register = async (FormData: FormData) => {

    const username = FormData.get('username') as string;
    const name = FormData.get('name') as string;
    const email = FormData.get('email') as string;
    const password = FormData.get('password') as string;

    if (!name || !username || !email || !password) {
        throw new Error('Todos os campos são obrigatórios.');
    }


    const user = await db.user.findUnique({
        where: {
            username: username
        },

    })

    if (user) {
        throw new Error('Já existe um cadastro com este nome de usuário.');
    }


    await db.user.create({
        data: {
            username: username,
            name: name,
            email: email,
            password: hashSync(password),
        }
    });

    

    redirect("/login")




}

export default register;