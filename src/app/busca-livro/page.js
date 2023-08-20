import NavBar from "@/components/NavBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export default function BuscaLivros() {
  return (
    <>
      <NavBar active={"busca-livro"} />

      <main className="text-black m-10 p-8">
        <div className="text-center bg-pink-500 text-white rounded mx-40 py-6">
          <h2 className="text-center text-4xl font-bold">21</h2>
          <h2 className="text-center font-bold">livros lidos</h2>
        </div>
        <div className="flex flex-col mx-40 my-10 gap-3">
          <div className="flex flex-row items-center">
            <p>50%</p>
            <div className="bg-indigo-900 rounded-l-lg w-1/2 h-4 ml-3"></div>
            <div className="bg-indigo-200 rounded-r-lg h-4 grow"></div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Clean Code</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p>90%</p>
            <div className="bg-indigo-900 rounded-l-lg w-11/12 h-4 ml-3"></div>
            <div className="bg-indigo-200 rounded-r-lg h-4 grow"></div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Pequeno Príncipe</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p>20%</p>
            <div className="bg-indigo-900 rounded-l-lg w-1/5 h-4 ml-3"></div>
            <div className="bg-indigo-200 rounded-r-lg h-4 grow"></div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Arquitetura limpa</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p>60%</p>
            <div className="bg-indigo-900 rounded-l-lg w-3/5 h-4 ml-3"></div>
            <div className="bg-indigo-200 rounded-r-lg h-4 grow"></div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Java em 100 dias</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p>50%</p>
            <div className="bg-indigo-900 rounded-l-lg w-1/2 h-4 ml-3"></div>
            <div className="bg-indigo-200 rounded-r-lg h-4 grow"></div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Vulgo Grace</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p>50%</p>
            <div className="bg-indigo-900 rounded-l-lg w-1/2 h-4 ml-3"></div>
            <div className="bg-indigo-200 rounded-r-lg h-4 grow"></div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Python em 100 dias</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
            </div>
          </div>
          <div className="flex flex-row items-center">
            <p>50%</p>
            <div className="bg-indigo-900 rounded-l-lg w-1/2 h-4 ml-3"></div>
            <div className="bg-indigo-200 rounded-r-lg h-4 grow"></div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">Vermelho, Branco e Sangue Azul</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
