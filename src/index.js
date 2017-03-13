#!/usr/bin/env node

import meow from 'meow'
import updateNotifier from 'update-notifier'
import pkg from '../package.json'
import PassandoNaTvCli from './passandoNaTv'

const notifier = updateNotifier({pkg})
notifier.notify()

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

const passandoNaTvCli = new PassandoNaTvCli(cli)

if (arg === 'help' || !passandoNaTvCli.isValidCategory(arg)) {
  cli.showHelp()
} else {
  passandoNaTvCli.list(arg)
}
