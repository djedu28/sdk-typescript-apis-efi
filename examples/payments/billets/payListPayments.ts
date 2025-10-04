import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const apiEfi = new EfiPay(options)

let params = {
	dataInicio: '2022-01-01',
	dataFim: '2024-06-30',
}

// O método payListPayments indica os campos que devem ser enviados e que serão retornados
apiEfi.payListPayments(params)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
