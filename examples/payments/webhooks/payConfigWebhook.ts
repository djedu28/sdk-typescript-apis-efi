import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';


let body = {
    url: 'https://suaUrl.com.br/webhook',
}

const apiEfi = new EfiPay(options)

// O método payConfigWebhook indica os campos que devem ser enviados e que serão retornados
apiEfi.payConfigWebhook({}, body)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })
