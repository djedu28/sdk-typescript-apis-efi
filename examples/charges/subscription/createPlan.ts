import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {}

let body = {
	name: 'My first plan',
	repeats: 24,
	interval: 2,
}

const apiEfi = new EfiPay(options)

// O método createPlan indica os campos que devem ser enviados e que serão retornados
apiEfi.createPlan(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
