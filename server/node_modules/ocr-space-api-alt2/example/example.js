const ocrSpaceApi = require('../lib/ocrSpaceApi')

const options =  { 
  apikey  : '<YOUR API KEY HERE>',
  filetype: 'jpg',
  verbose : false
}

const imageFilePath = `${__dirname}/loveText.jpg`

const getText = async () => {
  try {
    let result = await ocrSpaceApi(imageFilePath, options)
    
    console.log({ result })
  } catch (error) {
    console.error(error)
  }
}

getText()
