import NavBar from "@/components/NavBar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DataRow from "./DataRow";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

async function getCategorias() {
  const url = "http://localhost:8080/book-organizer/categorias"
  const response = await fetch(url, { next: { revalidate: 0 } })
  return response.json()
}

library.add(fas)

export default async function Categoria() {
  const data = await getCategorias()
  return (
    <>
      <NavBar active={"categoria"} />

      <main className="text-black m-10 p-8">
        <h2 className="text-center text-4xl font-bold">Cadastrar categoria</h2>
        <div className="flex flex-col mx-40 my-10">
          <TextInput name="nome" id="nome" label="Nome da categoria" />
          <div className="flex mt-5 justify-end">
            <Button icon={<FontAwesomeIcon className="w-4" icon="fa-solid fa-plus" />} href="/cadastro-livro">
              adicionar
            </Button>
          </div>
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
