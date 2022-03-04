import styles from './ThumbnailItem.module.css'

function ThumbnailItem({ imgSrc, alt, onChooseImage }) {
    return (
        <img
            className={styles.thumbnailItem}
            src={imgSrc}
            alt={alt}
            onClick={onChooseImage}
        />
    )
}

export default ThumbnailItem
