import React from 'react'
import Image from 'next/image'
import styles from './Card.module.css'
import IcChip from '@/assets/images/ic_chip.svg'

type Props = {
  className?: string
}

const Card: React.FC<Props> = ({ className }) => {
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
              <input type="text" name="ccexp" autoComplete="cc-exp" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Card
