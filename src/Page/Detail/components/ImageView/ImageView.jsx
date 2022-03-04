import { useState } from 'react'
import SelectedImage from './components/SelectedImage/SelectedImage'
import ThumbnailItem from './components/ThumbnailItem/ThumbnailItem'
import styles from './ImageView.module.css'

function ImageView({
    listImage = [
        {
            id: 1,
            imgSrc: 'https://cdn0.fahasa.com/media/catalog/product/t/h/tham-tu-lung-danh-conan-_-tap-99.jpg',
            name: 'ttld',
        },
        {
            id: 2,
            imgSrc: 'https://cdn0.fahasa.com/media/catalog/product/6/0/600ra-bo-suoi---bm_1.jpg',
            name: 'rbs',
        },
    ],
}) {
    const [selectedImage, setSelectedImage] = useState(listImage[0])

    const handleChooseImage = id => {
        listImage.forEach(item => {
            if (id === item.id) {
                setSelectedImage(item)
            }
        })
    }

    return (
        <div className={styles.gallery}>
            <div className={styles.thumbnail}>
                {listImage.map(({ id, imgSrc, name }) => (
                    <ThumbnailItem
                        key={id}
                        imgSrc={imgSrc}
                        alt={name}
                        onChooseImage={() => handleChooseImage(id)}
                    />
                ))}
            </div>
            <div className={styles.imageViewContainer}>
                <SelectedImage
                    imgSrc={selectedImage.imgSrc}
                    alt={selectedImage.name}
                />
            </div>
        </div>
    )
}

export default ImageView
