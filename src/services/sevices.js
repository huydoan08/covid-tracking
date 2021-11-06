import REACT_API from '../constant/constant';
import axiosClient from '../lib/axios';

const Services = {
	get: () => {
		const url = REACT_API.COUNTRY
		return axiosClient.get(url)
	},
	getId: (country) => {
		const url = `${REACT_API.DAYONE_COUNTRY}/${country}`
		return axiosClient.get(url)
	}
}
export default Services
