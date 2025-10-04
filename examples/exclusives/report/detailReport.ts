import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 1,
}

const apiEfi = new EfiPay(options)

apiEfi.detailReport(params)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
