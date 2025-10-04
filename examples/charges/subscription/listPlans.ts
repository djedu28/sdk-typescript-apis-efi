import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	name: 'My Plan',
	limit: 20,
	offset: 0,
}

const apiEfi = new EfiPay(options)

// O método listPlans indica os campos que devem ser enviados e que serão retornados
apiEfi.listPlans(params)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
