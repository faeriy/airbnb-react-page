import styles from './CategoryItem.module.scss';


const CategoryItem = ({title, img}) => {
    return (
        <div className={styles.categoryItem}>
            <div className={styles.img}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
}

export default CategoryItem;