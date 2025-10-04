import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	id: 1002,
	parcel: 1,
}

let body = {
	email: 'oldbuck@apiEfi.com.br',
}

const apiEfi = new EfiPay(options)

// O método sendCarnetParcelEmail indica os campos que devem ser enviados e que serão retornados
apiEfi.sendCarnetParcelEmail(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
