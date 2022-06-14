require('dotenv').config()
const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk');
const qiwiApi = new QiwiBillPaymentsAPI(process.env.QIWI_SECRET_KEY);

module.exports.post = async function paymentQIWI(billId, link) {
    const fields = {
        publicKey: `${process.env.QIWI_PUBLIC_KEY}`,
        amount: 3900,
        billId: billId,
        currency: 'RUB',
        successUrl: `http://test.ru/`,
        comment: 'Покупка курса "Развитие дошкольников"',
        expirationDateTime: qiwiApi.getLifetimeByDay(0.02)
    }

    qiwiApi.createBill( billId, fields ).then(data => {
        let fullLink = data.payUrl
        console.log(fullLink)
        let slicedLink = fullLink.substr(fullLink.length - 84)
        link = slicedLink     
    }) 
    return link
}

module.exports.get = async function getPaymentInfo(billId) {
    qiwiApi.getBillInfo(billId).then(data => {
        if(data.status.value === 'SUCCESS') {
            console.log(`${billId}: Успешно`)
            return
        } 
        else if(data.status.value === 'WAITING') {
            console.log(`${billId}: Ожидание оплаты`)
        } 
    })   
}
