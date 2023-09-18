"use client"

import { update } from "@/actions/categoria";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import TextInput from "@/components/TextInput";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

export default function FormCategoria({ categoria }) {

    const [messagem, setMessage] = useState("")
    const [categoriaEdit, setCategoriaEdit] = useState(categoria)

    function handleFieldChange(field, value) {
        setCategoriaEdit({
            ...categoriaEdit,
            [field]: value
        })
    }

    // categoriaEdit = {
    //     id: 3,
    //     nome: "Príncipe"
    // };

    async function handleSubmit() {
        try {
            const resp = await update(categoriaEdit);
            if (resp && resp.error) {
                setMessage(resp.error);
            }
        } catch (error) {
            console.error("Erro ao deletar categoria:", error);
        }
        redirect("/categoria")
    }

    return (
        <>
            <NavBar active={"categoria/edit"} />

            <main className="text-black m-10 p-8">
                <h2 className="text-center text-4xl font-bold">Atualizar categoria</h2>
                <form action={handleSubmit}>
                    <div className="flex flex-col mx-40 my-10">
                        <TextInput name="nome" id="nome" label="Nome da categoria"
                            // value={categoria.nome}
                            onChange={e => handleFieldChange("nome", e.target.value)} />
                        <div className="flex mt-5 justify-end gap-8">
                            <Button icon={<FontAwesomeIcon className="w-4" />} element="button">
                                atualizar
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