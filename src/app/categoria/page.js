import NavBar from "@/components/NavBar";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import DataRow from "./DataRow";

async function getCategorias(){
  const url = "http://localhost:8080/book-organizer/categorias"
  const response = await fetch(url,  { next: { revalidate: 0 } })
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
          <div className="flex flex-col">
            <label htmlFor="nome">Nome da categoria</label>
            <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="text" id="nome" required />
          </div>
          <div className="flex mt-5 justify-end">
            <button type="submit" className="px-5 py-2 bg-pink-500 text-white rounded">adicionar</button>
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
