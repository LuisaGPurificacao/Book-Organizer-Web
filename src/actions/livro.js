'use server'

import { revalidatePath } from "next/cache"

export async function create(formData){
    const url = "http://localhost:8080/book-organizer/livros"
    
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)) ,
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const mensagens = json.reduce((str, erro) => str += ". "  + erro.message, "")
        return {error: "Erro ao adicionar" + mensagens}
    }

    revalidatePath("/livro")
    return {ok: "Livro adicionado com sucesso"}
}

export async function destroy(id){
    const deleteUrl = "http://localhost:8080/book-organizer/livros/" + id
   
    const options = {
        method: "DELETE"
    }

    const response = await fetch(deleteUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "falha ao apagar livro"}
    }

    revalidatePath("/livro")
}