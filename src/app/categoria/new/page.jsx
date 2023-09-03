"use client"

import { create } from "@/actions/categoria";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

export default function FormConta() {
    const [messagem, setMessage] = useState("")

    async function handleSubmit(formData) {
        const resp = await create(formData)
        console.log(resp)
        if (resp.error) {
            setMessage(resp.error)
            return
        }
        redirect("/categoria")
    }

    return (
        <>
            <NavBar active={"categoria/new"} />

            <main className="text-black m-10 p-8">
                <h2 className="text-center text-4xl font-bold">Adicionar categoria</h2>
                <form action={handleSubmit}>
                    <div className="flex flex-col mx-40 my-10">
                        <TextInput name="nome" id="nome" label="Nome da categoria" />
                        <div className="flex mt-5 justify-end gap-8">
                            <Button icon={<FontAwesomeIcon className="w-4" icon="fa-solid fa-plus" />} element="button">
                                adicionar
                            </Button>
                            <Button icon={<FontAwesomeIcon className="w-4" icon="fa-solid fa-times" />} href="/categoria" variant="secondary">
                                cancelar
                            </Button>
                        </div>
                        <p className="text-red-500">{messagem}</p>
                    </div>
                </form>
            </main>
        </>
    )
}