import { BiChevronDown } from 'react-icons/bi'
import { useState } from 'react'
import styles from './select.module.css'
import clsx from 'clsx'

function Select({ placeholder, items = [], selectedDefault }) {
    const [showOption, setShowOption] = useState(false)
    const [selectValue, setSelectValue] = useState()

    const handleSelect = label => {
        setSelectValue(label)
    }

    return (
        <>
            <div
                className={clsx(styles.select, {
                    [styles.show]: showOption,
                })}
                onClick={() => setShowOption(!showOption)}
            >
                <span className={styles.text}>
                    {selectValue || placeholder}{' '}
                </span>{' '}
                <BiChevronDown />
                <div
                    className={clsx(styles.optionContainer, {
                        [styles.hide]: !showOption,
                    })}
                >
                    {items.map(({ id, label }) => (
                        <Option
                            key={id}
                            label={label}
                            onSelect={handleSelect}
                            selected={selectValue === label}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

function Option({ label, onSelect, selected }) {
    return (
        <>
            <div
                className={clsx(styles.option, {
                    [styles.selected]: selected,
                })}
                onClick={() => onSelect(label)}
            >
                <span className={styles.text}>{label}</span>
            </div>
        </>
    )
}

export default Select
