import Xray from 'x-ray'
const x = Xray()

const URL = {
  ALL: 'http://meuguia.tv/programacao/categoria/Todos',
  MOVIES: 'http://meuguia.tv/programacao/categoria/Filmes',
  TVSERIES: 'http://meuguia.tv/programacao/categoria/Series',
  SPORTS: 'http://meuguia.tv/programacao/categoria/Esportes',
  KIDS: 'http://meuguia.tv/programacao/categoria/Infantil',
  DOCUMENTARIES: 'http://meuguia.tv/programacao/categoria/Documentarios',
  NEWS: 'http://meuguia.tv/programacao/categoria/Noticias',
  OPEN: 'http://meuguia.tv/programacao/categoria/Aberta',
  ENTERTAINMENT: 'http://meuguia.tv/programacao/categoria/Variedades'
}

const scrape = (urlOrHtml) => {
  return x(urlOrHtml, 'li', [{
    title: 'li .prog_comp_tit',
    time: 'li .metadados strong',
    channel: 'li .metadados'
  }])
}

const normalize = (callback) => {
  return (err, results) => {
    if (err) {
      callback(err)
    }
    callback(null, results.map(result => ({
      ...result,
      channel: result.channel.split('|')[1].trim()
    })))
  }
}

const get = (urlOrHtml, callback) => {
  scrape(urlOrHtml)(normalize(callback))
}

export const getAll = (callback) => get(URL.ALL, callback)
export const getMovies = (callback) => get(URL.MOVIES, callback)
export const getTvSeries = (callback) => get(URL.TVSERIES, callback)
export const getSports = (callback) => get(URL.SPORTS, callback)
export const getKids = (callback) => get(URL.KIDS, callback)
export const getDocumentaries = (callback) => get(URL.DOCUMENTARIES, callback)
export const getNews = (callback) => get(URL.NEWS, callback)
export const getOpen = (callback) => get(URL.OPEN, callback)
export const getEntertainment = (callback) => get(URL.ENTERTAINMENT, callback)
