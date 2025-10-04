import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 1000,
}

let body = {
	email: 'oldbuck@apiEfi.com.br',
}

const apiEfi = new EfiPay(options)

// O método sendSubscriptionLinkEmail indica os campos que devem ser enviados e que serão retornados
apiEfi.sendSubscriptionLinkEmail(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
