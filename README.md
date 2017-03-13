# passando-na-tv

[![npm version](https://badge.fury.io/js/passando-na-tv.svg)](https://badge.fury.io/js/passando-na-tv)

> :tv: A CLI tool for brazilian tv broadcasters

![demo](https://cdn.rawgit.com/felipemfp/passando-na-tv/f3265e03/.github/demo.gif)

## Instalação

```sh
npm i -g passando-na-tv
```

## Como usar?

```
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
```

## Agradecimentos

- [meuguia.TV](http://meuguia.tv/) por fornecer os dados

### Feito com...

- [meuguia.js](https://github.com/felipemfp/meuguia.js)
- [meow](https://github.com/sindresorhus/meow)
- [inquirer.js](https://github.com/SBoudrias/Inquirer.js)
- [chalk](https://github.com/chalk/chalk)
- [update-notifier](https://github.com/yeoman/update-notifier)

#### E no desenvolvimento...

- [jest](https://github.com/facebook/jest)
- [nock](https://github.com/node-nock/nock)
- [babel](https://github.com/babel/babel)

## Contribuição

Ficaremos muito felizes se você contribuir com este projeto seja enviando _Pull Request_ ou notificando bugs pelas _Issues_.

## Versionamento

Estamos usando o [SemVer](http://semver.org/) para versionamento. Para ver as versões disponíveis: [tags deste repositório](https://github.com/felipemfp/passando-na-tv/tags).

## Autores

* **Felipe Pontes** - *Trabalho inicial* - [felipemfp](https://github.com/felipemfp)

Veja também a lista de [contribuidores](https://github.com/felipemfp/passando-na-tv/contributors) que participaram deste projeto.

## Licença

Este projeto é licenciado pela Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
