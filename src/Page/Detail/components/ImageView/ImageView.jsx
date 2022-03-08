import { useEffect, useState } from 'react'
import SelectedImage from './components/SelectedImage/SelectedImage'
import ThumbnailItem from './components/ThumbnailItem/ThumbnailItem'
import styles from './ImageView.module.css'

function ImageView({ listImage = [] }) {
    const [selectedImage, setSelectedImage] = useState()

    useEffect(() => {
        setSelectedImage(listImage[0])
    }, [listImage])

    const handleChooseImage = imgSrc => {
        listImage.forEach(item => {
            if (imgSrc === item) {
                setSelectedImage(item)
            }
        })
    }

    return (
        <div className={styles.gallery}>
            <div className={styles.thumbnail}>
                {listImage.map((imgSrc, index) => (
                    <ThumbnailItem
                        key={index}
                        imgSrc={imgSrc}
                        alt={'image'}
                        onChooseImage={() => handleChooseImage(imgSrc)}
                    />
                ))}
            </div>
            <div className={styles.imageViewContainer}>
                <SelectedImage imgSrc={selectedImage} alt={selectedImage} />
            </div>
        </div>
    )
}

export default ImageView
