import axios from './ipconfig';

const api =  {
     getCheckInfo: (checkInfo)=> {
        return axios.post('/check', {
            id: checkInfo.checkNumber,
            date: `${checkInfo.stringDate} ${checkInfo.stringTime}`,
            fn: checkInfo.fiscalNumber
        })
    }
}
export default api;