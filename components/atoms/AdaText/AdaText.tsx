import styles from './AdaText.module.scss'
import className from 'classnames/bind'
import React, { FC } from 'react'
import { AdaTextProps } from './AdaText.interface'

const cx = className.bind(styles)

const AdaText: FC<AdaTextProps> = ({ adaText }) => <span className={cx('screen-reader-only')}>{adaText}</span>
export default AdaText
