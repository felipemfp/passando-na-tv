import Xray from 'x-ray'
const x = Xray()

const URL_BASE = 'http://meuguia.tv'

const ENDPOINTS = {
  ALL: '/programacao/categoria/Todos',
  MOVIES: '/programacao/categoria/Filmes',
  TVSERIES: '/programacao/categoria/Series',
  SPORTS: '/programacao/categoria/Esportes',
  KIDS: '/programacao/categoria/Infantil',
  DOCUMENTARIES: '/programacao/categoria/Documentarios',
  NEWS: '/programacao/categoria/Noticias',
  OPEN: '/programacao/categoria/Aberta',
  ENTERTAINMENT: '/programacao/categoria/Variedades'
}

const url = (urlBase, endpoint) => `${urlBase}${endpoint}`

const scrape = (url) => {
  return x(url, 'li', [{
    title: 'li .prog_comp_tit',
    time: 'li .metadados strong',
    channel: {
      id: 'li a@href',
      description: 'li .metadados'
    }
  }])
}

const normalize = (resolve, reject) => {
  return (err, results) => {
    if (err) {
      return reject(err)
    }
    return resolve(results.map(result => {
      if (!result.title) {
        return
      }
      let { id, description } = result.channel
      return {
        ...result,
        channel: {
          description: description.split('|')[1].trim(),
          id: id.split('/').slice(-1)[0].trim()
        }
      }
    }).filter(result => result))
  }
}

const get = (url) => {
  return new Promise((resolve, reject) => {
    scrape(url)(normalize(resolve, reject))
  })
}

export const getAll = () => get(url(URL_BASE, ENDPOINTS.ALL))

export const getMovies = () => get(url(URL_BASE, ENDPOINTS.MOVIES))

export const getTvSeries = () => get(url(URL_BASE, ENDPOINTS.TVSERIES))

export const getSports = () => get(url(URL_BASE, ENDPOINTS.SPORTS))

export const getKids = () => get(url(URL_BASE, ENDPOINTS.KIDS))

export const getDocumentaries = () => get(url(URL_BASE, ENDPOINTS.DOCUMENTARIES))

export const getNews = () => get(url(URL_BASE, ENDPOINTS.NEWS))

export const getOpen = () => get(url(URL_BASE, ENDPOINTS.OPEN))

export const getEntertainment = () => get(url(URL_BASE, ENDPOINTS.ENTERTAINMENT))
