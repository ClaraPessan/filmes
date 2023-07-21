import styles from './Informacao.module.scss'
import filmes from '../../json/filmes.json'
import { useParams } from 'react-router-dom'
import Container from '../../componentes/Container'
import Titulo from '../../componentes/Titulo'

export default function Informacao() {
    const { id } = useParams()
    const filmeId = parseInt(id);
    const filmeSelecionado = filmes.find(filme => filme.id === filmeId)

    if (!filmeSelecionado) {
        return <Titulo>Filme não encontrado!</Titulo>;
    }

    return (
        <Container>
            <section className={styles.informacoes}>
                <img src={filmeSelecionado.photo} alt={filmeSelecionado.title}/>
                <div className={styles.informacoes__informacao}>
                    <h2>{filmeSelecionado.title}</h2>
                    <h3>{filmeSelecionado.tag}</h3>
                    <p>{filmeSelecionado.description}</p>
                </div>
            </section>
        </Container>
    )
}