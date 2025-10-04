import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 0,
}

let body = {
	items: [
		{
			name: 'Product One',
			value: 600,
			amount: 1,
		},
	],
	payment: {
		banking_billet: {
			expire_at: '2024-09-20',
			customer: {
				name: 'Gorbadoc Oldbuck',
				email: 'oldbuck@apiEfi.com.br',
				cpf: '94271564656',
				birth: '1977-01-15',
				phone_number: '5144916523',
			},
		},
	},
}

const apiEfi = new EfiPay(options)

// O método oneStepSubscription indica os campos que devem ser enviados e que serão retornados
apiEfi.oneStepSubscription(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	}).catch((error) => {
		console.log(error)
	})
