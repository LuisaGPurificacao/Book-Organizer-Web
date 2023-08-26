import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DataRow({ livro }) {
    const porcentagemLida = (livro.paginaAtual / livro.quantidadePaginas) * 100;
    return (
        <div className="flex flex-col mx-40 my-10 gap-3">
            <div className="flex flex-row items-center">
            <p>{porcentagemLida.toFixed(2)}%</p>
            <div className="bg-indigo-900 rounded-l-lg w-1/5 h-4 ml-3"></div>
            <div className="bg-indigo-200 rounded-r-lg h-4 grow"></div>
          </div>
          <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">{livro.titulo}</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil" />
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can" />
            </div>
          </div>
          </div>
    )
}