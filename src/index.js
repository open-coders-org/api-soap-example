import express from 'express'
import soap from 'soap'

var url = 'http://example.com/wsdl?wsdl'

const app = express()

app.listen(4000, () => {
  console.log('Server on port', 4000)
})

var args = { name: 'value' }
soap
  .createClientAsync(url)
  .then((client) => {
    return client.MyFunctionAsync(args)
  })
  .then((result) => {
    console.log(result)
  })
