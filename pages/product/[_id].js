import axios from 'axios'

import ProductSummary from '../../components/Product/ProductSummary'
import ProductAttributes from '../../components/Product/ProductAttributes'
import baseUrl from '../../utils/baseUrl'

const Product = ({ product, user }) => {
	return (
		<>
			<ProductSummary {...product} />
			<ProductAttributes {...product} user={user} />
		</>
	)
}

Product.getInitialProps = async ({ query: { _id } }) => {
	const url = `${baseUrl}/api/product/${_id}`
	const { data } = await axios.get(url)
	return {
		product: data
	}
}

export default Product
