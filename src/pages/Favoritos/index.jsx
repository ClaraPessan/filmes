import Filmes from "../../componentes/Catalogo/Filmes"
import Container from "../../componentes/Container"
import Titulo from "../../componentes/Titulo"
import { useFavoritoContext } from "../../contextos/Favoritos"
import { usePesquisaContext } from "../../contextos/Pesquisa"

function Favoritos() {
  const { favorito } = useFavoritoContext()
  const { termoPesquisa } = usePesquisaContext(); 
  
  const filmesFiltrados = termoPesquisa
    ? favorito.filter((filme) =>
        filme.title.toLowerCase().includes(termoPesquisa.toLowerCase())
      )
    : favorito;

  return (
    <>
      <Titulo>Favoritos</Titulo>
      <Container>
        <Filmes itens={filmesFiltrados} favoritosIds={favorito.map((fav) => fav.id)}/>
      </Container>
    </>
  )
}

export default Favoritos;
