type Props = {
  className?: string
}

const Header: React.FC<Props> = ({ className }) => {
  return <header className={`${className}`}></header>
}

export default Header
