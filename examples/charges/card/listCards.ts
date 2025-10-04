import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let params = {
    begin_date: '2024-01-01',
    end_date: '2024-12-31',
    charge_type: 'card',
}

const apiEfi = new EfiPay(options)

// O método listCharges indica os campos que devem ser enviados e que serão retornados
apiEfi.listCharges(params)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })
