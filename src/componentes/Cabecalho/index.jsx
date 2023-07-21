import { useNavigate } from 'react-router-dom'
import CampoPesquisa from '../CampoPesquisa'
import styles from './Cabecalho.module.scss'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { usePesquisaContext } from '../../contextos/Pesquisa';

export default function Cabecalho() {
    const navigate = useNavigate();
    const { termoPesquisa, setTermoPesquisa } = usePesquisaContext();
  
    return (
      <header className={styles.cabecalho}>
        <h1 onClick={() => navigate('/')}>Filmoteca</h1>
        <CampoPesquisa value={termoPesquisa} pesquisaAtualizada={setTermoPesquisa} />
        <MdOutlineFavoriteBorder
          size={30}
          color="#d1d1d1"
          cursor="pointer"
          onClick={() => navigate('/favoritos')}
        />
      </header>
    );
  }