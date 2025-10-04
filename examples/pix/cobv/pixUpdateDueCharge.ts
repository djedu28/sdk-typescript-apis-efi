import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

//Informe no body somente os dados que deseja atualizar
let body = {
	loc: {
		id: 789,
	},
	devedor: {
		logradouro: 'Alameda Souza, Numero 80, Bairro Braz',
		cidade: 'Recife',
		uf: 'PE',
		cep: '70011750',
		cpf: '12345678909',
		nome: 'Francisco da Silva',
	},
	valor: {
		original: '123.45',
	},
	solicitacaoPagador: 'Cobrança dos serviços prestados.',
}

let params = {
	txid: 'dt9BHlyzrb5jrFNAdfEDVpHgiOmDbVqVxd', // Informe o TxId da cobrança
}

const apiEfi = new EfiPay(options)

// O método pixUpdateDueCharge indica os campos que devem ser enviados e que serão retornados
apiEfi.pixUpdateDueCharge(params, body)
	.then((resposta) => {
		console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
	})
	.catch((error) => {
		console.log(error)
	})
