import meow from 'meow'
import inquirer from 'inquirer'
import chalk from 'chalk'
// import updateNotifier from 'update-notifier'
// import pkg from '../package.json'
import * as meuguia from './meuguia'

const categories = {
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

const cli = meow(`
  Como usar
    $ passando-na-tv [canal]

  Opções
    --filmes, -f          Apenas canais de filmes
    --series, -s          Apenas canais de séries
    --esportes, -e        Apenas canais de esportes
    --infantil, -i        Apenas canais infantis
    --documentarios, -d   Apenas canais de documentários
    --noticias, -n        Apenas canais de notícias
    --abertos, -a         Apenas canais abertos
    --entretenimento, -t  Apenas canais de entretenimento
    --help, -h            Apresentar ajuda

  Exemplos
    $ passando-na-tv --filmes
    ... lista de programas em apenas os canais de filmes
    $ passando-na-tv axn
    ... lista de programas nos canais AXN

  Dados fornecidos por meuguia.TV
  `, {
    alias: {
      f: 'filmes',
      s: 'series',
      e: 'esportes',
      i: 'infantil',
      d: 'documentarios',
      n: 'noticias',
      a: 'abertos',
      t: 'entretenimento',
      h: 'help'
    }
  })

const arg = Object.keys(cli.flags).filter(f => f.length > 1)[0] || 'todos'

if (arg === 'help') {
  cli.showHelp()
} else if (categories[arg]) {
  categories[arg]()
    .then(results => results.filter(result => {
      if (cli.input.length > 0) {
        let channel = result.channel.description.toLowerCase()
        return cli.input.some(input => channel.indexOf(input) > -1)
      }
      return true
    }))
    .then(results => {
      if (results.length === 0) {
        if (cli.input.length > 0) {
          console.log(`Sem resultados para: ${chalk.red(cli.input.join(', '))}.`)
        } else {
          console.log(`Sem resultados.`)
        }
        throw new Error('No results.')
      }
      return results
    })
    .then(results => {
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
    })
    .then(results => results.map(result => ({
      name: `[${chalk.blue(result.channel.description)}] ${result.title} - ${chalk.green(result.time)}`
    })))
    .then(choices => {
      return [{
        name: 'show',
        message: 'Passando na TV...',
        type: 'list',
        choices
      }]
    })
    .then(inquirer.prompt)
    .catch(err => {
      if (err.message !== 'No results.') {
        console.log('Algo deu errado.', chalk.red('Você tem internet?'))
      }
    })
} else {
  cli.showHelp()
}
