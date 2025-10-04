import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let planBody = {
	name: 'My first plan',
	repeats: 24,
	interval: 2,
}

let subscriptionBody = {
	items: [
		{
			name: 'Product 1',
			value: 1000,
			amount: 2,
		},
	],
}

const apiEfi = new EfiPay(options)


function createSubscription(response) {
	let params = {
		id: response.data.plan_id,
	}

	return apiEfi.createSubscription(params, subscriptionBody)
}

// O método createPlan indica os campos que devem ser enviados e que serão retornados
apiEfi.createPlan({}, planBody)
	.then(createSubscription)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
