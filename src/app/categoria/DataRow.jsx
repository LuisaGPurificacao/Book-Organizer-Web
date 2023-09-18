"use client"

import { destroy } from "@/actions/categoria";
import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from "next/link";

library.add(fas)

export default function DataRow({ categoria }) {

  const [messagem, setMessage] = useState("")

  async function handleDelete(id) {
    try {
      const resp = await destroy(id);
      if (resp && resp.error) {
        setMessage(resp.error);
      }
    } catch (error) {
      console.error("Erro ao deletar categoria:", error);
    }
  }

  return (
    <div className="flex flex-row">
      <p className="bg-indigo-100 p-2 rounded-l-lg grow">{categoria.nome}</p>
      <div className="flex flex-row justify-evenly bg-indigo-100 p-1 rounded-r-lg w-30">
        <button>
          <Link href="/categoria/edit">
            <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
          </Link>
        </button>
        <button onClick={() => handleDelete(categoria.id)}>
          <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
        </button>
      </div>
      <div className="mt-1 text-red-500 p-1">{messagem}</div>
    </div>
  )
}
