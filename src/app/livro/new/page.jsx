"use client"

import { create } from "@/actions/livro";
import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";
import { redirect } from 'next/navigation'

library.add(fas)

export default function CadastroLivro() {
  const [messagem, setMessage] = useState("")

  async function handleSubmit(formData) {
    const resp = await create(formData)
    console.log(resp)
    if (resp.error) {
      setMessage(resp.error)
      return
    }
    redirect("/livro")
  }

  return (
    <>
      <NavBar active={"livro/new"} />

      <main className="text-black m-10 p-8">
        <h2 className="text-center text-4xl font-bold">Cadastrar livro</h2>
        <form action={handleSubmit}>
          <div className="flex flex-col mx-40 my-10">
            <TextInput name="titulo" id="titulo" label="Título" />
            {/* <TextInput name="autor.nome" id="autor.nome" label="Autor" /> */}
            <div className="flex flex-row mt-3 gap-8">
              <TextInput name="paginaAtual" id="paginaAtual" label="Página atual" />
              <TextInput name="quantidadePaginas" id="quantidadePaginas" label="Página total" />
            </div>
            {/* <div className="flex flex-col mt-3">
              <label htmlFor="categoria.nome">Categoria</label>
              <select className="bg-indigo-100 border border-indigo-100 p-2 focus:outline-none rounded" id="categoria.nome" name="categoria.nome">
                <option value="Tecnologia">Tecnologia</option>
                <option value="Romance">Romance</option>
                <option value="Terror">Terror</option>
                <option value="Ficção">Ficção</option>
              </select>
            </div> */}
            <div className="flex flex-row mt-6 gap-8">
              <Button icon={<FontAwesomeIcon className="w-4" icon="fa-solid fa-plus" />} element="button">
                cadastrar
              </Button>
              <Button icon={<FontAwesomeIcon className="w-4" icon="fa-solid fa-times" />} href="/livro" variant="secondary">
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
