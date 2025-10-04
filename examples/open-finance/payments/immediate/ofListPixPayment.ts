import EfiPay from 'sdk-typescript-apis-efi'
import options from '../../../credentials'

const apiEfi = new EfiPay(options)

let params = {
	inicio: '2022-01-01',
	fim: '2025-06-30',
}

// O método ofListPixPayment indica os campos que devem ser enviados e que serão retornados
apiEfi.ofListPixPayment(params)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
