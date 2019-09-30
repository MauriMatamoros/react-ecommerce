import { useEffect } from 'react'
import axios from 'axios'

const Home = (props) => {
	return <>home</>
}

Home.getInitialProps = async () => {
	const url = `http://localhost:3000/api/products`
	const { data } = await axios.get(url)
	return {
		products: data
	}
}

export default Home
