'use server'

import { revalidatePath } from "next/cache"

export async function create(formData){
    const url = "http://localhost:8080/book-organizer/categorias"
    
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

    revalidatePath("/categoria")
    return {ok: "Categoria adicionada com sucesso"}
}

export async function destroy(id){
    const deleteUrl = "http://localhost:8080/book-organizer/categorias/" + id
   
    const options = {
        method: "DELETE"
    }

    const response = await fetch(deleteUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "falha ao apagar categoria"}
    }

    revalidatePath("/categoria")
}

export async function update(categoria){
    const updateUrl = "http://localhost:8080/book-organizer/categorias/" + categoria.id
    
    const options = {
        method: "PUT",
        body: JSON.stringify(categoria) ,
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(updateUrl, options)

    if (!response.ok){
        const json = await response.json()
        return {error: "Erro ao atualizar " + json.message }
    }

    revalidatePath("/categoria")

    return {ok: "Categoria alterada com sucesso"}
}
