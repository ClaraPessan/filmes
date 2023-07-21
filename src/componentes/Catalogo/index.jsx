import { useState } from 'react'
import filmoteca from '../../json/filmes.json'
import Container from "../Container";
import Tags from "../Tags";
import Filmes from './Filmes';
import { usePesquisaContext } from '../../contextos/Pesquisa';

export default function Catalogo() {
    const [itens, setItens] = useState(filmoteca);
    const tags = [...new Set(filmoteca.map((filme) => filme.tag))];
    const { termoPesquisa } = usePesquisaContext();
  
    const selecionaFotos = (tag) => {
      const novasFotos = filmoteca.filter((filme) => {
        return filme.tag === tag;
      });
      setItens(novasFotos);
    };
  
    const filmesFiltrados = termoPesquisa
      ? filmoteca.filter((filme) =>
          filme.title.toLowerCase().includes(termoPesquisa.toLowerCase())
        )
      : itens;
  
    return (
      <Container>
        <Tags tags={tags} setItens={setItens} selecionaFotos={selecionaFotos} />
        <Filmes itens={filmesFiltrados} />
      </Container>
    );
  }