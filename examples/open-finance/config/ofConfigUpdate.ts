import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const apiEfi = new EfiPay(options)

let body = {
	redirectURL: 'https:/suaUrl.com.br/redirect',
	webhookURL: 'https://suaUrl.com.br/webhook',
}

apiEfi.ofConfigUpdate({}, body)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
