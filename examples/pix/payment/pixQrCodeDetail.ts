import EfiPay from 'sdk-typescript-apis-efi';
import options from '../../credentials';

let body = {
    pixCopiaECola: "00020101021226830014BR.GOV.BCB.PIX2561qrcodespix.sejaefi.com.br/v2 41e0badf811a4ce6ad8a80b306821fce5204000053000065802BR5905EFISA6008SAOPAULO60070503***61040000"
}

const apiEfi = new EfiPay(options)

// O método pixQrCodeDetail indica os campos que devem ser enviados e que serão retornados
apiEfi.pixQrCodeDetail({}, body)
    .then((resposta) => {
        console.log(resposta) // Aqui você tera acesso a resposta da API e os campos retornados de forma intuitiva
    })
    .catch((error) => {
        console.log(error)
    })
