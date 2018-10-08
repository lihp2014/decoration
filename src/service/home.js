import req from '../utils/request'

export const homeData = param => {
  return req.get('/home', param)
}
