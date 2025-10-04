import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 1001,
}

let body = {
	description: 'This carnet is about a service',
}

const apiEfi = new EfiPay(options)

// O método createCarnetHistory indica os campos que devem ser enviados e que serão retornados
apiEfi.createCarnetHistory(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
