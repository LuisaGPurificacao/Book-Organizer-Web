import NavBar from "@/components/NavBar";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fas)

export default function CadastroLivro() {
  return (
    <>
      <NavBar active={"cadastrar-livros"} />

      <main className="text-black m-10 p-8">
        <h2 className="text-center text-4xl font-bold">Cadastrar livro</h2>
        <div className="flex flex-col mx-40 my-10">
          <TextInput name="titulo" id="titulo" label="Título" />
          <TextInput name="autor" id="autor" label="Autor" />
          <div className="flex flex-row mt-3 gap-8">
            <TextInput name="pg-atual" id="pg-atual" label="Página atual" />
            <TextInput name="pg-total" id="pg-total" label="Página total" />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="categoria">Categoria</label>
            <select className="bg-indigo-100 border border-indigo-100 p-2 focus:outline-none rounded" id="categoria" name="categoria">
              <option value="tecnologia">Tecnologia</option>
              <option value="romance">Romance</option>
              <option value="terror">Terror</option>
              <option value="ficcao">Ficção</option>
            </select>
          </div>
          <div className="flex flex-row mt-6 gap-8">
            <Button icon={<FontAwesomeIcon className="w-4" icon="fa-solid fa-plus"/>} href="/cadastro-livro">
              cadastrar
            </Button>
            <Button icon={<FontAwesomeIcon className="w-4" icon="fa-solid fa-times"/>} variant="secondary">
              cancelar
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}
