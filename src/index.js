import * as meuguia from './meuguia'

meuguia.getAll((_, results) => {
  results.forEach(result => {
    console.log('%s | %s | %s', result.channel, result.time, result.title)
  })
})
