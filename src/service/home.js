import req from '../utils/request'

export const getBanner = param => {
  return req.get('/banner', param)
}

export const getNews = param => {
  return req.get('/news', param)
}

export const getNewsDetail = param => {
  return req.get('/news/' + param , param)
}

export const getExamples = param => {
  return req.get('/examples', param);
}

export const getExampleDetail = param => {
  return req.get('/examples/' + param, param)
}

// 留言板
export const postMsg = param => {
  return req.post('/messageuser', param);
}