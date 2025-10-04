import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

const apiEfi = new EfiPay(options)

let body = {
    periodicidade: "diario",
    envia_email: true,
    comprimir_arquivos: true
}

// O método createStatementRecurrency indica os campos que devem ser enviados e que serão retornados
apiEfi.createStatementRecurrency({}, body)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })
