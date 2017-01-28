import * as meuguia from '../meuguia'
import nock from 'nock'
import fs from 'fs'

const html = fs.readFileSync('src/__tests__/html/sample.html', 'utf8')
const expected = [{
    title: 'Igreja Universal',
    time: '09h00',
    channel: 'Canal 21'
  },
  {
    title: 'Top TVZ',
    time: '10h00',
    channel: 'Multishow'
  },
  {
    title: 'Fala Brasil Especial',
    time: '10h00',
    channel: 'Record News'
  }, {
    title: 'Leilão Virtual Chave de Ouro',
    time: '10h00',
    channel: 'Terra Viva'
  }
]

describe('getAll', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getAll((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})

describe('getMovies', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getMovies((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})

describe('getTvSeries', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getTvSeries((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})

describe('getSports', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getSports((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})

describe('getKids', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getKids((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})

describe('getDocumentaries', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getDocumentaries((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})

describe('getNews', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getNews((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})

describe('getOpen', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getOpen((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})

describe('getEntertainment', () => {
  nock('http://meuguia.tv')
    .get(/\/programacao/)
    .reply(200, html)

  it('should return expected', done => {
    meuguia.getEntertainment((err, results) => {
      expect(results).toEqual(expected)
      done()
    })
  })
})
