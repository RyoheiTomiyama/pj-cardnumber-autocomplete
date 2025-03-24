import Image from 'next/image'
import type { ChangeEvent } from 'react'
import type React from 'react'
import { useCallback, useEffect, useState } from 'react'

import IcChip from '@/assets/images/ic_chip.svg'

import styles from './Card.module.css'

type Props = {
  className?: string
}

const Card: React.FC<Props> = ({ className }) => {
  const [month, setMonth] = useState<string>('')
  const [year, setYear] = useState<string>('')
  const [exp, setExp] = useState<string>('')

  const onChangeExp = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target instanceof HTMLInputElement) setExp(e.target.value)
    },
    [setExp],
  )
  const onChangeMonth = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target instanceof HTMLInputElement) setMonth(e.target.value)
    },
    [setMonth],
  )
  const onChangeYear = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setYear(e.target.value)
    },
    [setYear],
  )

  useEffect(() => {
    if (month && year) {
      setExp(`${month}/${year.slice(-2)}`)
    } else {
      setExp('')
    }
    return
  }, [month, year])

  return (
    <div className={`${styles.cardWrapper} ${className}`}>
      <div className={styles.card}>
        <Image src={IcChip} alt="Vercel Logo" width={47} height={43} />
        <form action="" className={styles.form}>
          <div className={styles.number}>
            <div className={styles.inputGroup}>
              <label htmlFor="cc-name">カード番号</label>
              <input type="text" name="cardnumber" autoComplete="cc-number" />
            </div>
          </div>
          <div className={styles.name}>
            <div className={styles.inputGroup}>
              <label htmlFor="cc-name">カード名義</label>
              <input type="text" name="ccname" autoComplete="cc-name" />
            </div>
          </div>
          <div className={styles.exp}>
            <div className={styles.inputGroup}>
              <label htmlFor="cc-name">有効期限</label>
              <input
                type="text"
                name="ccexp"
                autoComplete="cc-exp"
                value={exp}
                onChange={onChangeExp}
              />

              <input
                type="text"
                style={{ opacity: 0, height: 0, padding: 0, display: 'block' }}
                name="ccexpmonth"
                autoComplete="cc-exp-month"
                value={month}
                onChange={onChangeMonth}
              />
              <input
                type="text"
                style={{ opacity: 0, height: 0, padding: 0, display: 'block' }}
                name="ccexpyear"
                autoComplete="cc-exp-year"
                value={year}
                onChange={onChangeYear}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Card
