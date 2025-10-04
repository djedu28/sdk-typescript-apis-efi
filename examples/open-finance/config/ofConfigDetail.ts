import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const apiEfi = new EfiPay(options)

apiEfi.ofConfigDetail()
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
