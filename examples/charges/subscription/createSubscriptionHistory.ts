import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 1001,
}

let body = {
	description: 'This subscription is about a service',
}

const apiEfi = new EfiPay(options)

// O método createSubscriptionHistory indica os campos que devem ser enviados e que serão retornados
apiEfi.createSubscriptionHistory(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
