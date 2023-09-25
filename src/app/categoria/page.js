import NavBar from "@/components/NavBar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/categorias"

async function getCategorias() {
  const token = cookies().get("bookorganizer_token")
  const options = {
      headers: {
          "Authorization": `Bearer ${token.value}`
      }
  }
  const response = await fetch(url)

  if (response.status !== 200) throw new Error("Erro ao carregar as categorias")

  return await response.json()
}

library.add(fas)

export default async function Categoria() {
  const data = await getCategorias()

  return (
    <>
      <NavBar active={"categoria"} />

      <main className="text-black m-10 p-8">
        <h2 className="text-center text-4xl font-bold">Categorias</h2>
        <div className="flex mt-5 justify-center">
          <Button icon={<FontAwesomeIcon className="w-4" icon="fa-solid fa-plus" />} href="/categoria/new">
            Adicionar categoria
          </Button>
        </div>
        <div className="flex flex-col mx-40 my-10 overflow-auto h-64 gap-3">
          {data.map(categoria => {
            return <DataRow categoria={categoria} />
          })}
        </div>
      </main>
    </>
  )
}
