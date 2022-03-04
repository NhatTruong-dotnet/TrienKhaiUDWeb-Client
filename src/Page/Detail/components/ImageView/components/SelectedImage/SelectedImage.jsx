import styles from './SelectedImage.module.css'

function SelectedImage({ imgSrc, alt }) {
    return <img src={imgSrc} alt={alt} className={styles.imageView} />
}

export default SelectedImage
