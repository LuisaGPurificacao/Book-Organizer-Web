import NavBar from "@/components/NavBar";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import DataRow from "./DataRow";

async function getLivros(){
  const url = "http://localhost:8080/book-organizer/livros"
  const response = await fetch(url,  { next: { revalidate: 0 } })
  return response.json()
}

library.add(fas)
export default async function BuscaLivros() {
  const data = await getLivros()
  const { entityModelList } = data._embedded;
  return (
    <>
      <NavBar active={"busca-livro"} />

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
