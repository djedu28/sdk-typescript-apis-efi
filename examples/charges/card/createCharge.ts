import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let body = {
	items: [
		{
			name: 'Product 1',
			value: 1000,
			amount: 2,
		},
	],
	shippings: [
		{
			name: 'Default Shipping Cost',
			value: 100,
		},
	],
}

const apiEfi = new EfiPay(options)

// O método createCharge indica os campos que devem ser enviados e que serão retornados
apiEfi.createCharge({}, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
