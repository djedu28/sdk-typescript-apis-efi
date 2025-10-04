import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let body = {
	items: [
		{
			name: 'Carnet Item 1',
			value: 1000,
			amount: 2,
		},
	],
	customer: {
		name: 'Gorbadoc Oldbuck',
		email: 'oldbuck@apiEfi.com.br',
		cpf: '94271564656',
		birth: '1977-01-15',
		phone_number: '5144916523',
	},
	repeats: 12,
	split_items: false,
	expire_at: '2023-01-01'
}

const apiEfi = new EfiPay(options)

// O método createCarnet indica os campos que devem ser enviados e que serão retornados
apiEfi.createCarnet({}, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
