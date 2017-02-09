import * as meuguia from './meuguia'

meuguia.getAll()
  .then(results => {
    results.forEach(result => {
      console.log(result)
    })
  })
  .catch(console.log)
