import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
	e2eId: 'E18236120202104191813s0326120V4K',
}

const apiEfi = new EfiPay(options)

apiEfi.pixDetailReceived(params)
	.then((resposta) => {
		console.log(resposta)
	})
	.catch((error) => {
		console.log(error)
	})
