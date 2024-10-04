import { Link, LinkProps } from '@mui/material'
import '@styles/ui/DefaultLink.css'

const DefaultLink: React.FC<LinkProps> = (props) => {
  const {children, ...rest} = props
  return (
    <Link className='hack2024-default-link' href="#" {...rest}>{children}</Link>
  )
}

export default DefaultLink