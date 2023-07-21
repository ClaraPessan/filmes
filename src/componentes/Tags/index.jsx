import styles from './Tags.module.scss';

export default function Tags({ tags, selecionaFotos }) {
    return (
        <ul className={styles.tags}>
            {tags.map((tag) => {
                return (
                    <li key={tag} onClick={() => {selecionaFotos(tag)}}>
                        {tag}
                    </li>
                )
            })}
        </ul>
    )
}