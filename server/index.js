const express = require('express');

const axios = require('axios');
const app = express();
const atob = require('atob');
const parseString = require('xml2js').parseString;
const Iconv  = require('iconv').Iconv;

app.use(express.json())
app.get('/', (req, res) =>{
    res.send('Back');
})
app.post('/check', (req, res) => {
    console.log('EST');
    let config = {
        method: 'get',
        url: 'https://cabinet.tax.gov.ua/ws/api_public/rro/chkAll',
        headers: {
            'Cookie': 'cabinet-web=cabinet-web-duo'
        },
        params : {
            id: req.body.id,
            date: req.body.date,
            fn: req.body.fn,
            type: '1',
            token: '1c45a174-c125-48e1-b955-e85004123c89'
        }
    };
    axios(config)
        .then((response) => {
            if(response.data.check) {
                const body = new Buffer.from(
                    atob(response.data.check),
                    'binary'
                );
                const utf8 = Iconv('windows-1251', 'utf8');
                const rrs = utf8.convert(body).toString();
                const string = rrs.split('&quot;').join(`'`)
                parseString(string, function (err, result) {
                    res.send(result.DAT)
                });
            }
            else{
                res.send({
                    error: 'Помилка',
                    error_description: "Чек з такими даними не знайдено, перевірте правильність введення даних"
                })
            }
        })
        .catch((error) => {
            res.send(error.response.data);
        });
});

const port = process.env.PORT || 5000
app.listen(port, (err)=>{
    if(err) {
        console.error(err)
    }
    console.log(`Server started at port ${port}`)
})