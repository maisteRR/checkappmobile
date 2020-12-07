// Load Modules
const fs = require('fs')
const axios = require('axios')
const util = require('util')
const queryString = require('query-string')

// Set default data
const _defaultOcrSpaceUrl = 'https://api.ocr.space/parse/image'
const _defaultImageType = 'png'
const _base64ImagePattern = 'data:%s;base64,%s'

/**
 * Run the request to OCR.SPACE and return the result.
 * @example
 * 
 *  Object {options}
 *
 *    { 
 *      apikey: '<YOUR_API_KEY_HERE>',
 *      language: 'por',
 *      isOverlayRequired: true,
 *      url: 'https://api.ocr.space/parse/image' ,
 *      imageFormat: 'image/gif' 
 *    }
 * 
 * @param {string} img path to local image file or url
 * @param {object} options object with the options
 * @param {boolean} url if the image comes from an url or not
 * @throws {error} error
 */

const _sendRequestToOcrSpace = async (img, options, url) => {
  let result

  try {
    const {
      apikey,
      language,
      detectOrientation,
      filetype,
      isCreateSearchablePdf,
      isOverlayRequired,
      isSearchablePdfHideTextLayer,
      isTable,
      OCREngine,
      scale,
      verbose
    } = options

    if(!apikey) throw new Error('The apikey is mandatory!')
    if(!img) throw new Error('The image (or pdf) directory is mandatory!')

    let data = {}

    if(language)
      data.language = language

    if(detectOrientation)
      data.detectOrientation = detectOrientation

    if(filetype)
      data.filetype = filetype
    else
      data.filetype = _defaultImageType

    if(isCreateSearchablePdf)
      data.isCreateSearchablePdf = isCreateSearchablePdf

    if(isOverlayRequired)
      data.isOverlayRequired = isOverlayRequired

    if(isSearchablePdfHideTextLayer)
      data.isSearchablePdfHideTextLayer = isSearchablePdfHideTextLayer

    if(isTable)
      data.isTable = isTable

    if(OCREngine)
      data.OCREngine = OCREngine

    if(scale)
      data.scale = scale

    if(url) {
      data.url = url
      data = queryString.stringify(data)
      result = await axios({
        data,
        headers: { 'apikey': apikey, 'Content-Type': 'multipart/form-data' },
        method : 'post',
        url    : _defaultOcrSpaceUrl
      })
    }
    else {
      switch(filetype) {
        case 'pdf':
          data.file = fs.createReadStream(img)
          break
        case 'gif':
        case 'png':
        case 'jpg':
        case 'jpeg':
        case 'tif':
        case 'bmp':
          const bitmap = fs.readFileSync(img)
          const base64Img = Buffer.from(bitmap).toString('base64')
          data.base64image = util.format(_base64ImagePattern, filetype ? `image/${filetype}` : _defaultImageType, base64Img)
          break
        default:
          throw new Error('The filetype is not supported')
      }
      data = queryString.stringify(data)
      result = await axios({
        data,
        headers: { 'apikey': apikey },
        method : 'post',
        url    : _defaultOcrSpaceUrl
      })
    }

    if(!verbose) return result.data.ParsedResults[0].ParsedText
    else return result

  } catch (error) {
    if(error.message) throw error

    throw error
  }
}

module.exports = _sendRequestToOcrSpace
