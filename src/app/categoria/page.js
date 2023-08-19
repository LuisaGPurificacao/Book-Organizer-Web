import NavBar from "@/components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Categoria() {
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
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Tecnologia</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Romance</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Terror</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Suspense</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Ação</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Educação Financeira</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Psicologia</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Biografia</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Comédia</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
