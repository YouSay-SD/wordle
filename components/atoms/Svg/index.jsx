import { Icon } from '../Icon'
import styles from './Svg.module.scss'
import className from 'classnames/bind'
const cx = className.bind(styles)

const BackspacePath = '<path d="M9.94968 4.31639L13.587 7.78048L17.2243 4.31639L18.3244 5.47152L14.7435 8.88191L18.3244 12.2923L17.2243 13.4474L13.587 9.98334L9.94968 13.4474L8.84955 12.2923L12.4305 8.88191L8.84955 5.47152L9.94968 4.31639Z" fill="#56575E"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.68607 0.906006C6.39072 0.906006 6.1119 1.04237 5.93057 1.27551L0.47151 8.2943C0.202693 8.63992 0.202694 9.1239 0.47151 9.46952L5.93057 16.4883C6.1119 16.7214 6.39071 16.8578 6.68607 16.8578H21.6027C22.1313 16.8578 22.5599 16.4293 22.5599 15.9007V1.86311C22.5599 1.33451 22.1313 0.906006 21.6027 0.906006H6.68607ZM2.03536 8.88191L6.99814 2.50119H20.9647V15.2626H6.99814L2.03536 8.88191Z" fill="#56575E"/>'
const BackspaceSVG = (props) => {
  return (
    <Icon width='23px' height='17px' viewBox='0 0 23 17' {...props} className={cx('backspace-button-svg')}>
      {BackspacePath}
    </Icon>
  )
}

const TutorialButtonPath = '<g clip-path="url(#clip0_7_1572)"><path d="M27 13.5C27 17.0804 25.5777 20.5142 23.0459 23.0459C20.5142 25.5777 17.0804 27 13.5 27C9.91958 27 6.4858 25.5777 3.95406 23.0459C1.42232 20.5142 0 17.0804 0 13.5C0 9.91958 1.42232 6.4858 3.95406 3.95406C6.4858 1.42232 9.91958 0 13.5 0C17.0804 0 20.5142 1.42232 23.0459 3.95406C25.5777 6.4858 27 9.91958 27 13.5ZM9.2745 10.1807H10.6667C10.8996 10.1807 11.0852 9.99 11.1156 9.75881C11.2674 8.65181 12.0268 7.84519 13.3802 7.84519C14.5378 7.84519 15.5976 8.424 15.5976 9.81619C15.5976 10.8877 14.9664 11.3805 13.9691 12.1298C12.8334 12.9549 11.934 13.9185 11.9981 15.4828L12.0032 15.849C12.005 15.9597 12.0502 16.0653 12.1291 16.143C12.208 16.2206 12.3143 16.2641 12.4251 16.2641H13.7936C13.9055 16.2641 14.0128 16.2197 14.0919 16.1406C14.1711 16.0614 14.2155 15.9541 14.2155 15.8422V15.6651C14.2155 14.4534 14.6762 14.1007 15.9199 13.1574C16.9476 12.3761 18.0191 11.5087 18.0191 9.68794C18.0191 7.13813 15.8659 5.90625 13.5084 5.90625C11.3704 5.90625 9.02812 6.90187 8.86781 9.76388C8.8655 9.81837 8.87436 9.87276 8.89385 9.92371C8.91334 9.97465 8.94305 10.0211 8.98114 10.0601C9.01923 10.0992 9.06491 10.13 9.11536 10.1507C9.1658 10.1715 9.21996 10.1817 9.2745 10.1807ZM13.1979 21.0532C14.2273 21.0532 14.9344 20.3884 14.9344 19.4889C14.9344 18.5574 14.2256 17.9027 13.1979 17.9027C12.2124 17.9027 11.4952 18.5574 11.4952 19.4889C11.4952 20.3884 12.2124 21.0532 13.1996 21.0532H13.1979Z" fill="#818181"/></g><defs><clipPath id="clip0_7_1572"><rect width="27" height="27" fill="white"/></clipPath></defs>'
const TutorialButtonSVG = (props) => {
  return (
    <Icon width='27px' height='27px' viewBox='0 0 27 27' {...props} style={{ cursor: 'pointer' }} className={cx('tutorial-button-svg')}>
      {TutorialButtonPath}
    </Icon>
  )
}

const StatisticsButtonPath = '<rect x="4.93549" y="6" width="29.6129" height="24" rx="2" fill="black"/><path d="M13.1613 15L13.1613 24" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.7419 18V24" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M26.3226 12V24" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>'
const StatisticsButtonSVG = (props) => {
  return (
    <Icon width='40px' height='36px' viewBox='0 0 40 36' {...props} style={{ cursor: 'pointer' }} className={cx('statistics-button-svg')}>
      {StatisticsButtonPath}
    </Icon>
  )
}

export { BackspaceSVG, TutorialButtonSVG, StatisticsButtonSVG }
