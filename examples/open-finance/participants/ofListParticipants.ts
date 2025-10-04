import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const apiEfi = new EfiPay(options)

let params = {
	nome: '',
}

apiEfi.ofListParticipants(params)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
