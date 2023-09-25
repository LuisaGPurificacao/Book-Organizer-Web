"use client"

import Image from 'next/image'
import loginimage from '@/images/books.jpg'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import { useForm } from "react-hook-form"
import { useContext } from 'react'
import { AuthContext } from '@/context/AuthContext'


export default function Login() {
    const { register, handleSubmit } = useForm()
    const { login } = useContext(AuthContext)

    const onSubmit = (data) => {
        login(data)
    }

    return (
        <div className='flex h-screen'>
            <aside className='hidden lg:flex w-1/2'>
                <Image
                    src={loginimage}
                    alt="imagem de livros empilhados"
                    className='h-full w-full object-cover' />
            </aside>
            <main className='text-black flex flex-col items-center justify-center h-screen w-full'>
                <h1 className='text-5xl font-bold'>Book Organizer</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextInput register={register} name="email" label="E-mail" />
                    <TextInput register={register} name="senha" label="Senha" type="password" />
                    <div className='mt-6'>
                    <Button element="button">Entrar</Button>
                    </div>
                </form>
            </main>
        </div>
    )
}