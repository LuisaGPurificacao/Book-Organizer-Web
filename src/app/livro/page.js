import NavBar from "@/components/NavBar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import DataRow from "./DataRow";
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/livros"

async function getLivros(){
  const token = cookies().get("bookorganizer_token")
  const options = {
      headers: {
          "Authorization": `Bearer ${token.value}`
      }
  }
  const response = await fetch(url, options)

  if (response.status !== 200) throw new Error("Erro ao carregar os livros")

  return await response.json()
}

library.add(fas)
export default async function BuscaLivros() {
  const data = await getLivros()
  const { entityModelList } = data._embedded;
  return (
    <>
      <NavBar active={"livro"} />

      <main className="text-black m-10 p-8">
        <div className="text-center bg-pink-500 text-white rounded mx-40 py-6">
          <h2 className="text-center text-4xl font-bold">00</h2>
          <h2 className="text-center font-bold">livros lidos</h2>
        </div>
        {entityModelList.map(livro => {
          return <DataRow livro={livro} />
        })}
      </main>
    </>
  )
}
