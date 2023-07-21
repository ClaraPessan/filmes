import { useFavoritoContext } from '../../../contextos/Favoritos'
import { useNavigate } from 'react-router-dom'
import styles from './Filmes.module.scss'
import React from "react"
import { MdFavorite } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'

export default function Filmes({ itens }) {
    const navigate = useNavigate()
    const { favorito, adicionarFavorito } = useFavoritoContext();
    const favoritosIds = favorito.map((fav) => fav.id); // Cria uma lista com os IDs dos itens favoritos
  
    return (
      <ul className={styles.filmes}>
        {itens.map((item) => {
          const { id, photo, title } = item;
          const ehFavorito = favoritosIds.includes(id); // Verifica 
          const icone = ehFavorito ? 
            <MdFavorite color='red' cursor='pointer' size={20}/> : 
            <MdFavoriteBorder cursor='pointer' size={20}/>;
  
          return (
            <li key={id}>
              <img 
                src={photo} 
                alt={title} 
                onClick={() => navigate(`/info-filme/${id}`)}
              />
              <span onClick={() => {
                adicionarFavorito({ id, photo, title });
              }}>
                {icone}
              </span>
            </li>
          );
        })}
      </ul>
    );
  }