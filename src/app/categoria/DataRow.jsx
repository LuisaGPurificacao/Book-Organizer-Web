import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DataRow({ categoria }) {
    return (
        <div className="flex flex-row">
            <p className="bg-indigo-100 p-2 rounded-l-lg grow">{categoria.nome}</p>
            <div className="flex flex-row justify-evenly bg-indigo-100 p-2 rounded-r-lg w-24">
              <FontAwesomeIcon className="w-6" icon="fa-solid fa-pencil"/>
              <FontAwesomeIcon className="w-6 text-red-800" icon="fa-solid fa-trash-can"/>
            </div>
          </div>
    )
}