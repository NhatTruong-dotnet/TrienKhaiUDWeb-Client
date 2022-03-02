import Select from './Select/Select'
import styles from './sort.module.css'

const arr1 = [
    {
        id: 1,
        label: 'Sách tiếng Việt',
        value: 1,
    },
    {
        id: 2,
        label: 'Thiếu nhi',
        value: 2,
    },
    {
        id: 3,
        label: 'Văn học',
        value: 3,
    },
]

function Sort({ title }) {
    return (
        <div className={styles.sort}>
            <span>{title}: </span>
            <Select placeholder='Bán chạy' items={arr1} />
            <Select placeholder='Số lượng' items={arr1} />
        </div>
    )
}

export default Sort
