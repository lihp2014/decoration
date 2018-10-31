import req from '../utils/request'
import { getUrlParam } from '../utils/getToken'

let token = getUrlParam('token', 'test123')

export const getBanner = param => {
  return req.get('/banner?token=' + token, param)
}

export const getNews = param => {
  return req.get('/news?token=' + token, param)
}

export const getNewsDetail = param => {
  return req.get('/news/' + param + '?token=' + token, param)
}

export const getExamples = param => {
  return req.get('/examples?token=' + token, param)
}

export const getExampleDetail = param => {
  return req.get('/examples/' + param + '?token=' + token, param)
}

// 留言板
export const postMsg = param => {
  return req.post('/messageuser?token=' + token, param)
}

// 贷款申请
export const loanApply = param => {
  return req.post('/loanapply?token=' + token, param)
}

// 个人中心
export const getPersonInfo = param => {
  return req.get('/personinfo?token=' + token, param)
}

// 合伙人
export const partnerBind = param => {
  return req.get('/partner?token=' + token, param)
}

// 积分明细
export const moneyDetail = param => {
  return req.get('/pointfor/?token=' + token + param)
}

// 积分提现
export const withdrawPoint = param => {
  return req.post('/addpointfor?token=' + token, param)
}

// VIP
export const vipSpread = param => {
  return req.get('/vipuser?token=' + token, param)
}

// VIP第二市场
export const vipSecond = param => {
  return req.get('/vipusermarket?token=' + token, param)
}

// 关于我们
export const linkus = param => {
  return req.get('/linkus?token=' + token, param)
}

// 二维码
export const qrcode = param => {
  return req.get('/qrcode?token=' + token, param)
}
