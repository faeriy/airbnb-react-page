import styles from './style.module.scss';
import starIcon from './img/star.svg';


const Card = ({data}) => {
    const fractionDigits = 2;
    const rating = data.rating.toFixed(fractionDigits);

    return (
        <article className={styles.card}>
            <img
                className={styles.img}
                src={`img/objects/${data.img}`}
                srcSet={`img/objects/${data.img2x}`}
                alt="card" />

            <div className={styles.descWrapper}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.title}>{data.location}</h3>
                    <div className={styles.rating}>
                        <img src={starIcon} alt="star" className={styles.star} />
                        {rating}
                    </div>
                </div>

                <p className={styles.description}>{data.desc}</p>
                <p className={styles.date}>{data.dates_available}</p>
                <p className={styles.price}>
                    <strong>${data.price_per_night}</strong>
                    <span> night</span>
                </p>
            </div>
            <a href="" className={styles.link}></a>
        </article>
    );
}

export default Card;