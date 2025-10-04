import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 1008,
}

let body = {
	notification_url: 'http://yourdomain.com',
	custom_id: 'my_new_id',
}

const apiEfi = new EfiPay(options)

// O método updateChargeMetadata indica os campos que devem ser enviados e que serão retornados
apiEfi.updateChargeMetadata(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
