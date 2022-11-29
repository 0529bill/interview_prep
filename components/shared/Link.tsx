import { default as NextLink } from 'next/link'

function Link({ ...props }) {
	return <NextLink {...props} style={{ textDecoration: 'none' }} />
}

export default Link
