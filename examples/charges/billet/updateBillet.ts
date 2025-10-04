import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 1008,
}

let body = {
	expire_at: '2024-12-12',
}

const apiEfi = new EfiPay(options)

// O método updateBillet indica os campos que devem ser enviados e que serão retornados
apiEfi.updateBillet(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
