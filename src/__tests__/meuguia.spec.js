import * as meuguia from '../meuguia'
import nock from 'nock'
import fs from 'fs'

const html = fs.readFileSync('src/__tests__/html/sample.html', 'utf8')
const expected = [{
    title: 'Igreja Universal',
    time: '09h00',
    channel: {
      description: 'Canal 21',
      id: 'C21'
    }
  },
  {
    title: 'Top TVZ',
    time: '10h00',
    channel: {
      description: 'Multishow',
      id: 'MSW',
    }
  },
  {
    title: 'Fala Brasil Especial',
    time: '10h00',
    channel: {
      description: 'Record News',
      id: 'RCN'
    }
  }, {
    title: 'Leilão Virtual Chave de Ouro',
    time: '10h00',
    channel: {
      description: 'Terra Viva',
      id: 'TVV'
    }
  }
]

describe('getAll', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getAll()
      .then(results => expect(results).toEqual(expected))
  })
})

describe('getMovies', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getMovies()
      .then(results => expect(results).toEqual(expected))
  })
})

describe('getTvSeries', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getTvSeries()
      .then(results => expect(results).toEqual(expected))
  })
})

describe('getSports', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getSports()
      .then(results => expect(results).toEqual(expected))
  })
})

describe('getKids', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getKids()
      .then(results => expect(results).toEqual(expected))
  })
})

describe('getDocumentaries', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getDocumentaries()
      .then(results => expect(results).toEqual(expected))
  })
})

describe('getNews', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getNews()
      .then(results => expect(results).toEqual(expected))
  })
})

describe('getOpen', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getOpen()
      .then(results => expect(results).toEqual(expected))
  })
})

describe('getEntertainment', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', () => {
    return meuguia.getEntertainment()
      .then(results => expect(results).toEqual(expected))
  })
})
