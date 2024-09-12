describe("Testes para a biblioteca", () => {
  const Biblioteca = require("../src/biblioteca");

  const biblioteca = new Biblioteca();

  beforeAll(() => {
    biblioteca.adicionarLivro({
      id: 1,
      titulo: "Livro 1",
      autor: "Autor 1",
      genero: "Ficção",
      ano: 2020,
      emprestado: false,
    });
    biblioteca.adicionarLivro({
      id: 2,
      titulo: "Livro 2",
      autor: "Autor 2",
      genero: "Aventura",
      ano: 2019,
      emprestado: false,
    });
    biblioteca.adicionarLivro({
      id: 3,
      titulo: "Livro 3",
      autor: "Autor 3",
      genero: "Romance",
      ano: 2018,
      emprestado: false,
    });
    biblioteca.adicionarLivro({
      id: 4,
      titulo: "Shereek 4",
      autor: "Autor 4",
      genero: "Fantasia",
      ano: 2021,
      emprestado: false,
    });
    biblioteca.adicionarLivro({
      id: 5,
      titulo: "Livro 5",
      autor: "Autor 5",
      genero: "Mistério",
      ano: 2022,
      emprestado: false,
    });
    biblioteca.adicionarLivro({
      id: 6,
      titulo: "Livro 6",
      autor: "Autor 6",
      genero: "Suspense",
      ano: 2023,
      emprestado: true,
    });
    biblioteca.adicionarLivro({
      id: 8,
      titulo: "Livro 8",
      autor: "Autor 2",
      genero: "Biografia",
      ano: 2020,
      emprestado: false,
    });
    biblioteca.adicionarLivro({
      id: 9,
      titulo: "Livro 9",
      autor: "Autor 7",
      genero: "Ficção",
      ano: 2017,
      emprestado: false,
    });
    biblioteca.adicionarLivro({
      id: 10,
      titulo: "Livro 10",
      autor: "Autor 8",
      genero: "Ação",
      ano: 2016,
      emprestado: false,
    });
    biblioteca.adicionarLivro({
      id: 11,
      titulo: "Livro 11",
      autor: "Autor 9",
      genero: "História",
      ano: 2021,
      emprestado: false,
    });
  });

  test("Adicionar livro", () => {
    biblioteca.adicionarLivro({
      id: 12,
      titulo: "Livro 12",
      autor: "Autor 10",
      genero: "Ciência",
      ano: 2021,
      emprestado: false,
    });
    expect(biblioteca.livros).toHaveLength(11);
  });

  test("Remover livro", () => {
    biblioteca.removerLivro(11);
    expect(biblioteca.livros).toHaveLength(10);
  });

  test("Buscar livro por id", () => {
    const livro = biblioteca.buscarLivroPorId(2);
    expect(livro.titulo).toBe("Livro 2");
  });

  test("Buscar livro por titulo", () => {
    const livros = biblioteca.buscarLivroPorTitulo("Livro");
    expect(livros).toHaveLength(9);
  });

  test("Listar livros", () => {
    const livros = biblioteca.listarLivros();
    expect(livros).toHaveLength(10);
  });

  test("Adicionar membros", () => {
    biblioteca.adicionarMembro({ id: 1, nome: "Membro 1" });
    biblioteca.adicionarMembro({ id: 2, nome: "Membro 2" });
    expect(biblioteca.membros).toHaveLength(2);
  });

  test("Remover membro", () => {
    biblioteca.removerMembro(1);
    expect(biblioteca.membros).toHaveLength(1);
  });

  test("Buscar membro por id", () => {
    const membro = biblioteca.buscarMembroPorId(2);
    expect(membro.nome).toBe("Membro 2");
  });

  test("Listar membros", () => {
    const membros = biblioteca.listarMembros();
    expect(membros).toHaveLength(1);
  });

  test("Emprestar livro", () => {
    biblioteca.adicionarMembro({ id: 3, nome: "Membro 3" });
    const emprestimo1 = biblioteca.emprestarLivro(5, 3);
    const emprestimo2 = biblioteca.emprestarLivro(5, 3);
    expect(emprestimo1).toBe(true);
    expect(emprestimo2).toBe(false);
  });

  test("Devolver livro", () => {
    const devolucao1 = biblioteca.devolverLivro(5);
    const devolucao2 = biblioteca.devolverLivro(5);
    expect(devolucao1).toBe(true);
    expect(devolucao2).toBe(false);
  });

  test("Listar livros emprestados", () => {
    const livros = biblioteca.listarLivrosEmprestados();
    expect(livros).toHaveLength(1);
  });

  test("Listar livros disponiveis", () => {
    const livros = biblioteca.listarLivrosDisponiveis();
    expect(livros).toHaveLength(9);
  });

  test("Contar livros", () => {
    const quantidade = biblioteca.contarLivros();
    expect(quantidade).toBe(10);
  });

  test("Contar membros", () => {
    const quantidade = biblioteca.contarMembros();
    expect(quantidade).toBe(2);
  });

  test("Listar livros pelo autor", () => {
    const livros = biblioteca.listarLivrosPorAutor("Autor 1");
    expect(livros).toHaveLength(2);
  });

  test("Listar livros por gênero", () => {
    const livros = biblioteca.listarLivrosPorGenero("Ficção");
    expect(livros).toHaveLength(2);
  });

  test("Atualizar informações do livro", () => {
    biblioteca.atualizarInformacaoLivro(2, { titulo: "Livro 2 Atualizado" });
    const livro = biblioteca.buscarLivroPorId(2);
    expect(livro.titulo).toBe("Livro 2 Atualizado");
  });

  test("Listar livros por ano", () => {
    const livros = biblioteca.listarLivrosPorAno(2021);
    expect(livros).toHaveLength(2);
  });
});
