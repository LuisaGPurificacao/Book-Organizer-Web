import Link from "next/link";

export default function Notfound(){
    return (
        <main className="bg-indigo-900 m-20 p-8 flex flex-col g-2">
            <h2>404 - Página não encontrada</h2>
            <Link href="/">voltar para home</Link>
      </main>
    )
}