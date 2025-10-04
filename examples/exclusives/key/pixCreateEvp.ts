import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const apiEfi = new EfiPay(options)

// O método pixCreateEvp indica os campos que devem ser enviados e que serão retornados
apiEfi.pixCreateEvp()
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
