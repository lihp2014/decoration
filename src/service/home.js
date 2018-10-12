import req from '../utils/request'

export const getBanner = param => {
  return req.get('/banner', param)
}
