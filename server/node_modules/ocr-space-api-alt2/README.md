# ocr-space-api-alt2

Allow to access [ORC.SPACE API](https://ocr.space/ocrapi) to send images and get the embedded text.

More Details: https://ocr.space/ocrapi.

**IMPORTANT**:

The OCR is provided by [OCR.SPACE](https://ocr.space/). I don't have anything with them, I just want to help reworking and sharing this library.

## Main changes

1. The original library was using [request](https://github.com/request/request#readme), but since it's deprecated, I saw the necessity to migrate from it. Now I'm currently using [axios](https://github.com/axios/axios#readme) to perform the request.

2. Since [axios](https://github.com/axios/axios#readme) doesn't support `form data` request, I've used [query-string](https://github.com/sindresorhus/query-string#readme).

## Installation

### First - Register and Get your API key

Get you API key at this [link](https://ocr.space/ocrapi) (Direct link : http://eepurl.com/bOLOcf). Just, follow their steps.

### Second - Install npm package

```console
  npm i ocr-space-api-alt2
```

```console
  yarn add ocr-space-api-alt2
```

## Usage example

You can see and example at the folder [`example`](/example/example.js).

```javascript
const ocrSpaceApi2 = require('ocr-space-api-alt2')

var options =  { 
  apikey  : '<YOUR API KEY HERE>',
  filetype: 'png',
  verbose : true
}

// Image file to upload
const imageFilePath = `${__dirname}/loveText.jpg`

// Run and wait the result
const getText = async () => {
  try {
    let result = await ocrSpaceApi(imageFilePath, options)
    
    console.log({ result })
  } catch (error) {
    console.error(error)
  }
}

getText()
```

### Options

##### Verbose
  `Default = false`. Allows you to get a full response from the server, or just the text from the image if it was possible to get it.

##### Filetype
  * `pdf`
  * `gif`
  * `png`
  * `jpg`
  * `tif`
  * `bmp`

##### Language
  * English = `eng`
  * Portuguese = `por`
  * German = `ger`
  * Italian = `ita`
  * Spanish = `spa`
  * and mode details go to: https://ocr.space/ocrapi#PostParameters


## Authors

- **Denis** - _Initial Work_ - _Initial Documentation_ - [dennnisk](https://github.com/dennnisk).
- **Anthony Luzquiños** - _Rework_ - [AnthonyLzq](https://github.com/AnthonyLzq).

**Important**

This package was not fully tested, and every contribution will be appreciated.
