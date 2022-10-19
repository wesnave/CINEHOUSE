const catalogo = require('./database/catalogo.json')


// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)


// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo


// alterar o status de emCartaz (true -> false e se tiver false -> true) 


// (alterarStatusEmCartaz) -> parametro: codigo

const alterarStatusEmCartaz = (codigo,callback) => {
  let filme = catalogo.find((filme) => filme.codigo == codigo)

}

alterarStatusEmCartaz(1)