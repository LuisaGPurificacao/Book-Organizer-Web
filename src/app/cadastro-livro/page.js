import NavBar from "@/components/NavBar";

export default function CadastroLivro() {
  return (
    <>
      <NavBar active={"cadastrar-livros"} />

      <main className="text-black m-10 p-8">
        <h2 className="text-center text-4xl font-bold">Cadastrar livro</h2>
        <div className="flex flex-col mx-40 my-10">
          <div className="flex flex-col">
            <label htmlFor="titulo">Título</label>
            <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="text" id="titulo" required />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="autor">Autor</label>
            <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="text" id="autor" required />
          </div>
          <div className="flex flex-row mt-3 gap-8">
            <div className="flex flex-col flex-auto">
              <label htmlFor="pg-atual">Página atual</label>
              <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="number" id="pg-atual" required />
            </div>
            <div className="flex flex-col flex-auto">
              <label htmlFor="pg-total">Página total</label>
              <input className="bg-indigo-100 p-2 focus:outline-none rounded" type="number" id="pg-total" required />
            </div>
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
            <button type="reset" className="px-5 py-2 border border-2 border-indigo-200 rounded">cancelar</button>
            <button type="submit" className="px-5 py-2 bg-pink-500 text-white rounded">cadastrar</button>
          </div>
        </div>
      </main>
    </>
  )
}
