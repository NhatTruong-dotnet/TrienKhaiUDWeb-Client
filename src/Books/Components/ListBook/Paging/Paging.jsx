import { useState, useMemo } from 'react'
import styles from './paging.module.css'
import clsx from 'clsx'

function Paging({ totalPage }) {
    const [currentPage, setCurrentPage] = useState(1)

    const handleChangePage = page => {
        setCurrentPage(page)
    }

    const pagingElement = useMemo(() => {
        const result = []
        for (let i = 1; i <= totalPage; i++) {
            result.push(
                <div
                    className={clsx(styles.number, {
                        [styles.current]: i === currentPage,
                    })}
                    onClick={() => handleChangePage(i)}
                    key={i}
                >
                    {i}
                </div>
            )
        }
        return result
    }, [totalPage, currentPage])

    return (
        <div className={styles.paging}>
            {currentPage > 1 ? (
                <div
                    className={styles.btnPrev}
                    onClick={() => handleChangePage(currentPage - 1)}
                ></div>
            ) : (
                ' '
            )}

            {pagingElement}

            {currentPage < totalPage ? (
                <div
                    className={styles.btnNext}
                    onClick={() => handleChangePage(currentPage + 1)}
                ></div>
            ) : (
                ' '
            )}
        </div>
    )
}

export default Paging
