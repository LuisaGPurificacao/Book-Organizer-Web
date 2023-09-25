import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

export default function NavBar({ active }) {

    const {user, logout} = useContext(AuthContext)

    return (
        <nav className="flex justify-between items-center bg-indigo-900 px-6 py-4">
            <ul className="flex gap-20 items-end">
                <li>
                    <Link className={active == "/livro" && "text-slate-100"} href="/livro">
                        <h1 className="text-2xl text-slate-100">
                            book organizer
                        </h1>
                    </Link>
                </li>
                <li>
                    <Link className={active == "/livro/new" && "text-slate-100"} href="/livro/new">
                        cadastrar livros
                    </Link>
                </li>
                <li>
                    <Link className={active == "categoria" && "text-slate-100"} href="/categoria">
                        categorias
                    </Link>
                </li>
                <li>
                    {/* <Link className={active == "busca-livro" && "text-slate-100"} href="/busca-livro"> */}
                    buscar livros
                    {/* </Link> */}
                </li>

            </ul>
            <div className="flex items-center gap-2">
                {user?.nome}
                <div className="h-12 w-12 rounded-full overflow-hidden" >
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                </div>
                <Button onClick={logout} variant="secondary" element="button" icon={<FontAwesomeIcon className="w-4" icon="fa-arrow-right-from-bracket" />}>
                    sair
                </Button>
            </div>
        </nav>
    )
}