import Link from "next/link";

export default function NavBar({ active }) {
    return (
        <nav className="flex justify-between items-center bg-indigo-900 px-6 py-4">
            <ul className="flex gap-20 items-end">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-slate-100">
                            book organizer
                        </h1>
                    </Link>
                </li>
                <li>
                    <Link className={active == "cadastro-livro" && "text-slate-100"} href="/cadastro-livro">
                        cadastrar livros
                    </Link>
                </li>
                <li>
                    <Link className={active == "categoria" && "text-slate-100"} href="/categoria">
                        categorias
                    </Link>
                </li>
                <li>
                    <Link className={active == "busca-livro" && "text-slate-100"} href="/busca-livro">
                        buscar livros
                    </Link>
                </li>

            </ul>
            <div className="h-12 w-12 rounded-full overflow-hidden" >
                <Link className={active == "usuario" && "text-slate-100"} href="/usuario">
                    <img src="https://i.pravatar.cc/100" alt="Usuário" />
                </Link>
            </div>
        </nav>
    )
}