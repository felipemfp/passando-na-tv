import inquirer from 'inquirer'
import chalk from 'chalk'
import * as meuguia from './meuguia'

const requestByCategory = {
  'todos': meuguia.getAll,
  'filmes': meuguia.getMovies,
  'series': meuguia.getTvSeries,
  'esportes': meuguia.getSports,
  'infantil': meuguia.getKids,
  'documentarios': meuguia.getDocumentaries,
  'noticias': meuguia.getNews,
  'abertos': meuguia.getOpen,
  'entretenimento': meuguia.getEntertainment
}

class PassandoNaTvCli {
  constructor (cli) {
    this._cli = cli
  }

  list (category) {
    requestByCategory[category]()
      .then(this._filterResultsByInput)
      .then(this._checkResults)
      .then(this._sortResultsByChannel)
      .then(this._formatResults)
      .then(this._createListFromResults)
      .then(inquirer.prompt)
      .catch(this._handleError)
  }

  isValidCategory (category) {
    return (typeof requestByCategory[category]) === 'function'
  }

  _filterResultsByInput (results) {
    return results.filter(result => {
      if (this._cli.input.length > 0) {
        let channel = result.channel.description.toLowerCase()
        return this._cli.input.some(input => channel.indexOf(input) > -1)
      }
      return true
    })
  }

  _checkResults (results) {
    if (results.length === 0) {
      if (this._cli.input.length > 0) {
        console.log(`Sem resultados para: ${chalk.red(this._cli.input.join(', '))}.`)
      } else {
        console.log(`Sem resultados.`)
      }
      throw new Error('No results.')
    }
    return results
  }

  _sortResultsByChannel (results) {
    let resultsSorted = [...results]
    resultsSorted.sort((a, b) => {
      if (a.channel.description > b.channel.description) {
        return 1
      }
      if (a.channel.description < b.channel.description) {
        return -1
      }
      return 0
    })
    return resultsSorted
  }

  _formatResults (results) {
    return results.map(result => ({
      name: `${chalk.blue('[' + result.channel.description + ']')} ${result.title} ${chalk.yellow('@')} ${chalk.green(result.time)}`
    }))
  }

  _createListFromResults (results) {
    return [{
      name: 'show',
      message: 'Passando na TV...',
      type: 'list',
      choices: results
    }]
  }

  _handleError (err) {
    if (err.message !== 'No results.') {
      console.log('Algo deu errado.', chalk.red('Você tem internet?'))
    }
  }
}

export default PassandoNaTvCli
