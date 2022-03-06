import React from 'react'
import styles from './RatingStar.module.css'
import clsx from 'clsx'
import { AiFillStar } from 'react-icons/ai'

function RatingStar({ value, large, style, children, onRating = () => {} }) {
    const result = []
    for (let i = 0; i < 5; i++) {
        if (i < value) {
            result.push(
                <AiFillStar
                    key={i}
                    className={clsx(styles.ratingIcon, styles.check, {
                        [styles.large]: large,
                    })}
                    onMouseEnter={() => onRating(i + 1)}
                />
            )
        } else {
            result.push(
                <AiFillStar
                    key={i}
                    className={clsx(styles.ratingIcon, {
                        [styles.large]: large,
                    })}
                    onMouseEnter={() => onRating(i + 1)}
                />
            )
        }
    }

    return (
        <div className={styles.ratingStar} style={style}>
            {result}
            {children}
        </div>
    )
}

export default RatingStar
