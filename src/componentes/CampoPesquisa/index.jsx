import styles from './CampoPesquisa.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

export default function CampoPesquisa({ value, pesquisaAtualizada }) {
    
    const pesquisa = (event) => {
      pesquisaAtualizada(event.target.value);
    };
  
    return (
      <div className={styles.campoPesquisa}>
        <span>
          <AiOutlineSearch color="#757575" />
        </span>
        <input
          value={value}
          placeholder="Pesquisar"
          onChange={pesquisa}
        />
      </div>
    );
  }