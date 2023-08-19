import NavBar from "@/components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function Usuario() {
  return (
    <>
      <NavBar active={"usuario"} />

      <main className="flex flex-col text-black m-10 p-8">
        <div className="flex justify-center">
          <div className="flex justify-center bg-indigo-100 h-60 w-60 rounded-full">
            <FontAwesomeIcon className="w-32 text-indigo-900" icon="fa-solid fa-user" />
          </div>
        </div>
        <div className="flex flex-col mx-40 my-10">
          <div className="flex flex-col">
            <label htmlFor="nome">Nome</label>
            <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="text" id="nome" required />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="email">E-mail</label>
            <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="text" id="email" required />
            <div className="flex justify-end text-sm hover:text-indigo-900">
              <p>Alterar a senha</p>
            </div>
          </div>
          <div className="flex flex-row mt-3 gap-8">
            <div className="flex flex-col flex-auto">
              <label htmlFor="livros-lidos">Livros lidos</label>
              <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="number" id="livros-lidos" required />
            </div>
            <div className="flex flex-col flex-auto">
              <label htmlFor="meta">Meta</label>
              <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="number" id="meta" required />
            </div>
          </div>
          <div className="flex flex-row justify-end mt-6 gap-8">
            <button className="px-5 py-2 border border-2 border-indigo-200 rounded">excluir conta</button>
            <button type="submit" className="px-5 py-2 bg-pink-500 text-white rounded">salvar</button>
          </div>
        </div>
      </main>
    </>
  )
}
